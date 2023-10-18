import { useState, useEffect } from 'react'
import * as toxicity from '@tensorflow-models/toxicity';

// Hooks
import useValidation from './useValidation'

const useRegistrationForm = () => {
    const [registrationValues, setRegistrationValues] = useState({
        description: '',
        year: '',
        paper: '',
        session: '',

        keywords: ''
    })
    const [registrationErrors, setRegistrationErrors ] = useState({
        description: false,
        year: false,
        paper: false,
        session: false,

        keywords: false
    })
    const [optionsValues, setOptionsValues] = useState({
        year: '',
        paper:'',
        session:''
    })

    const [notificationStatus, setNotificationStatus] = useState({
        show: false,
        message:'',
        type:'success'
    })

    const listItem = {
        // 2000 - date
        year: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        // 1 - 4
        paper: ["1", "2", "3", "4", "5", "6"],
        session: ["J", "N"]
    }

    const [output, setOutput] = useState(null)

    const [registering, setRegistering] = useState(false)
    const [doneRegistering, setDoneRegistering] = useState(false)
    
    const { 
        changeValues, 
        checkEmptyFields, 
        checkErrors } = useValidation(registrationValues, registrationErrors, setRegistrationValues, setRegistrationErrors, setNotificationStatus)

    // Reset to defaults
    function resetRegistrationValues() {
        setRegistrationValues({
            description: '',
            year: '',
            paper: '',
            session: '',

            keywords: ''
        })
        setRegistering(false)
    }

    function registerUser() {
        const numberOfErrors = checkErrors()
        if(numberOfErrors <= 0) {
            const numberOfFieldsErrors = checkEmptyFields()
            if(numberOfFieldsErrors <= 0) {
                setRegistering(true)
                // Reset notification status
                setNotificationStatus({
                    show: false,
                    message: '',
                    type: 'success'
                })
               
                const post = {
                    description: registrationValues.description,
                    year: registrationValues.year,
                    paper: registrationValues.paper,
                    session: registrationValues.session,

                    keywords: registrationValues.keywords
                }

                const threshold = 0.9;

                const labelsToInclude = ['identity_attack', 'insult', 'threat'];

                toxicity.load(threshold, labelsToInclude).then(model => {
                    model.classify([`${post.description}`]).then(predictions => {
                    predictions.map((prediction, index)=> {
                        setRegistering(false)
                        const { label, results } = prediction
                        const { probabilities, match } = results

                        if(output === null){
                            setOutput({ [label]:match })
                        }else{
                            setOutput((prevState)=> {
                                return {
                                        ...prevState,
                                        [label]: match
                                }
                            })
                        }
                    })
                    });
                });
            }
        }
    }

    return { 
        registrationValues, 
        registrationErrors, 
        notificationStatus, 
        setNotificationStatus,
        registering, 
        optionsValues, 
        doneRegistering,
        changeValues, 
        registerUser, 
        setRegistrationErrors, 
        setRegistrationValues, 
        checkErrors, 
        checkEmptyFields, 
        setOptionsValues,
        listItem,
    output }
}
 
export default useRegistrationForm



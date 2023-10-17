import { useState, useEffect } from 'react'

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
                // PUSH TO FIREBASE SERVER
                if(userid) {
                    // PUSH TO MONGO DB SERVER
                    const post = {
                        description: '',
                        year: '',
                        paper: '',
                        session: '',

                        keywords: ''
                    }
                }
        }
        }
    }

    return { 
        registrationValues, 
        registrationErrors, 
        notificationStatus, 
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
        listItem }
}
 
export default useRegistrationForm



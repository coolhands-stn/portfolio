import styles from "./editor.module.css"

// Assets
import { BiUserPlus } from "react-icons/bi"

// Components
import Textbox from '@/ui/input/textbox/textbox'
import Select from '@/ui/input/select/select'
import Textarea from '@/ui/input/textarea/textarea'
import RadioContainer from "@/ui/input/radio/container/container"
import Radio from "@/ui/input/radio/radio"
import Button from "@/ui/button/round/round"

// Hooks
import usePostQuestion from "@/hooks/usePostQuestion"

const Editor = ()=> {
    const { 
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
        listItem } = usePostQuestion()
    return (
        <section className={styles.editor}>
            <section className={styles.nav}>
                <div className={styles.title}>
                    <p> Discussion Forums / Chemistry </p>
                    <div className={styles.backArrow}>
                        {/* <MdKeyboardArrowLeft className={styles.icon} color="#0058FF" /> */}
                        <p>dashboard</p>
                    </div>
                </div>
            </section>
            <section className={styles.content}>            
                <div className={styles.inputs}>
                {/* Question */}
                    <div className={styles.qstn}>
                        <p className={styles.key}>
                            References, session
                        </p>
                        <p className={styles.footnote}>
                            Select the session the question was served for the exam, either June(J) or November(N) session
                        </p>
                    </div>
                    <RadioContainer name='session'>
                        <div style={{display: 'flex', justifyContent:'space-between'}}>
                            <Radio 
                                name='session' 
                                value='J' 
                                values={registrationValues}
                                setValue={setRegistrationValues} />
                            <Radio 
                                name='session' 
                                value='N'
                                values={registrationValues}
                                setValue={setRegistrationValues} />
                        </div>
                    </RadioContainer>
                </div>
                <div className={styles.inputs}>
                    {/* Question */}
                    <div className={styles.qstn}>
                        <p className={styles.key}>
                            References, year | paper
                        </p>
                        <p className={styles.footnote}>
                            Select the year and paper the question was served for the exam
                        </p>
                    </div>
                    <div className={styles.row}>
                        <Select 
                            id='year' 
                            disabled={false}
                            list={listItem.year}  
                            values={registrationValues} 
                            setValue={setRegistrationValues} 
                            errors={registrationErrors} 
                            setError={setRegistrationErrors}
                            optionsValues={optionsValues}
                            setOptionsValues={setOptionsValues} />
                        <Select 
                            id='paper' 
                            disabled={false}
                            list={listItem.paper}  
                            values={registrationValues} 
                            setValue={setRegistrationValues} 
                            errors={registrationErrors} 
                            setError={setRegistrationErrors}
                            optionsValues={optionsValues}
                            setOptionsValues={setOptionsValues} />
                    </div>
                </div>
                <div className={styles.inputs}>
                    {/* Question */}
                    <div className={styles.qstn}>
                        <p className={styles.key}>
                            Keywords | Topic
                        </p>
                        <p className={styles.footnote}>
                            Input keywords or the topic of the content you are posting
                        </p>
                    </div>
                    <div className={styles.row}>
                        <Textbox 
                            name='keywords'
                            value={registrationValues.keywords}
                            error={registrationErrors.keywords}
                            change={changeValues} 
                            type='keywords'/>
                    </div>
                </div>
                <div className={styles.inputs}>
                    {/* Question */}
                    <div className={styles.qstn}>
                        <p className={styles.key}>
                            Keywords | Topic
                        </p>
                        <p className={styles.footnote}>
                            Input keywords or the topic of the content you are posting
                        </p>
                    </div>
                    <div className={styles.row}>
                        <Textarea 
                            name='description'
                            value={registrationValues.description}
                            error={registrationErrors.description}
                            change={changeValues} 
                            type='description'/>
                    </div>
                </div>

                <div className={styles.inputs}>
                    {/* Register Account */}
                    <h1 className={styles.footnote}>
                        Send away your request
                    </h1>
                    <Button click={()=> registerUser()}>
                        <BiUserPlus className={styles.icon} size={18} />
                    </Button>
                </div>
            </section>
        </section>
    )
}

export default Editor
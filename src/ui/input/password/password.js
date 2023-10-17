import { useState } from 'react'

// Styles
import styles from './password.module.css';

// Assets
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

const Password = (props) => {
    // Input type
    const [inputType, setInputType] = useState('password');

    // Reveal and Hide Password
    const revealHidePassword = () => {
        setInputType((prevState)=> {
           return prevState === 'password'?'text':'password';
        })
    }

    return (
        <div className={styles.container}>
            <input 
                className={styles.input} 
                type={inputType} 
                style={{
                    border:props.error?'2px solid #F6D500':'2px solid #074C5D',
                    color:props.error?'#F6D500':'#7E84A3',
                }}
                name='password'
                value={props.value} 
                error={props.error}
                onChange={(e)=>props.change(e)}
                disabled={ props.disabled?true:false }
                required />
            <span className={styles.label}  style={{ color:props.error?'#F6D500':'#9F9F9F' }}>
                password
            </span>
            {/* <div className={styles.iconcontainer}> */}
                { 
                    inputType === 'password'?(
                    <AiOutlineEyeInvisible style={{ color:props.error?'#F6D500':'#9F9F9F' }} className={styles.icon} onClick={()=>revealHidePassword()} />
                    ): (
                    <AiOutlineEye style={{ color:props.error?'#F6D500':'#9F9F9F' }} className={styles.icon} onClick={()=>revealHidePassword()} />
                    )
                }
            {/* </div> */}
        </div>
    )
}

export default Password;
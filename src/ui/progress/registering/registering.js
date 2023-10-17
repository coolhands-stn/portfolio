// Styles
import styles from './registering.module.css'

// Assets
import { BsCheck } from 'react-icons/bs'

const Registering = (props) => {
    return ( 
        <div className={styles.container}>
            {/* If user is registering and have not yet finished registering then show process animation */}
            <div className={styles.ring} 
                 style={{ display: ((props.registering===true) && (props.doneRegistering===false))?'inline-block':'none' }}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {/* !(If user is registering and have not yet finished registering then show process animation) */}
            <BsCheck style={{ 
                    margin: '0 10px 0 0', 
                    display:((props.registering===false) && (props.doneRegistering===true))?'block':'none' }} 
                size={21} 
                strokeWidth={1}
                color='#0058FF' />
            <p className={styles.text} style={{ color: props.color?`${props.color}`:'#FFF', fontSize: props.fontSize?`${props.fontSize}`:'0.7rem' }}>
                {((props.doneRegistering===true) && (props.registering===false))?props.finishedRegisteringMessage:props.defaultMessage}
            </p>
        </div>
     )
}
 
export default Registering
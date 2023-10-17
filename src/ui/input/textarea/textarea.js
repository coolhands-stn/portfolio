// Styles
import styles from './textarea.module.css';

const Textarea = (props) => {

    return ( 
        <div className={styles.container}>
            <textarea className={styles.textarea}
                style={{
                    border:props.error?"2px solid #F6D500":"2px solid #074C5D",
                    color:props.error?'#F6D500':'#7E84A3',
                }}
                name={ props.regExId? props.regExId:props.name } 
                value={ props.value } 
                onChange={ (e)=>props.change(e) }
                required>
            </textarea>
            <span className={styles.label} style={{ color:props.error?"#F6D500":"#9F9F9F" }}>
                { props.name }
            </span>
        </div>
     );
}
 
export default Textarea;
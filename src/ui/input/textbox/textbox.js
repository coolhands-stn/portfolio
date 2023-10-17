// Styles
import styles from "./textbox.module.css";

const Textbox = (props) => {
    return (
        <div className={styles.container}>
            <input className={styles.input} 
               style={{
                    border:props.error?"2px solid #F6D500":"2px solid #074C5D",
                    color:props.error?"#F6D500":"#7E84A3",
                }}
               type={props.type} 
               name={ props.regExId? props.regExId:props.name }
               value={props.value} 
               onChange={(e)=>props.change(e)}
               disabled={ props.disabled?true:false }
               required />
            <span className={styles.label} style={{ color:props.error?"#F6D500":"#9F9F9F" }}>
                {props.name}
            </span>
        </div>
    )
}
 
export default Textbox;
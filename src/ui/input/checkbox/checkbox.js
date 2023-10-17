// Styles
import styles from './checkbox.module.css'

const Checkbox = (props) => {
    return (  
        <div className={styles.container}>
            <input className={styles.checkbox} type='checkbox' checked={props.value===true?true:false} disabled={props.disabled?true:false} value={props.value} onChange={props.change}/>
            <p className={styles.label}>{ props.label }</p>
        </div>
    )
}
 
export default Checkbox


// module
// styles
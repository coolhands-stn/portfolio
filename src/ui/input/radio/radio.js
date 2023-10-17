import styles from './radio.module.css'

const Radio = (props) => {
    return ( 
        <div className={styles.container}> 
            <input onChange={(event)=> props.setValue({
                ...props.values, 
                [props.name]: event.target.value}
            )}
                className={styles.radio} 
                type='radio'
                name={props.name} 
                value={props.value}
                checked={props.value===props.values[props.name]} 
                disabled={props.disabled?true:false}/>
            <label className={styles.label} htmlFor={props.id}>
                {props.value}
            </label>
        </div>
     )
}
 
export default Radio;
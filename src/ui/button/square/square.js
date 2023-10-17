// Styles
import styles from './square.module.css'

const Square = (props) => {
    return (
        <button className={styles.square} onClick={()=>props.click()}> 
            {props.children}
        </button>
    )
}

export default Square;
// Styles
import styles from './round.module.css'

const Round = (props) => {
    return (
        <button className={styles.round} onClick={()=>props.click()}> 
            {props.children}
        </button>
    )
}

export default Round;
import styles from './backdrop.module.css'

// Components
import Editor from "@/components/editor/index"

const Backdrop = (props)=> {
    return (
        <div className={styles.backdrop}>
            <Editor />
        </div>    
    )
}

export default Backdrop
import styles from './backdrop.module.css'

// Components
import Editor from "@/components/editor/index"


const Backdrop = (props)=> {
    return (
        <>
            <div className={styles.backdrop} style={{ display: props.reply?"flex":"none"}}>
                <Editor reply={props.reply} setReply={props.setReply} />
            </div> 
        </>   
    )
}

export default Backdrop
import { useState } from "react";

// Styles
import styles from "./thread.module.css";

// Components
import Question from "../question/index";
import Answer from "../answer/index";

const Thread = (props) => {
    const [showAnswers, setShowAnswers] = useState(false);
    return ( 
        <>
            <div className={styles.forumThread}>
                <main className={styles.threadMainQuestion}>
                        <Question mainQuestion={props.thread.mainQuestion} />
                        <p className={styles.threadViewReply}>reply</p>
                        <p onClick={()=>setShowAnswers(!showAnswers)} className={styles.threadViewAnswers}>
                            {showAnswers?"hide answer":"view answers"}
                        </p>
                </main>
                    <main style={{display:showAnswers?"flex":"none"}} className={styles.threadResponsesContainer}>
                    {
                        props.thread.responses.map((response, index)=>{
                            return <Answer key={index} response={response}  />
                        })
                    }
                </main>
            </div>
        </>
     )
}
 
export default Thread;
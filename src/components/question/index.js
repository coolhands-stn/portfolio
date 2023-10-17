import Image from "next/image";

// Styles
import styles from './question.module.css'

const Question = (props) => {
    return (
        <main className={styles.question}>
            {/* Question */}
            {/* Title */}
            <div className={styles.title}>
                {/* Profile */}
                <div className={styles.profileContainer}>
                    <div className={styles.studentProfile}>
                        <Image src="/sganyani.png" height={50} width={50} className={styles.avatar} alt="student avatar"/>
                        <p>{props.mainQuestion.profile.username}</p>
                    </div>
                </div>
                {/* Reference */}
                <div className={styles.referencesContainer}>
                    <p className={styles.threadReferences}>
                        {`${props.mainQuestion.references.session} ${props.mainQuestion.references.year} ${props.mainQuestion.references.paper}`}
                    </p>
                    <p className={styles.threadReferences} style={{ margin: "0 0 0 80px" }}>
                        {`${props.mainQuestion.references.syllabus}`}
                    </p>
                    <p 
                        className={styles.threadReferences}
                        style={{ 
                            margin: "0 0 0 220px",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                        }}>
                         {`${props.mainQuestion.references.topic}`}
                    </p>
                </div>
                {/* Controls */}
                <div className={styles.controlsContainer}>
                    <div className={styles.titleAttachmentsContainer}>
                        <i className="fa-solid fa-paperclip"></i>
                    </div>
                    <div className={styles.threadTitleControlsContainer}>
                        <i className="fa-regular fa-bell"></i>
                        <i className="fa-regular fa-pen-to-square"></i>
                        <i className="fa-regular fa-bookmark"></i>
                    </div>
                    <p className={styles.threadTitleControlsDate} style={{ margin: "0 0 0 25px" }}>2w</p>
                </div>
            </div>
            {/* Description */}
            <div className={styles.threadQuestionInnerContainer}>
                <div className={styles.questionTitleContainer}>
                    <p className={styles.questionTitle}>Q: </p>
                </div>
                <div className={styles.questionDescriptionContainer}>
                    <p className={styles.questionDescription}>
                        {`${props.mainQuestion.question.description}`}
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Question
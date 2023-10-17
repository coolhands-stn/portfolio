import Image from 'next/image'

import styles from './answer.module.css'

const Answer = (props)=> {
    return (
        <div className={styles.responseContainer}>
            <div className={styles.responseTitleContainer}>
                <div className={styles.profileContainer}>
                    <div className={styles.studentProfile}>
                        <Image src="/sganyani.png" width={50} height={50} className={styles.avatar} alt="student avatar" />
                        <p className={styles.threadForumStudentUsername}>
                            { props.response.profile.username }
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.threadResponseContainer}>
                <p className={styles.responseDescription}>
                    { props.response.answer.description }
                </p>
            </div>
        </div>
    )
}


export default Answer
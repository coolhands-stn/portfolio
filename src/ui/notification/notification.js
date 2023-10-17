import React, {useState, useEffect} from 'react'

//Styles
import styles from './notification.module.css'

// Assets
import { FiXCircle } from 'react-icons/fi'

const Notification = (props) => {
    const [visibility, setVisibility] = useState(false)

    // Change visibility
    useEffect(()=>{
     setVisibility(()=> {
         return props.notification.show?true:false
     })
    }, [props])

    // Close Notification after 4 seconds
    if(visibility) {
        setTimeout(()=>{
            setVisibility(false)
            props.setNotificationStatus({
                show: false,
                message: '',
                type: 'success'
            })
        }, 4000)
    }

    return ( 
        <section className={styles.container} 
        style={{
            backgroundColor: props.notification.type === 'fail'?'#F6D500':'#3DD598',
            top: visibility? '20px':'-90px'
            }} >
            {
                props.notification.message
            }
            <FiXCircle 
                className={styles.icon} 
                strokeWidth={2} 
                size={24} 
                color='#FFF'
                onClick={()=>setVisibility(false)}  />
        </section>
     )
}
 
export default Notification
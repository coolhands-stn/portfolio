import React from 'react'

import styles from './option.module.css'

const Option = (props) => {
    const listItemStyles = {
        backgroundColor: props.value===props.option?"#00252E":"#fff",
        fontWeight: props.value===props.option? "bold":"normal",
        color: props.value===props.option? "#fff":"#9F9F9F",
    }

    const click = () => {
        props.setValue({
            ...props.values,
            [props.name] : props.option
        })
        props.setError({
            ...props.errors,
             [props.regExId?props.regExId:props.name]:false
        })
    }


    return ( 
        <div className={styles.container}
            style={listItemStyles}
            onClick={()=> click()}>
            {props.option}
        </div>
     );
}
 
export default Option;
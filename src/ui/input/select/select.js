import { useState } from 'react'

// Styles
import styles from './select.module.css'
import textbox from '@/ui/input/textbox/textbox.module.css'

// Components
import Option from './option/option'

// Assets
import { FiSearch } from 'react-icons/fi'

const Select = (props) => {
    const [showOptionsList, setShowOptionsList] = useState(false)
    const [rect, setRect] = useState({
        top: 0,
        left: 0
    })

    const border = props.errors[props.id]?'2px solid #F6D500':'2px solid #074C5D'
    
    // Toggle options view
    const showOptions = (event)=> {
        const element = document.getElementById(event.target.getAttribute('id'))
        const data = element.getBoundingClientRect()
        setRect({ top: data.bottom, left: data.x })
        setShowOptionsList((prevState)=>!prevState)
    }

    // Options container styling
    const containerStyles = {
        // bottom: `${(rect.top-rect.y)+400}px`,
        top: '40px',
        // left: `${rect.left}px`,
        left: 0,
        display: showOptionsList?'flex':'none', 
        zIndex: '1000'
    }

    return (  
        <div style={{ position: 'relative'}}>
            {/* Container */}
            <section className={textbox.container}>
                {/* Textbox */}
                <input 
                    className={textbox.input}
                    style={{border: border}} 
                    id={props.id} 
                    onClick={(event)=>showOptions(event)} 
                    onChange={()=>console.log('')}  
                    type='text'
                    value={props.values[props.id]} 
                    name = {props.id}
                    disabled={props.disabled?true:false} 
                    required />

                {/* Label */}
                <span className={textbox.label} style={{ color:props.errors[props.id]?'#F6D500':'#9F9F9F' }}>
                    { props.name?props.name:props.id }
                </span>
            </section>

            {/* Options */}
            <section className={styles.options}
                style={containerStyles} 
                onMouseLeave={()=>setShowOptionsList((prevState)=>!prevState)} >
                <input 
                    className={styles.search}
                    placeholder='search...'
                    value={props.optionsValues[props.id]}
                    onChange={(event)=>props.setOptionsValues({...props.optionsValues, [props.id]: event.target.value})}/>
                <FiSearch className={styles.icon} size={14} />
                <div className={styles.list}>
                    {
                        props.list.filter((option)=> {
                            return option.toLowerCase().includes(props.optionsValues[props.id].toLowerCase())
                        }).map((option, index) => (
                        <Option 
                            option={option} 
                            key={index} 
                            values={props.values}
                            setValue={props.setValue} 
                            value={props.values[props.id]} 
                            name={props.id}
                            regExId={props.regExId}
                            errors={props.errors}
                            setError={props.setError}/>
                            )
                        )
                    }
                </div>
            </section>
        </div>
    )
}
 
export default Select
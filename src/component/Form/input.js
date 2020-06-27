import React from 'react';
import "../../style/input.css"
const input = (props) => {

    let inputElement = null;
    const inputClasses = ["inputElement","form-control"];

    if(props.invalid && props.touched){
        inputClasses.push("invalid")
    }
    let validationError = null;
    if(props.invalid && props.touched){
        validationError = <p>Please enter a value</p>
    }
    switch(props.elementType){
        case ('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
    }
    return (
        <div className="input">
            <label className="label">{props.elementConfig.label}</label>
            {inputElement}
            {validationError}
        </div>
    )

};

export default input;
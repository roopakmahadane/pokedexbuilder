import React, {useState} from 'react'
import Input from './Form/input'
import '../style/addNewPokemon.css'
import Header from '../component/Header'

const AddNewPokemon = () => {
    const [attr, setAttr] = useState("");
    const [elementType, setElementType] = useState("");
    const [inputType, setInputType] = useState("");
  
    const [formData, setFormData] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                label: 'Name'
            },
            value: '',
            validation: {
                required:true
            },
            valid:false,
            touched:false
        },
        type: {
            elementType: 'input',
            elementConfig: {
                type:'text',
                label: 'Type'
            },
            value: [],
            validation: {
                required:true
            },
            valid:false,
            touched:false
        },
        attackLevel: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                label: 'Attack Level'
            },
            value: 0,
            validation: {
                required:true
            },
            valid:false,
            touched:false
        },
        defenceLevel: {
            elementType: 'input',
            elementConfig: {
                type: 'number',
                label: 'Defense Level'
            },
            value: 0,
            validation: {
                required:true
            },
            valid:false,
            touched:false
        }

    })

    const handleAttrChange = (e) => {
        e.preventDefault();
        setAttr(e.target.value)
    }
    const handleElementTypeChange = (e) => {
        e.preventDefault();
        setElementType(e.target.value)
    }
    const handleInputTypeChange = (e) => {
        e.preventDefault();
        setInputType(e.target.value)
    }
    const handleButtonClick = (e) => {
        e.preventDefault();
      let newObj = {...formData , [attr] : {
          elementType:elementType,
          elementConfig: {
              type:inputType,
              label:attr
          },
          value:"",
          validation: {
              required:true
          },
          valid:false,
          touched:false
      }}
      setFormData(newObj)
      setAttr("")
      setElementType("")
    }

    const checkValidity = (value, rules) => {
        let isValid = false;

        if(rules.required){
            isValid = value.trim() !== '';
        }

        return isValid;
    }
    const inputChangeHandler = (event, inputIdentifier) => {
        event.preventDefault();
        const updatedForm = {
            ...formData
        }
      const updatedFormElement = {
          ...updatedForm[inputIdentifier]
        }
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedForm[inputIdentifier] = updatedFormElement;
        setFormData(updatedForm)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const pokemonData = {};
        for(let formElementIdentifier in formData){
            pokemonData[formElementIdentifier] = formData[formElementIdentifier].value;
        }
        console.log(pokemonData)
    }
    const formElementArray = [];
    for(let key in formData){
        formElementArray.push({
            id: key,
            config: formData[key]
        })
    }
    let form = (
        <form className="inputForm input" onSubmit={submitHandler}>
        <h4>Add New Pokemon</h4>
          {formElementArray.map(formElement => {
            return ( 
                <div key={formElement.id} className="form-group formGroup">
                <Input 
                className="form-control"
                invalid={!formElement.config.valid}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) => inputChangeHandler(event, formElement.id)}
                touched={formElement.config.touched}

                />
               
                </div>
               )
          })}   
          <button className="btn btn-primary">Add!</button>
        </form>
    )

 
    return (
        <div>
        <Header />
                {form}
                <div className="input inputForm">
        <form className="inputForm">
        <h4>Add New Property</h4>
            <label>Attribute</label>
            <input className="form-control"  required placeholder="Description,power..." value={attr} onChange={handleAttrChange} type="text" />

            <label>Element Type</label>
            <input className="form-control" required placeholder="input, textarea..." value={elementType} onChange={handleElementTypeChange} type="text" />

            <label>Input Type</label>
            <input className="form-control" required placeholder="text, number..." value={inputType} onChange={handleInputTypeChange} type="text" />
        
            <button className="btn btn-primary" type="submit" onClick={handleButtonClick}>Submit</button>
        </form>
        </div>
        </div>
       
    )
    
    
}

export default AddNewPokemon
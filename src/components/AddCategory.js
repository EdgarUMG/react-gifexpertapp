import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory=({setCategory})=>{

    const [inputValue, setfInputValue] = useState('');


    const handleInputChange=(e)=>{
        
        setfInputValue(e.target.value)
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        //console.log('Submit hecho')
        //setCategory
        if(inputValue.trim().length>2){
            setCategory(cats=>[inputValue,...cats]);
            setfInputValue('');
        }
        
        
    }

    return(
       
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
            
    )

}

AddCategory.propTypes={
    setCategory:PropTypes.func.isRequired
}
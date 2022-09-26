import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setPlayers}) => {
    const [inputValue, setinputValue] = useState("");
    
    const buscarPlayer = (e)=>{
      const entrada = e.target.value
      setinputValue(entrada)
    }
  
    const handleSubmit = (e)=>{
      e.preventDefault();
      if(inputValue.trim().length>2){
          setPlayers((cats)=>[inputValue,...cats]);
          setinputValue('')    
      }
    }
  
  
      return (
      <form onSubmit={handleSubmit}>
          <h2>AddCategory</h2>
          <input 
              type="text"
              value={inputValue}
              onChange = {buscarPlayer}
          />
      </form>
    )
  }
  

AddCategory.propTypes = {
    setPlayers:PropTypes.func.isRequired
}

export default AddCategory


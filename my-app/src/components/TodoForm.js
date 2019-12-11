import React, { useState } from 'react';


const TodoForm = ({dispatch}) => {

    const [newText, setNewText] = useState('')
  
    const handleChanges = e => {
      setNewText(e.target.value)
  }
  


    return (
        <div>
            <input type='text'
            value={newText}
            name='newTodo'
            onChange={handleChanges}/>
            <button onClick={() => {
              dispatch({ type: 'ADD_TODO', payload: newText  });  
            setNewText('')}}>Add</button>
        </div>
    )
}

export default TodoForm
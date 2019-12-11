import React, { useReducer } from 'react';
import Todo from './Todo'
import TodoForm from './TodoForm'
import { reducer, initialState } from '../reducers/reducer'

const TodoList = () => {
    const [taskState, dispatch] = useReducer(reducer, initialState)

    const Completed = id => {
        dispatch({type: 'TOGGLE_COMPLETED', payload: id})
    }
    // const styles = state.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' };
    return (
        <div>
            <TodoForm dispatch={dispatch} />
            {taskState.todos.map(todo => (
              <Todo key={todo.id} todo={todo} dispatch={dispatch} completed={Completed} />  
            ))}
            <button onClick={() => dispatch({type: 'CLEAR_COMPLETED'})}>Clear Completed</button>
        </div>
    )
}

export default TodoList
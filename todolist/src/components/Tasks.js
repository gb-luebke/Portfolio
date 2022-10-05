import './Tasks.css'

import { useState, useReducer } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
 

const Tasks = () => {

    // Reducer da Lista
    const initialTasks = [
        { id: 1, text: 'See your tasks here' },
    ]

    const taskReducer = (state, action) => {

        switch (action.type) {
            case 'ADD':
                const newTask = {
                    id: Math.random(),
                    text: taskText,
                    check: false,
                }

                setTaskText('')

                return [...state, newTask]
            
            case "REMOVE":
                return state.filter((task) => task.id !== action.id)    

            case "CHECK":
                return state.map((task) => {
                    if(task.id === action.id) {
                        return {...task, done: !task.done}
                    }
                    return task
                })

            default:    
                return state
        }

    }

    const [taskText, setTaskText] = useState('')
    const [tasks, dispatchTask] = useReducer(taskReducer, initialTasks)
 
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTask({ type: 'ADD' })
    }

    //Remover Tarefa
    const removeTask = (id) => {
        dispatchTask({ type: "REMOVE", id: id })
    }

    // Marcar tarefa como feita
    const checkTask = (id, done) => {
        dispatchTask({ type: "CHECK", id: id })
    }

    return (
        <div id='tasks'>
            <h2>TO-DO LIST</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span style={task.done ? {textDecoration: 'line-through'} : {textDecoration : 'none'}}>
                            <input type="checkbox" onClick={() => checkTask(task.id)}/>
                               {task.text}
                            </span>
                        <button className="btn-delete" onClick={() => removeTask(task.id)}>
                            <RiDeleteBinLine/>
                        </button>
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text"
                 onChange={(e) => setTaskText(e.target.value)} 
                 value={taskText}
                 placeholder='New Task'
                 className='input'/>
                <input type="submit" value="Add" className='input-btn'/>
            </form>
          
        </div>
    )
}

export default Tasks
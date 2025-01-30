import { useState } from 'react'
import apiLocal from '../services/apiLocal'

export default function AddTask (){
    const [newTask, setNewTask] = useState('')

    const addTask = async () => {
        try {
            const response = await apiLocal.post('/tasks')
            setNewTask(response.data)
        } catch (error) {
            console.error('No puede agregar una tarea nueva', error)
        }
        
    }

    return(
        <>
        <div>
            <button>
            
            </button>
        </div>
        </>
    )
}

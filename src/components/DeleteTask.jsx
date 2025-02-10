import apiLocal from "../services/apiLocal";

export default function DeleteTask({ id }) {
    const deleteTask = async () => {
        try {
            await apiLocal.delete(`/tasks/${id}`)
        } catch (error) {
            console.error('Error al eliminar la tarea', error)
        }
    }
    return (
        <button onClick={deleteTask}>Eliminar tarea</button>
    )
}
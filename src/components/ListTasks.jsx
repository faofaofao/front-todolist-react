import { useEffect, useState } from "react";
import apiLocal from "../services/apiLocal";
import DeleteTask from "./DeleteTask";

export default function ListTasks(){
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log('asdasd')
    const getData = async () => {
        try {
            const response = await apiLocal.get('/tasks');
            setList(response.data);
        } catch (error) {
            console.error('Error al traer la lista de tareas', error)
        }
    };
        getData()
  }, [list]);

  return(
    <>
    <div>
        <h1>Lista de tareas</h1>
        <ul>
            {list.map((item) => (
             <li key={item._id}>
                    {item.name} <DeleteTask id={item._id}/>
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}


import { useEffect, useState } from "react";
import apiLocal from "../services/apiLocal";

export default function ListTasks(){
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
        try {
            const response = await apiLocal.get('/tasks');
            setData(response.data);
        } catch (error) {
            console.error('Error al traer la lista de tareas', error)
        }
    };
        getData()
  }, [setData]);

  return(
    <>
    <div>
        <h1>Lista de tareas</h1>
        <ul>
            {data.map((item) => (
             <li key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}


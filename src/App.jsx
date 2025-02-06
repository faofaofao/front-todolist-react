import ListTasks from "./components/ListTasks";
import AddTask from "./components/AddTask";

export default function App() {
  return (
    <>
      <div>
        <AddTask />
        <ListTasks />
      </div>
    </>
  );
}

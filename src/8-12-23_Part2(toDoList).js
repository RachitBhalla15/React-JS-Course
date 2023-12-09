import "./App.css";
import { useState } from "react";
import { Task } from "./Components/Task";
function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    // const newTodoList=[...toDoList,newTask];
    // setToDoList(newTodoList)
    // setToDoList([...toDoList, newTask]);
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newTask,
      completed:false
    };
    setToDoList([...toDoList, task]);
  };

  // const deleteTask=(taskName)=>{
  const deleteTask = (id) => {
    //filter function  : returns true to elements we wanna keep and false to elements we dont wanna keep
    // const arr=["a","b","c"]
    // const newArr=arr.filter((name)=>{
    //   if (name==="a"){
    //     return false
    //   }
    //   else{
    //     return true
    //   }
    // })

    // const newTodoList=toDoList.filter((task)=>{
    //   // if(task===taskName){
    //   //   return false;
    //   // }else{
    //   //   return true;
    //   // }
    //   return task!==taskName
    // })

    // setToDoList(toDoList.fiilter((task)=>task!==taskName))
    setToDoList(toDoList.filter((task) => task.id !== id));
  };

  const completeTask=(id)=>{
    setToDoList(
      toDoList.map((task)=>{
        if(task.id===id){
          return{...task,completed:true}
        }
        else{
          return task;
        }
      })
    )
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {toDoList.map((task) => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

export const Task = (props) => {
  return (
    <div className="task"
    style={{backgroundColor:props.completed?"green":"white"}}>
      <h1>{props.taskName}</h1>
      {/* <h1>{task}</h1> */}
      {/* <button onClick={deleteTask}>X</button> */}
      {/* when we pass a fxn with parameters , we need to pass is as a function calling the said fxn. */}
      <button onClick={()=>props.completeTask(props.id)}>Complete</button>
      <button onClick={() => props.deleteTask(props.id)}>X</button>
    </div>
  );
};

import './App.css';

function App() {
  // const name="Rachit";
  // const name=<h1>Rachit</h1>;
  // const age=<h2>21</h2>
  // const email=<h2>Rachit@random.com</h2>
  // const user=(
  //   <div>
  //   {name}
  //   {age}
  //   {email}
  //   </div>
  // );
  return (
    <div className="App">
     {/* <h1>{name}</h1>  */}
    {/* {user} */}
    <User name="Rachit" age={21} email="Rachit@random.com"/>
    <User name="hhhh" age={21} email="hehe@hehe"/>
    <User name="yay" age={21} email="yay@learning.com"/>
    <Job salary={90000} position="Senior SDE" company="Amazon"/>
    </div>
  );
}

const props={
  name:"pedro",
  age:21,
  email:"pedro@pascal.com"
}

//User here is a component(generally stored in som other file), so 1st letter capital
const User=(props)=>{
  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h2>{props.email}</h2>
    </div>
  )
}

const props1={
  salary:1000,
  position:"random",
  company:"Random Company"
}

const Job=(props1)=>{
  return(
    <div>
      <h1>{props1.salary}</h1>
      <h1>{props1.position}</h1>
      <h1>{props1.company}</h1>
    </div>
  )
}
export default App;

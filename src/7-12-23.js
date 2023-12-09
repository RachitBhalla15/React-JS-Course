import "./App.css";
import { User } from "./Components/User";
// terniary operator
// function App() {
//   const age=19;
//   const isGreen=true;
//     return (
//       <div className="App">{age>=18?<h1>Over Age</h1>:<h1>Under Age</h1>}
//       <h1 style={{color: isGreen?"green":"red",backgroundColor:"black"}}>This has color</h1>
// {/* only if statement is && is used. */}
//       {isGreen && <button>hehe Button</button>}
//       </div>
//     );

// }

function App() {
  const users = [
    { name: "Pedro", age: 21 },
    { name: "Jake", age: 25 },
    { name: "Jessica", age: 45 },
  ];

  const planets=[
    { name:'Mars', isGasPlanet :false },
    { name:'Earth',isGasPlanet:false},
    { name:'Jupiter',isGasPlanet:true},
    { name:'Venus',isGasPlanet:false},
    { name:'Neptune',isGasPlanet:true},
    { name:'Uranus',isGasPlanet:true},

  ]
  // const names=["Pedro","Jake","Jessica","Mike","Dustin"]

  return (
    <div className="App">
      {/* {names.map((name,key)=>{
        return <h1 key={key}>{name}</h1>
      })} */}
      {/* {users.map((user, key) => {
        return (
          <User name={user.name} age={user.age}/>
        );
      })} */}

      {/* Its same for both of them in planets things */}
      {/* {planets.map((planet,key)=>{
        if (planet.isGasPlanet) return(
          <h1>{planet.name}</h1>
        )
      })} */}
      {planets.map((planet,key)=>planet.isGasPlanet && <h1>{planet.name}</h1>)}
    </div>
  );
}


export default App;

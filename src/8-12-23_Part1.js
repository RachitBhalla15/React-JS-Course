import "./App.css";
import { useState } from "react";
// function App() {
//   const [age,setAge]=useState(0)
//   //usestate(0) means let age=0 i.e initial value

//   const increaseAge=()=>{
//     setAge(age+1)
//   }
//   return (
//     <div className="App">
//       {age}
//       <button onClick={increaseAge}>Increase age</button>
//     </div>
//   );
// }

// function App(){
//   const [inputValue,setInputValue]=useState("")

//   const HandleInputChange=(event)=>{
//     setInputValue(event.target.value);
//   }

//   return(
//     <div className="App">
//       <input type="text" onChange={HandleInputChange}/>
//       {inputValue}
//     </div>
//   )
// }

// function App() {
//   const [showText, setShowText] = useState(true);
//   const [textColor, setTextColor] = useState("");
//   return (
//     <div className="App">
//       <button
//         onClick={() => {
//           setShowText(!showText);
//         }}
//       >
//         Show/Hide
//       </button>
//       <button
//         onClick={() => {
//           setTextColor(textColor==="black"?"Red":"black");
//         }}
//       >
//         Change color
//       </button>
//       {showText && <h1 style={{ color: textColor }}> Hi My name is Rachit</h1>}
//     </div>
//   );
// }


//Counter example
function App(){
  const [count, setCount] = useState(0)
  return(
    <div className="App">
      <button onClick={()=>{setCount(count+1)}}>Increase</button>
      <button onClick={()=>{setCount(count-1)}}>Decrease</button>
      <button onClick={()=>{setCount(0)}}>Set to zero</button>

      {count}
    </div>
  )
}

export default App;

import { useEffect, useState } from "react";

const App=()=> {

  let[count,setCount] = useState(0);
// run only once when the component is mounted
//and whenever the state changes (any statewithin the component)
useEffect(()=>{
console.log('Component mount');
});

  const handleIncrement = () =>{
    setCount(count +1);
  }
  const handleDecrement =()=> {
    setCount(count -1);
  }
  const handleReset = () =>{
    setCount(0);
  }

  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    <button onClick={handleDecrement}>Decrement</button>
    <button onClick={handleReset}>Reset</button>
    </div>
  )
}
export default App;
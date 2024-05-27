import { useEffect, useState } from "react";

const App=()=> {

  let[count,setCount] = useState(0);
  let [increment, setIncrement] = useState(0);
// runs only once when thecomponent is mounted
useEffect(()=>{
  console.log('useEffect called')
console.log('Count:', count);
console.log('Increment:',increment);
}); [count];

  const handleIncrement = () =>{
    setIncrement(Increment +1);
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
import { useEffect, useState } from "react";
import Conter from"./components/Counter";

const App=()=> {

  let[count,setCount] = useState(0);
  let[history,setHistory] = useState([]);

  const handleIncrement =() =>{
    setCount(count + 1);
    setHistory([...history, 'I']);
  }
  const handleDecrement =() =>{
    setCount(count - 1);
    setHistory([...history, 'D']);
  }
  const handleReset =() =>{
    setCount(0);
    setHistory([...history, 'E']);
  }

  return(
    <div>
      <Counter
      count={count}
      />
   
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <History
      history={history}
       />
    </div>
  )
}
export default App;
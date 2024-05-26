
import Hello from "./components/Hello";

//component multiple component created
const App = () => {

  const name ='Peter';

  return (
    <div>
      <Hello 
      name={name}
      />
    </div>
  )
}
export default App;
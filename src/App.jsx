const Hello = () => {
  return <h1>Hello, World!</h1>
}

//component multiple component created

const App = () => {
  return (
    <div>
      <Hello />
      <Hello />
      <Hello />
    </div>
  )
}
export default App;
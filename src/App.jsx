import React, {Component} from'react';

export class App extends Component {

constructor(props):
super(props);
this.state = {
  count: 0
}
}
//component did Mount
componentDidMount(){
  console.log('Component did mount');
}
//componentDidupdate
componentDidUpdate() {
  console.log('Component did update');
}
//componentwillUnmount
componentWillUnount(){console.log('Component will unmount');
}
handleIncrement =()=>{
  this.setState({
    count: this.state.count+1
  })
}
return (
  <div>
    <h1>Counder:{this.state.count}</h1>
    <button onClick={this.handleIncrement}></button>
  </div>
)
export default App;
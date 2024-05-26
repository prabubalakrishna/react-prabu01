const App = () => {


  const name = 'Peter';	  const friends = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Peter', age: 30 },
    { id: 3, name: 'Mark', age: 40}
  ]


  return (	  return (
    <div>	    <div>
      <Hello 	      <h1>Friends</h1>
        name={name}	      <ul>
      />	        {
          friends.map((friend, index) => 
            <li key={index}>{friend.name} {friend.age}</li>
          )
        }
      </ul>
    </div>	    </div>
  )	  )
}	}
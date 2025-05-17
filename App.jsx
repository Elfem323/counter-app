import React, {useState} from 'react'

const App = () => {
  // count is the current value of our count while setCount update our count
  const [count, setCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  // the function tells our button what to do.
  function increaseBtn(){
    if(count < 20){
      setCount(prev => prev + 1);
      setErrorMessage(" ");
    }
    else{
      setErrorMessage("You have reached limit!");
    }
  } 

function decreaseBtn(){
    if(count === 0) {
      setErrorMessage("You can't go below 0");
    }
    else {
      setCount(prev => prev - 1);
      setErrorMessage(" ");
    }
  } 

 return (
    <div className='container'>
      <h1>count: {count}</h1>
      {errorMessage && <p>{errorMessage}</p>};
      <button onClick={increaseBtn}>Increase</button>
      <button  onClick={decreaseBtn}>Decrease</button>
      
    </div>
    
  )
}

export default App
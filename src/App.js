import React, {useEffect, useState } from 'react';
import './App.css';

function App() {

  const [nesto, setNesto] = useState([]);



  const proba = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
      .then(res =>res.json())
      .then(data => console.log(data));
  }



  // useEffect(()=>{
  //   setNesto();
  // },[]);

  return (
    <div className="App">


      <div>{nesto}</div>




    </div>
  );
}

export default App;

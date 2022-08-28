import React, {useEffect, useState } from 'react';
import './App.css';

function App() {

  const [nesto, setNesto] = useState([]);



  const proba = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then(res =>res.json())
      .then(data => setNesto(data));
  }



  // useEffect(()=>{
  //   setNesto();
  // },[]);

  return (
    <div className="app">

<img className='smallCat' src='https://static.vecteezy.com/system/resources/previews/002/497/282/large_2x/cute-three-color-cat-waving-paw-cartoon-vector.jpg' alt='cat'></img>
      <div className='catPic'>{nesto.map(e=><img id="macka" src={e.url}></img>)}</div>
      <img onClick={proba}  className='paw' src='https://img.freepik.com/premium-vector/cute-hand-drawn-cat-paws-white-background-vector-adorable-animals-silhouette-trendy-style-funny-cute-hygge-illustration-poster-banner-print-decoration-kids-playroom_514409-1359.jpg?w=2000' alt='paw'></img>


    </div>
  );
}

export default App;

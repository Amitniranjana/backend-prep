import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

function App() {
let [jokes , setJokes ]=useState([]);
useEffect(()=>{
  axios.get('http://localhost:5000/')
    .then((response)=>{
      setJokes(response.data);
    })
    .catch((error)=>{
      console.error(error);
    })
})

return (
  <div>
    Amit Niranjan
    {jokes.map((joke , indx) => (
      <div key={joke.id}>
        {joke.title}
      </div>
    ))}
  </div>
);
}

export default App;

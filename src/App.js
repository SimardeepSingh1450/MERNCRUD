
import { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import Showout from './Showout';
function App() {
  const [foodName,setFoodName]=useState("null");
  const [days,setDays]=useState(0);
  const [data,setData]=useState([]);
  const [display,setDisplay]=useState(false);
  
 
  //Read Operation
  useEffect(()=>{
    Axios.get("https://merncrud1450.herokuapp.com/read").then((response)=>{
      console.log(response.data);
      setData(response.data);
    })
  },[])

 

 //Create Operation
  const addToList=()=>{
    Axios.post('https://merncrud1450.herokuapp.com/insert',{
      foodName:foodName,
      days:days,
    });
  }

 

  return (
    <div className="App">
      <h1>MERN CRUD</h1>
    <label>Food Name:</label>
      <input type='text'
      onChange={(e)=>setFoodName(e.target.value)}></input><br/>
      <label>Days Since You Ate it</label>
      <input type='number'
      onChange={(e)=>setDays(e.target.value)}></input><br/>
      <button onClick={()=>addToList()}>Add to List</button><br/>
      <button onClick={()=>setDisplay(!display)}>Show/Hide MongoDB Data</button>
      {(display)?<Showout data={data} />:"Data Display Hidden(Press above Button)"}
      
    </div>
  );
}

export default App;

 //Function to display MongoDB Data:
import { useState } from 'react';
import Axios from 'axios';
  
function Showout({data}) {

const [newFoodName,setNewFoodName]=useState("");
     //Update Operation:
const updateFood=(id)=>{
  console.log(id)
  Axios.put("https://merncrud1450.herokuapp.com/update",{
    id:id,
    newFoodName:newFoodName
  })
}

     //Delete Operation:
const deleteFood=(id)=>{

  Axios.delete(`https://merncrud1450.herokuapp.com/delete/${id}`)
}



    const handleChange=(event)=>{
      setNewFoodName(event.target.value)
    }

  return (
    <ul>
        {data.map((item)=>{
          return(
        <div key={item._id}>
        <li >{JSON.stringify(item)}</li>
        <input key={item.id} type='text' placeholder='New Food Item...' 
        onChange={handleChange}/>
        <button onClick={()=>updateFood(item._id)}>Update</button>
        <button onClick={()=>deleteFood(item._id)}>Delete</button>
        </div>)
        }
        )
        }
    </ul>
  )
}

export default Showout;
import React, { useState } from "react";
// import TodoItems from "./TodoItems";


function TodoList() {

const [data,setdata] = useState('')  
const [s1,d1] = useState([]) 

const handleaddItem =()=>{
    if(data!== ''){
        var newitem={
            id: Math.random(),
            todo:data
        };
        d1([...s1,newitem])
        setdata('')
    }
}

const handledelete =(id)=>{
    // debugger
    let l1 = s1.filter((to)=>to.id !== id);
    d1(l1);
    
}
  return (
    <div>
        <form >
            <input type="text" value={data} placeholder="enter the task"                                
            onChange={event=>{setdata(event.target.value)}}/>
        </form>
        <button onClick={handleaddItem}>Add</button>
        
        {
           s1.map(txt=>(
            <ul>
                <li>
                {txt.todo}
                </li>
                <button onClick={()=>handledelete(txt.id)}>Delete</button>
            </ul>
           ))
        }     
    </div>
  )
    }

export default TodoList;


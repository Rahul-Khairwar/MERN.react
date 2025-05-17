import { useState } from "react"
import axios from "axios"

const Insert=()=>{
    const [input ,setInput]=useState({});//input={}
    //input={empno:101,name:"sanju",city:"goa",salary:"34000"
    
    const handleInput=(e)=>{
   
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}))
        console.log(input)
    }

    const handleSubmit=async()=>{

   let api="http://localhost:3000/employee"
   const res=await axios.post (api,input)
  console.log(res)
  alert("data save!!!")

    }

return(
    <>
    <h1>Insert Page</h1>
    Enter Empno: <input type="text" name="empno"
    onChange={handleInput} />
    
    <br />
     Enter Name: <input type="text" name="name"
     onChange={handleInput} />
     
     <br />
     Enter City: <input type="text" name="city"
     onChange={handleInput} />
     
     <br />
     Enter Salary: <input type="text" name="salary"
     onChange={handleInput} />
     
     <br />

     <button onClick={handleSubmit}>save!!!</button>
    
    
    </>
)

}
export default Insert
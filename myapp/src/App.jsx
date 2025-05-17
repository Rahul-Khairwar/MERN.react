// import { useState,useMemo } from "react"
// const App=()=>{
//   const [add,setAdd]=useState(0);
//   const [sub,setSub]=useState(100);
  
//   const mymulti=useMemo(()=>{

// console.log("*******")
// return add*2;

//   },[add]);

// return(
//   <>

//   <h1>addition:{add}</h1>
//   <button onClick={()=>{setAdd(add+1)}}>addtion</button>
//   <h1>substraction:{sub}</h1>
//   <button onClick={()=>{setSub(sub-1)}}>substraction


//   </button>
//   <hr/>
//   <h2>multiplication:{mymulti}</h2>
  
//   </>
// )

// }
// export default App

import { useState,useMemo } from "react";

const App=()=>{

const [age,setAge]=useState(0)
const [name,setName]=useState()
const myAgevalue=useMemo(myAgeMulti,[age])

function myAgeMulti(){
for (var i=0,i<=10000000;i++){}

return age*2;
}
return (

  <>
  <h1>Welcome </h1>
 select age:<input type="number" value={age} onChange={(e)=>{setAge(e.target.value)}}/>?
  
  </>
)


}
export default App
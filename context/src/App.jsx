import React, {createContext,useContext,useState } from "react";
const mycontext=createContext();
function App() {
  const [data,setData]=useState("MCA");
  return (
    <mycontext.Provider value={{data,setData}}>
      <Comp1></Comp1>
      <Comp2></Comp2>
    </mycontext.Provider>
  );
}
function Comp1(){
  const{setData}=useContext(mycontext);
  return(
    <div><button onClick={()=>setData("Hello From Context")}>Send Data</button>
    </div>
  )
}

function Comp2(){
  const{data}=useContext(mycontext);
  return(
    <div>{data}</div>
  )
}

export default App;
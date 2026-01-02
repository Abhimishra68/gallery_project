import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './Components/Card';


function App() {

  const [userData, setuserData] = useState([]);
  const [index, setindex] = useState(1);

  const getData = async () => {
  console.log("Data aawata");

  const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
  console.log(response.data);
  setuserData(response.data);

  }
   
  useEffect(function(){
    getData()
  }, [index])

  let printUserData = <h3 className='text-white text-x5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading...</h3>
  
  if(userData.length > 0){
    printUserData = userData.map(function(elem, index){
        return <div key={index}>
         <Card elem={elem}/>
        </div>
    })
  }
   
  return (
    <div className='bg-black overflow-auto p-4 h-screen text-white'>
      <h1 className='fixed text-6xl'>{index}</h1>
      {/* <button 

      onClick={getData}
      className='bg-green-600 active:scale-95 m-4 px-5 py-2 rounded text-white'>
        Get Data
      
      </button> */}

      <div className='flex flex-wrap gap-4'>
        
       {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button onClick={()=>{
          if(index > 1){
          
           setindex(index-1)
            setuserData([])

          }
          }} className='bg-amber-400 text-black rounded px-4 py-3 font-medium text-sm cursor-pointer active:scale-95'>Prev</button>
        <button onClick={()=>{
         
          setindex(index+1)
           setuserData([])
           }} className='bg-amber-400 text-black rounded px-4 py-3 font-medium text-sm cursor-pointer active:scale-95'>Next</button>
      </div>
      
    </div>
  )
}

export default App
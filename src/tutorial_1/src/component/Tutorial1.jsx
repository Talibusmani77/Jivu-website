import React, { useState } from 'react'

function Tutorial1() {
  
  const [state,setState]=useState("")
  const [data,setData]=useState([])
  const handleChange=(e)=>{
    
    setState(e.target.value)

  }
  const print=()=>{
    
    setData((prev)=> [...prev, state])
    
    setState("")
  }
  const handleDelete = (idx) => {
    console.log(data[idx])
    let updte = data.filter((item)=> item!=data[idx])
    setData(updte)


    

  }



  return (
    <div>
      <input onChange={handleChange}  className='border-2 border-red-500' type="text" value={state} />
      <button onClick={print} className='border-2 border-yellow-500 bg-[grey] rounded w-30 mt-5 '>click</button>
      {
        data.map((e,idx)=>(
          <div key={idx} className='flex mt-4'>
            <p>{e}</p>
            <button onClick={() => handleDelete(idx)} className='ml-10 border-2 border-green-500 bg-green-500 rounded w-30'>x</button>
          </div>
          
        ))
      }
    </div>
  )
}

export default Tutorial1
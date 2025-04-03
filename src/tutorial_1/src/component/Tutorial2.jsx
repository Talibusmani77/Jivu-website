import React, { useState } from 'react'

function Tutorial2() {
    const [text, setText] = useState("")
    const [data, setData] = useState([])

    const handleChange = (e) =>{
        setText(e.target.value)
    }
    
    const handleAdd = () => {
        setData((prev) => [...prev,text] )
        console.log(data)
        
    }

    const handleDelete= (idx) => {
        console.log(data[idx])
        let value=data.filter((item,id) => (idx!=id))
       setData(value)
    }

  return (
    <div>
        <input className='border-2 border-red-500' type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd} className='bg-grey-500 border-2 border-black-500 '>Add </button>
        <ul>
            {
                data.map((item ,idx) => (
                    <div className='flex justify-between border-2  border-gray-100  mt-4 '>
                        <li key={idx}>{item}</li>
                        <button onClick={()=>{
                            handleDelete(idx)
                        }} className='px-4 bg-red-500 rounded-md text-white text-sm '>X</button>
                    </div>
                ))
            }
        </ul>
    </div>
  )
}

export default Tutorial2
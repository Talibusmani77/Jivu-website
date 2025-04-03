import React from 'react'

function Form1() {
    const fruit=['Mango','Orange','Banana','Graps','Apple']
    
    

  return (
    <div>
        <ul>
        {
          fruit.map((e,idx)=>(
             <li key={idx}>{e}</li>
             
          )

          )
        }
        </ul>
        
    </div>
  )
}

export default Form1
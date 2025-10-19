import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './icecreamSlice'


function icecreamView() {
    const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecreams)
    const dispath= useDispatch()
    const [value, setValue]=React.useState(1)
  return (
    <div>
      <h2>Number of icecream : {numOfIcecreams}</h2>
      <button onClick={()=>dispath(ordered())}>ordered icecream</button>
      <input type='number' value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={()=>dispath(restocked(value))}>restock cake</button>
    </div>
  )
}

export default icecreamView

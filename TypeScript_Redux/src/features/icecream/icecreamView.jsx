import React from 'react'
//import { useSelector, useDispatch } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from '../icecream/icecreamSlice'


function icecreamView() {
    const numOfIcecreams = useAppSelector((state) => state.icecream.numOfIcecreams)
  const dispath= useAppDispatch()
  const [value, setValue]=React.useState(1)
  return (
    <div>
      <h2>Number of icecream : {numOfIcecreams}</h2>
      <button onClick={()=>dispath(ordered())}>ordered icecream</button>
  <input type='number' value={value} onChange={(e)=>setValue(Number(e.target.value))}/>
  <button onClick={()=>dispath(restocked(Number(value)))}>restock cake</button>
    </div>
  )
}

export default icecreamView

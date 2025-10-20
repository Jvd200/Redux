import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restocked } from '../icecream/icecreamSlice'

const IcecreamView: React.FC = () => {
    const numOfIcecreams = useAppSelector((state) => state.icecream.numOfIcecreams)
    const dispatch = useAppDispatch()
    const [value, setValue] = useState<number>(1)
  return (
    <div>
      <h2>Number of icecream : {numOfIcecreams}</h2>
      <button onClick={()=>dispatch(ordered())}>ordered icecream</button>
      <input type='number' value={value} onChange={(e)=>setValue(Number(e.target.value))}/>
      <button onClick={()=>dispatch(restocked(value))}>restock cake</button>
    </div>
  )
}

export default IcecreamView

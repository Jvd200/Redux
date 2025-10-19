import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
  import CakeView from './features/cake/cakeView'
  import IcecreamView from './features/Icecream/icecreamView'
  import UserView from './features/users/userView'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CakeView/>
      <IcecreamView/>
      <UserView/>

    </>
  )
}

export default App

import { useState } from 'react'
import Grid from './components/grid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-full'>
      <div className='@container flex h-screen w-full items-center justify-center'>
        <Grid />
      </div>
    </div>
  )
}

export default App

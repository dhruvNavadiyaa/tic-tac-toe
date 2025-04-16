import './App.css'
import { useState } from "react";
import Player from './components/Player';
function App() {
  const [players, setplayers] = useState([{
    name: "dhruv",
    symbol: 'x'
  }, {
    name: "princy",
    symbol: 'o'
  }]);

  
  return (
    <>
    <Player player={players[0]}/>
    <Player player={players[1]}/>
      <div className='mt-5'>
        <div className='flex'>
          <button className=' box'>x</button>
          <button className=' box'>o</button>
          <button className=' box'>x</button>
        </div>
        <div className='flex'>
          <button className=' box'>a</button>
          <button className=' box'>z</button>
          <button className=' box'>c</button>
        </div>
        <div className='flex'>
          <button className=' box'>q</button>
          <button className=' box'>v</button>
          <button className=' box'>b</button>
        </div>
      </div>
    </>
  )
}

export default App

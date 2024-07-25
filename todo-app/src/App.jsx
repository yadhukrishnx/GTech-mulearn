// rafce 
import React from 'react'
import Todo from './components/Todo'
import myicon from './assets/copyright.png'

const App = () => {
  return (
    <div className='bg-stone-900 grid py-4 min-h-screen '>
      <Todo/>
      <div class="absolute bottom-0 right-0 ... w-[145px] p-5">
    <a href="https://github.com/yadhukrishnx" target="_blank"><img src={myicon} alt="" /></a>
  </div>
    </div>
  )
}

export default App
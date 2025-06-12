import { useState } from 'react'
import './App.css'
import TextChatPage from './pages/TextChatPage/TextChatPage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=' h-screen w-screen bg-[#99d98a] '>
      <TextChatPage />
    </div>
  );
}

export default App

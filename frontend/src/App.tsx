import { useState } from 'react'
import './App.css'
import TextChatPage from './pages/TextChatPage/TextChatPage'
import Sidebar from './components/Sidebar'


function App() {

  const [isSideBarOpen, setSideBar] = useState(false)


  return (
    <div className=' h-screen w-screen bg-[#99d98a] flex'>
      <Sidebar />
      <TextChatPage />
    </div>
  );
}

export default App

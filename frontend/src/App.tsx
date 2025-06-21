import { useState } from 'react'
import './App.css'
import TextChatPage from './pages/TextChatPage/TextChatPage'
import Sidebar from './components/Sidebar'


function App() {

  const [isSideBarOpen, setSideBar] = useState(false)


  return (
    <div className='h-full w-full min-h-[600px] bg-[#99d98a] flex overflow-hidden'>
      <Sidebar />
      <TextChatPage />
    </div>
  );
}

export default App

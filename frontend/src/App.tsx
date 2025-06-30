import { useState, useEffect } from 'react'
import './App.css'
import TextChatPage from './pages/TextChatPage/TextChatPage'
import Sidebar from './components/Sidebar/Sidebar'
import { type Session } from './types/message'
import { fetchSessionsByUserID } from './services/db.service.ts'


function App() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [sessions, setSessions] = useState<Session[]>([])

  useEffect(()=> {
    const getSesions = async() => {
        console.log("Use Effect ran")
        try {
            const response = await fetchSessionsByUserID(1)
            setSessions(response.data)
        } catch (error) {
            console.log("Error Found while fetching all sessions by ID")
            console.log(error)
        }
    }

    getSesions()
  }, [])

  return (
    <div className='h-full w-full min-h-[600px] bg-mainBg flex overflow-hidden'>
      <Sidebar sessions={sessions} isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen}/>
      <TextChatPage />
    </div>
  );
}

export default App

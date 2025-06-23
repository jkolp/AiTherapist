import { useState } from 'react'
import './App.css'
import TextChatPage from './pages/TextChatPage/TextChatPage'
import Sidebar from './components/Sidebar/Sidebar'
import { type Session } from './types/message'


function App() {

  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  const [sessions, setSessions] = useState<Session[]>(mockSessions)


  return (
    <div className='h-full w-full min-h-[600px] bg-mainBg flex overflow-hidden'>
      <Sidebar sessions={sessions} isOpen={isSideBarOpen} setIsOpen={setIsSideBarOpen}/>
      <TextChatPage />
    </div>
  );
}

export default App

let mockSessions : Session[] = [
    {
        id: "1",
        userId: "user1", 
        dateCreated: new Date("2023-10-01T10:00:00Z"),
        title: "Session 1"
    },
    {
        id: "2",
        userId: "user2",
        dateCreated: new Date("2023-10-02T11:00:00Z"),
        title: "Session 2"
    },
    {
        id: "3",
        userId: "user3",
        dateCreated: new Date("2023-10-03T12:00:00Z"),
        title: "Session 3"
    },
    {
        id: "4",
        userId: "user1", 
        dateCreated: new Date("2023-10-01T10:00:00Z"),
        title: "Session 4"
    },
    {
        id: "5",
        userId: "user2",
        dateCreated: new Date("2023-10-02T11:00:00Z"),
        title: "Session 5"
    },
    {
        id: "6",
        userId: "user3",
        dateCreated: new Date("2023-10-03T12:00:00Z"),
        title: "Session 6"
    },
    {
        id: "7",
        userId: "user1", 
        dateCreated: new Date("2023-10-01T10:00:00Z"),
        title: "Session 7"
    },
    {
        id: "8",
        userId: "user2",
        dateCreated: new Date("2023-10-02T11:00:00Z"),
        title: "Session 8"
    },
    {
        id: "9",
        userId: "user3",
        dateCreated: new Date("2023-10-03T12:00:00Z"),
        title: "Session 9"
    },
    {
        id: "10",
        userId: "user1", 
        dateCreated: new Date("2023-10-01T10:00:00Z"),
        title: "Session 10"
    },
    {
        id: "11",
        userId: "user2",
        dateCreated: new Date("2023-10-02T11:00:00Z"),
        title: "Session 11"
    },
    {
        id: "12",
        userId: "user3",
        dateCreated: new Date("2023-10-03T12:00:00Z"),
        title: "Session 12"
    },
    {
        id: "13",
        userId: "user1", 
        dateCreated: new Date("2023-10-01T10:00:00Z"),
        title: "Session 13"
    },
    {
        id: "14",
        userId: "user2",
        dateCreated: new Date("2023-10-02T11:00:00Z"),
        title: "Session 14"
    },
    {
        id: "15",
        userId: "user3",
        dateCreated: new Date("2023-10-03T12:00:00Z"),
        title: "Session 15"
    },
    {
        id: "16",
        userId: "user1", 
        dateCreated: new Date("2023-10-01T10:00:00Z"),
        title: "Session 16"
    },
    {
        id: "17",
        userId: "user2",
        dateCreated: new Date("2023-10-02T11:00:00Z"),
        title: "Session 17"
    },
    {
        id: "18",
        userId: "user3",
        dateCreated: new Date("2023-10-03T12:00:00Z"),
        title: "Session 18"
    },
    {
        id: "19",
        userId: "user1", 
        dateCreated: new Date("2023-10-01T10:00:00Z"),
        title: "Session 19"
    },
    {
        id: "20",
        userId: "user2",
        dateCreated: new Date("2023-10-02T11:00:00Z"),
        title: "Session 20"
    },
    {
        id: "21",
        userId: "user3",
        dateCreated: new Date("2023-10-03T12:00:00Z"),
        title: "Session 21"
    },
    {
        id: "22",
        userId: "user1", 
        dateCreated: new Date("2023-10-01T10:00:00Z"),
        title: "Session 22"
    },
    {
        id: "23",
        userId: "user2",
        dateCreated: new Date("2023-10-02T11:00:00Z"),
        title: "Session 23"
    },
    {
        id: "24",
        userId: "user3",
        dateCreated: new Date("2023-10-03T12:00:00Z"),
        title: "Session 24"
    },
    {
        id: "25",
        userId: "user1", 
        dateCreated: new Date("2023-10-01T10:00:00Z"),
        title: "Session 25"
    },
    {
        id: "26",
        userId: "user2",
        dateCreated: new Date("2023-10-02T11:00:00Z"),
        title: "Session 26"
    },
    {
        id: "27",
        userId: "user3",
        dateCreated: new Date("2023-10-03T12:00:00Z"),
        title: "Session 27"
    },{
        id: "28",
        userId: "user1", 
        dateCreated: new Date("2023-10-01T10:00:00Z"),
        title: "Session 28"
    },
    {
        id: "29",
        userId: "user2",
        dateCreated: new Date("2023-10-02T11:00:00Z"),
        title: "Session 29"
    },
    {
        id: "30",
        userId: "user3",
        dateCreated: new Date("2023-10-03T12:00:00Z"),
        title: "Session 30"
    },
    {
        id: "31",
        userId: "user1", 
        dateCreated: new Date("2023-10-01T10:00:00Z"),
        title: "Session 31"
    },
    {
        id: "32",
        userId: "user2",
        dateCreated: new Date("2023-10-02T11:00:00Z"),
        title: "Session 32"
    },
    {
        id: "33",
        userId: "user3",
        dateCreated: new Date("2023-10-03T12:00:00Z"),
        title: "Session 33"
    },
    {
        id: "34",
        userId: "user1", 
        dateCreated: new Date("2023-10-01T10:00:00Z"),
        title: "Session 34"
    },
    {
        id: "35",
        userId: "user2",
        dateCreated: new Date("2023-10-02T11:00:00Z"),
        title: "Session 35"
    },
    {
        id: "36",
        userId: "user3",
        dateCreated: new Date("2023-10-03T12:00:00Z"),
        title: "Session 36"
    }
]
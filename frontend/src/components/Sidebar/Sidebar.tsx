import React, { useState } from "react";
import { type Session } from "../../types/message";
import StickyHeader from "./StickyHeader";


interface SidebarProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    sessions: Session[];
}

export default function Sidebar({isOpen, setIsOpen, sessions}: SidebarProps) {

    function handleToggle() {
        setIsOpen( (prev: boolean) => !prev )
    }

    return (
        <div className={`${isOpen ? 'w-90 overflow-y-scroll' : 'w-12'} 
                        bg-darkerGreenTea border-solid h-full flex flex-col
                        scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-darkerGreenTea 
                        transition-[width] duration-300 ease-in-out `}>
            
            <StickyHeader isOpen={isOpen} handleToggle={handleToggle}/>

            {
                isOpen ? (
                    <div className="flex-1 flex flex-col">
                        <div className="h-full">
                            <ul>
                                {
                                    sessions.map( (session) => 
                                        <li key={session.id} 
                                            className="text-sm px-1 py-1.5 ml-1.5 rounded-md
                                                        truncate hover:bg-gray-100">
                                            {session.title}
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                ) 
                    : (
                        <div>
                        </div>
                    )
            }

        </div>
    )
}
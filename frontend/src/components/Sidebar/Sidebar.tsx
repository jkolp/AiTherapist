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
                        transition-[width] duration-300 ease-in-out `}>
            
            <StickyHeader isOpen={isOpen} handleToggle={handleToggle} />

            {
                isOpen ? (
                    <div className="flex-1 flex flex-col">
                        <h1 className="mb-10"> Sessions </h1>
                        <div className="h-full">
                            <ul className="flex flex-col gap-y-2 px-3">
                                {
                                    sessions.map( (session) => 
                                        <li key={session.id} className="gap-x-2">
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
import { PiSidebarSimple } from "react-icons/pi";
interface StickyHeaderProps {
    isOpen: boolean;
    handleToggle: () => void;
}

export default function StickyHeader({isOpen, handleToggle} : StickyHeaderProps) {

    return (
        <div className={`flex flex-col sticky top-0 bg-darkerGreenTea`}>
            <div className={`flex justify-end ${isOpen ? 'px-2' : 'px-1'}`}>
                <button className="text-xl font-bold p-2 h-9 my-2
                                    hover:rounded-xl hover:bg-[#dcf5e0] hover:text-black-500"
                        onClick={handleToggle}>
                    <PiSidebarSimple />
                </button>
            </div>
            {
                isOpen && (
                    <div className="flex justify-start ml-2.5">
                        <h1 className="text-2xl font-bold text-white my-2">
                            Sessions
                        </h1>
                    </div>
                )
            }
        </div>
    );
}
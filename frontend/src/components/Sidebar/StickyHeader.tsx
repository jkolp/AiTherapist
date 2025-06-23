import { PiSidebarSimple } from "react-icons/pi";
interface StickyHeaderProps {
    isOpen: boolean;
    handleToggle: () => void;
}

export default function StickyHeader({isOpen, handleToggle} : StickyHeaderProps) {

    return (
        <div className={`flex justify-end ${isOpen ? 'px-1' : 'px-1'} h-20`}>
            <button className="text-xl font-bold p-2 h-9 my-2
                                hover:rounded-xl hover:bg-[#dcf5e0] hover:text-black-500"
                    onClick={handleToggle}>
                <PiSidebarSimple />
            </button>
        </div>
    );
}
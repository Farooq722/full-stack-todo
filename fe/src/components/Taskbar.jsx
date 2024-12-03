import { FaClipboardCheck } from "react-icons/fa";

export function Taskbar(){

    return <div className="flex justify-start space-x-3 pt-10 pl-12 pb-6 text-3xl font-extrabold">
        <FaClipboardCheck />
        <div className="font-saif tracking-widest italic">
            <h1>Task Manager</h1>
        </div>
    </div>
}
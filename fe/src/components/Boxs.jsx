import { FaListCheck } from "react-icons/fa6";

export function Boxs({title, count}){

    return <div className="flex  justify-normal pl-10">
        <div className=" flex justify-center space-x-4 rounded-xl border bg-slate-100 bg-card text-card-foreground shadow p-4">
            <FaListCheck className="text-3xl flex justify-start"/>
            <div className="text-lg font-extrabold font-serif">
                <h2>{title}</h2>
                <h2 className="text-center">{count}</h2>
            </div>
        </div>
    </div>
}
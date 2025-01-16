import { useEffect } from "react"
import { Button } from "./Button"

export function Todos({todos}){
    // console.log(todos);
 
    return <div className="m-10 font-serif font-semibold flex justify-start">
        <div className=" w-[600px] space-y-5 ">
        {todos.map( function(todo) {
            return <div className="text-black border-2 border-slate-500 rounded-xl bg-white overflow-hidden">
                <div className="p-4 border-2 rounded-lg shadow-md bg-white border-b-indigo-900  whitespace-normal break-words">
                    <h1 className="text-2xl font-semibold text-gray-800 truncate">{todo.title}</h1>
                    <h2 className="text-lg text-gray-600 mt-2 line-clamp-none">{todo.description}</h2>
                </div>
                <Button> {todo.completed == true ? "Completed" : "Mark as completed"} </Button>
            </div>
        })}
        </div>
    </div>
}

import { useState } from "react";
import { Button } from "./button";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    // console.log(` ${title} and description is ${description} `);

    return <div className="pt-4 pl-10 space-x-4">
        <input type="text"  placeholder="Title" required onChange={(e) => {
            const titleValue = e.target.value;
            // console.log(titleValue);
            setTitle(titleValue);
        }} className="p-2 rounded-lg text-center w-52 border-2 border-zinc-900 font-sans font-medium bg-white "></input>

        <input type="text" placeholder="Description" required onChange={(e) => {
            const descriptionValue = e.target.value;
            // console.log(descriptionValue);
            setDescription(descriptionValue);
        }} className="p-2 rounded-lg text-center w-60 border-2 border-zinc-900 font-sans font-medium bg-white "></input>

        <button onClick={()=> {
            fetch(`backendUrl/todo`, {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "content-type": "application/json"
                }
            }).then(async function(res) {
                const json = await res.json();
                // console.log(json.todo);
                alert("Todo Added");

            })
        }} className="bg-slate-900 p-2 font-serif font-bold italic rounded-xl text-white hover:bg-gray-300 hover:text-black">Add a Todo</button>
    </div>
}
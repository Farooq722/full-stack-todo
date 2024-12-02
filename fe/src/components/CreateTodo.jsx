import { useState } from "react";

export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input type="text"  placeholder="Title" onChange={(e) => {
            const titleValue = e.target.value;
            // console.log(titleValue);
            setTitle(titleValue);
        }}></input>

        <input type="text" placeholder="Description" onChange={(e) => {
            const descriptionValue = e.target.value;
            // console.log(descriptionValue);
            setDescription(descriptionValue);
        }}></input>

        <button onClick={()=> {
            fetch("http://localhost:3000/todo", {
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
        }}>Add a Todo</button>
    </div>
}
'use client'

import { useRouter } from "next/navigation"
import { useState } from "react";

async function addToDo(name,refresh){
    await fetch('/api/todo/add',{
    method:'POST',
    body: JSON.stringify({name})
    });
    refresh();
}

export default function AddToDo(){
    const router=useRouter();
    const [todo,setToDo]=useState('');
    return (
        <>
            <div>
            <input className="  border-spacing-2" onChange={(e)=>{setToDo(e.target.value)}} />
            <button className=" pl-2 pr-2 m-2 bg-green-600" onClick={()=>{addToDo(todo,router.refresh)}}>Add</button>
            </div>
        </>
    )
}
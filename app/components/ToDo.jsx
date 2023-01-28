'use client'
import { useRouter } from "next/navigation";

async function update(id,isDone,refresh){
    //re routing using rewrites in nextjs.config
    let response=await fetch('/api/todo/update',{
        method:'POST',
        body:JSON.stringify({id,isDone})
    });
    refresh();
}

async function Delete(id,refresh){
    let response=await fetch(`/api/todo/delete?id=${id}`,{
        method:'DELETE'
    })
    refresh();
}

export default function ToDo({t}){
    const router=useRouter();
    return (
        <>
            <input className=" mr-2" type='checkbox' onChange={(e)=>{update(t.id,e.target.checked,router.refresh)}} checked={t.isDone}/>
            {t.name}
            <button className=" ml-2 rounded-md pl-1 pr-1 bg-red-800" onClick={()=>{Delete(t.id,router.refresh)}}>Delete</button>
        </>
    )
}
import ToDo from "./ToDo";
const getToDo= async()=>{
    let todos=await fetch("http://127.0.0.1:3001/api/todo/list");
    return todos.json();
}


export default async function ToDoList(){
    const {todos}=await getToDo();
    console.log(todos);
    return (
            todos.map((t)=>{ 
            return (
                <><ul className=" content-center m-1" key={t.id}>
                    <ToDo t={t}/>
                    </ul>
                </>
            )   
        })
    )
}
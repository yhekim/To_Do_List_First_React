import React, {useState,useEffect} from 'react'
import axios from "axios"
import "./AddTodo.css"


const AddTodo = ({rerender,setRerender}) => {

    const [todoText,setTodoText]=useState("")
    const [todos,setTodos]=useState("");

    useEffect(()=>{
        axios.get("http://localhost:3002/todos")
        .then(res=>{setTodos(res.data)}).catch(err=>console.log(err))
            
        
    },[todoText])

    if (todos ==="") return <h1>Loading...</h1>


    

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(todoText === "") return
        const ids=todos.map(todo=>{
            return todo.id;
        })
        const maxId=Math.max(...ids)
        const newTodo={
            id:maxId+1,
            todo:todoText
        }
        //console.log(newTodo)
        axios.post("http://localhost:3002/todos",newTodo)
        .then(res=>{
            console.log(res)
            setTodoText("")
            setRerender(!rerender)
        }).catch(err=>console.log(err))
        
        
    }


    return (
           <form className="addTodo-form" onSubmit={handleSubmit}>
               <input type="text" value={todoText} onChange={(e)=> setTodoText(e.target.value)}/>
               <button type="submit">Ekle</button>
           </form>
    )
}

export default AddTodo

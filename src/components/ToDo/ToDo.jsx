import axios from 'axios'
import React,{useState} from 'react'
import "./ToDo.css"


const ToDo = ({todo,rerender,setRerender}) => {

    const [show,setShow]=useState(false)

    const [todoText,setTodoText]=useState(todo.todo)

    const handleDelete=(id)=>{

        axios.delete(`http://localhost:3002/todos/${id}`)

        .then(res=>setRerender(!rerender)).catch(err=>console.log(err))
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const updatedTodo={
            ...todo,todo:todoText
        }
        axios.put(`http://localhost:3002/todos/${todo.id}`,updatedTodo)
        .then(res=>{
            console.log(res)
            setShow(false)
            setRerender(!rerender)
        }).catch(err=>console.log(err))
    }
  
    return (
        <div className="todocomp-todo">
            <h1    
        ><span> {todo.todo}</span> 
                <div>
                    <button  className="btn btn-sm btn-outline-danger" onClick={()=>handleDelete(todo.id)}>Sil</button>
                    <button onClick={()=>setShow(!show)}>Düzenle</button>
                    
                </div>
            </h1>
                
            {
                show && (
                    <form className="form2-form" onSubmit={handleSubmit}>
                        <input  className="form-control-input"  type="text" value={todoText} onChange={(e)=>setTodoText(e.target.value)}/>
                        <button id="todo-form2-savebutton"  type="submit">Kaydet</button>
                    </form>
                )
            }
            
        </div>
    )
}

export default ToDo

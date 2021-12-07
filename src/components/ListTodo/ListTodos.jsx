import React,{useEffect,useState} from 'react'
import "./ListTodo.css"
import ToDo from '../ToDo/ToDo'

const ListTodos = ({rerender,setRerender}) => {
    const [todos,setTodos]=useState("")
    
    useEffect(()=>{

        fetch("http://localhost:3002/todos")
            .then(res => res.json())
            .then(data => setTodos(data))

    },[rerender])

    if(todos === "") return <h1>Loading...</h1>
    if(todos.length===0) return <h1>Gösterilecek todo yok</h1>

    const MarkCompleted=(id)=>{
        setTodos(
            todos.map(eleman=> {
               if(eleman.id === id) {
                return {...eleman,tamamlandi:!eleman.tamamlandi}
               }
               else{
                   return eleman
                
               } 
            })
        )

    }

    return (
     <div>
          {todos.map((todo)=>
          (<div onClick={() => MarkCompleted(todo.id)} className={todo.tamamlandi ? "yapildi" : "yapilmadi"}>
             <ToDo 
             key={todo.id} todo={todo} rerender={rerender} setRerender={setRerender}>
                 </ToDo> 
          </div>))}
     </div>
       
        // <div className="list-div">
        //    {
        //        todos.map(todo => <ToDo key={todo.id} todo={todo} rerender={rerender} setRerender={setRerender}></ToDo>)
        //    }
        // </div>
    )
}

export default ListTodos;

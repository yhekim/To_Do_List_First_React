import React,{useState} from "react"
import ListTodos from "./components/ListTodo/ListTodos";
import AddTodo from "./components/AddTodo/AddTodo";
import "./App.css"; 

function App() {
  const [rerender,setRerender]=useState(false)
  return (
    <div className="App">
    <h1 className="App-h1">Todo App</h1>
      <AddTodo setRerender={setRerender} rerender={rerender}/>
      <ListTodos rerender={rerender} setRerender={setRerender}/>
      
    </div>
  );
}

export default App;

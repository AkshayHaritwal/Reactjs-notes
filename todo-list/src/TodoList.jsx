import { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // yaha humne npm ki help se uuid ko install karke import karwa liya hai iski help se hum sabhi li ko unique id provide karwa paayenge

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() , isdone :false}]); // issme default value de di hai sample task and id me uuid ki help se unique id generate hogi setTodos ki help se array me value update ho jaayegi
  let [newTodo, setnewTodo] = useState(""); // new todo ki help se new value add hoti jaayegi , is done me value assign kar di hai false jese hii task done ho jaayega iski value true ho jaayegi 


  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...todos, { task: newTodo, id: uuidv4() , isdone:false}]; // yaha task me to setnewTodo me jo value add huyi hai usse hum yaha setTodos me add karwa lenge and id me uuid ki help se uique id generate hogi jise ye array me add ho jaayegi
    });
    setnewTodo("");
  };


  let updateTodoValue = (event) => {
    setnewTodo(event.target.value); //jo value hum input box me enter karenge wo setnewTodo me jaake update ho jaayegi
  };


  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id)); // iski help se wo array filter ho jaayega jiski id id wale argument me store hai so id wala element to delete ho jaayega and baaki ke filter hoke print ho jaayenge
  };


  let upperCaseAll = () => { // iski help se hum sabhi li ko uppercase me convert kar denge 
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    );
  };


  let markAllDone = () => { // iski help se sabhi task done ho jaayenge and span wali styling unpe apply ho jaayegi  
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          isdone :true,
        };
      })
    );
  };


  let UppercaseOne = (id) => { // iski help se ek li ko uppercase me convert kar denge 
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {// map method ki help se array ke sabhi elements ke liye ye function run hoga jiski id match hogayi wo uppercase ho jaayega 
        if(todo.id == id){// yaha humne condition laga di iski help se jis button ki id match hogi wo upper case ho jaayega

            return {
              ...todo,
              task: todo.task.toUpperCase(),
            };
        }
        else{
            return todo;
        }
      })
    );
  };


  
  let markAsDone = (id) => {  
    setTodos((prevTodos) =>
      prevTodos.map((todo) => { 
        if(todo.id == id){ // yha jiski bhi id march hogi uss element ke liye isdone ki value true ho jaayegi and jse hii is done ki value true hogi span wali styling apply ho jaayegi 

            return {
              ...todo,
              isdone: true,
            };
        }
        else{
            return todo;
        }
      })
    );
  };



  return (
    // so yaha value me newTodo ki value store ho jaayegi , onchange ki help jese hii user key press karega wo track hoke updatetodovalue me jaake store ho jaayegi
    <div>
      <input
        placeholder="Add task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <h2>Todo List</h2>

      <ul>
        {
          // yaha todos.map ki help se jese hi task add hoga uske liye ek li create ho jaayega jisme todos wale array ki value store hoti jaayegi
          todos.map((todo) => (
            <li key={todo.id}>
            <span style={todo.isdone ? {textDecorationLine:"line-through"}:{}}>{todo.task}</span>
              
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => UppercaseOne(todo.id)}>UpperCaseOne</button>
              <button onClick={() => markAsDone(todo.id)}>markAsDone</button>

            </li>
          ))
          // deleteTodo ko humne as arrow function pass kar diya hai isse ji li ke delete pe click karenge wo id ki help se delete ho jaayega
        }
      </ul>

      <br />
      <br />
      <button onClick={upperCaseAll}>UpperCase</button>
      <button onClick={markAllDone}>markAllDone</button>
      
    </div>
  );
}

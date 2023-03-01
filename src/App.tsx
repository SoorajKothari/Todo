import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';
import { useState } from 'react';
function App() {
  const [todos,setTodos] = useState<Todo[]>([]);
  const addToHandler = (text:string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos)=>{
      return prevTodos.concat(newTodo);
    });

  };

  const removeTodoHandler = (text:string|null) =>{
    if(text === null)return;
    setTodos((prev)=>{
      return prev.filter(td=>td.text!==text);
    });
  }
  return (
    <div>
      <NewTodo onAddTodo={addToHandler}/>
      <Todos items={todos} onRemove={removeTodoHandler} />
     </div>
  );
}

export default App;

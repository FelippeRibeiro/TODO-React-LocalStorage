import './App.css';
import CreateTodo from './components/CreateTodo';
import ListTodo from './components/ListTodo';
import { TodoStore } from './context/TodoContext';

function App() {
  const { Todos } = TodoStore();

  return (
    <>
      <div className="w-screen h-screen">
        <main className="w-full h-full flex flex-col items-center">
          <h1>TODO LIST</h1>
          <h2>Total: {Todos.length}</h2>
          <div className="w-full h-full flex flex-col gap-10 items-center mt-7">
            <CreateTodo />
            <ListTodo className="" />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

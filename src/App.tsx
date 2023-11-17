import './App.css';
import { TodoStore } from './context/TodoContext';

function App() {
  const { Todos } = TodoStore();
  return (
    <>
      <h1 className="text-red-500">TODO</h1>
    </>
  );
}

export default App;

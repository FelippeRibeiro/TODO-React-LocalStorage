import { ITodo, TodoStore } from '../context/TodoContext';

export default function Todo({ todo }: { todo: ITodo }) {
  const { toggleTodo, removeTodo } = TodoStore();
  return (
    <div className="shadow-md flex flex-row p-5 items-center justify-between gap-10 border w-[500px] min-h-[100px] animate__animated animate__backInUp">
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-justify">{todo.title}</h1>
        <cite>{todo.description}</cite>
      </div>

      <div className="flex flex-row  gap-4">
        <input type="checkbox" checked={todo.completed} className="w-7 h-7" onChange={() => toggleTodo(todo.id)} />
        <button className="text-red-500 w-7 h-7" onClick={() => removeTodo(todo.id)}>
          <img src="/trash-2.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

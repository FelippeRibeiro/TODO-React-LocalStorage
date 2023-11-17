import { useRef } from 'react';
import { ITodo, TodoStore } from '../context/TodoContext';

export default function Todo({ todo }: { todo: ITodo }) {
  const Element = useRef<HTMLDivElement>(null);
  const { toggleTodo, removeTodo } = TodoStore();
  return (
    <div
      ref={Element}
      className="shadow-md flex flex-row p-5 items-center justify-between gap-10 border w-[500px] min-h-[100px] animate__animated animate__backInUp"
      style={{ animationDelay: `${Element.current?.offsetTop || 0}ms` }}
    >
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold text-justify">{todo.title}</h1>
        <cite>{todo.description}</cite>
      </div>

      <div className="flex flex-row  gap-4">
        <input type="checkbox" checked={todo.completed} className="w-7 h-7" onChange={() => toggleTodo(todo.id)} />
        <button
          className="text-red-500 w-7 h-7"
          onClick={() => {
            if (window.confirm('Are you sure you want to delete this todo?')) {
              Element.current?.classList.add('animate__bounceOut');
              setTimeout(() => {
                removeTodo(todo.id);
              }, 1000);
            }
          }}
        >
          <img src="/trash-2.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

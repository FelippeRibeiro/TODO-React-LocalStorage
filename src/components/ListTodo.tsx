import { TodoStore } from '../context/TodoContext';
import Todo from './Todo';

export default function ListTodo({ className }: { className?: React.HtmlHTMLAttributes<HTMLDivElement>['className'] }) {
  const { Todos } = TodoStore();
  return (
    <div className={className + ' flex flex-col gap-5'}>
      {Todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

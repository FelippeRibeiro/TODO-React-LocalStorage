import { useRef } from 'react';
import { TodoStore } from '../context/TodoContext';

export default function CreateTodo() {
  const TitleInput = useRef<HTMLInputElement>(null);
  const DescriptionInput = useRef<HTMLInputElement>(null);
  const { addTodo } = TodoStore();

  function handleCreate() {
    if (!TitleInput.current?.value) {
      alert('Title cannot be empty');
      return;
    }
    addTodo({
      title: TitleInput.current.value,
      description: DescriptionInput.current?.value || '',
      completed: false,
    });
    TitleInput.current.value = '';
    DescriptionInput.current?.value && (DescriptionInput.current.value = '');
  }

  return (
    <div className="flex flex-col gap-3 border p-5 shadow-lg rounded-lg w-[500px]">
      <h1 className="text-xl text-center">Create a new Todo</h1>
      <input type="text" className="border p-2 rounded-md " ref={TitleInput} placeholder="Tittle" />
      <input type="text" className="border p-2 rounded-md " ref={DescriptionInput} placeholder="Description" />
      <button onClick={handleCreate} className="flex flex-row items-center justify-center gap-2 bg-blue-400 rounded-md p-2">
        <p className="font-semibold text-white">Add</p> <img src="/plus-circle.svg" alt="" />
      </button>
    </div>
  );
}

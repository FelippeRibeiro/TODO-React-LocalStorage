import React, { useRef } from 'react';
import { TodoStore } from '../context/TodoContext';

export default function CreateTodo() {
  const TitleInput = useRef<HTMLInputElement>(null);
  const DescriptionInput = useRef<HTMLInputElement>(null);
  const { addTodo } = TodoStore();

  function handleCreate() {
    if (!TitleInput.current?.value) return;
    addTodo({
      title: TitleInput.current.value,
      description: DescriptionInput.current?.value || '',
      completed: false,
    });
  }

  return (
    <div className="flex flex-row gap-3 border p-5 shadow-lg">
      <input type="text" className="border p-2 rounded-md " ref={TitleInput} placeholder="Create a new todo" />
      <input type="text" className="border p-2 rounded-md " ref={DescriptionInput} placeholder="Description" />
      <button onClick={handleCreate} className="flex flex-row items-center gap-2 bg-blue-400 rounded-md p-2">
        <p className="font-semibold text-white">Add</p> <img src="/plus-circle.svg" alt="" />
      </button>
    </div>
  );
}

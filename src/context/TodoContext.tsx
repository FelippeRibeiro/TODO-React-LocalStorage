import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { v4 } from 'uuid';

type TTodoStore = {
  Todos: ITodo[];
  addTodo: (todo: Pick<ITodo, 'title' | 'description' | 'completed'>) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
};

export interface ITodo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export const TodoStore = create<TTodoStore>()(
  persist(
    (set) => ({
      Todos: [],
      addTodo: (todo: Pick<ITodo, 'title' | 'description' | 'completed'>) => set((state) => ({ Todos: [...state.Todos, { id: v4(), ...todo }] })),
      removeTodo: (id: string) => set((state) => ({ Todos: state.Todos.filter((todo) => todo.id !== id) })),
      toggleTodo: (id: string) =>
        set((state) => ({ Todos: state.Todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)) })),
    }),
    { name: 'todos', storage: createJSONStorage(() => localStorage) }
  )
);

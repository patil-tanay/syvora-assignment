import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { toggleTodo, deleteTodo } from '../features/todo/todoSlice';
import { Check, Trash2, Trash } from 'lucide-react';

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-2">


      {todos.map(todo => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-2 rounded bg-white dark:bg-gray-700"
        >
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`p-1 square-full border ${
                todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'
              }`}
            >
              {todo.completed && <Check size={16} className="text-white" />}
            </button>
            <span className={todo.completed ? 'line-through text-gray-500' : ''}>
              {todo.text}
            </span>
          </div>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={18} />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
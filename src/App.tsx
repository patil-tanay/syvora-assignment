import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import ThemeToggle from './components/ThemeToggle';
import AddTodo from './components/AddTodo';

const TodoList = React.lazy(() => import('./components/TodoList'));

function App() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 dark:text-white p-8">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Todo List</h1>
            <ThemeToggle />
          </div>
          
          <AddTodo />
          
          <Suspense fallback={<div>Loading todos...</div>}>
            <TodoList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default App;
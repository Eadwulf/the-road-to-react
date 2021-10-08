import React from 'react';

const initialTodoList = [
  {
    id: 'a',
    task: 'Learn React',
    complete: false,
  },
  {
    id: 'b',
    task: 'Learn Firebase',
    complete: false,
  },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {...todo, complete: true};
        } else {
        return todo;
        }
      });
    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id === action.id) {
          return {...todo, complete: false};
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

const Todo = () => {
  const [todoList, dispatch] = React.useReducer(todoReducer, initialTodoList);

  const handleTodoChange = todo => {
    dispatch(
      {
        type: todo.complete ? 'UNDO_TODO' : 'DO_TODO',
        id: todo.id
      }
    );
  };

  return (
    <ul>
      {todoList.map(todo => (
        <li key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleTodoChange(todo)}
            />
            {todo.task}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default Todo;

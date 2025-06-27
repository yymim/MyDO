import TodoItem from './TodoItem';

function TodoList({ todos, onDelete, onToggleDone }) {
  return (
    <ul style={{ marginTop: '1rem' }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggleDone={onToggleDone}
        />
      ))}
    </ul>
  );
}

export default TodoList;

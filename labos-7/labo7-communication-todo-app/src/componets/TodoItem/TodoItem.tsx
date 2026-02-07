interface TodoItemProps {
  completed: boolean;
  name: string;
  markCompleted: (index: number, completed: boolean) => void;
  index: number;
}

const TodoItem = ({
  completed,
  name,
  markCompleted: markCompleted,
  index,
}: TodoItemProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={(event) => markCompleted(index, event.target.checked)}
      />
      <span style={{textDecoration: completed ? "line-through" : "none"}}>
        {name}
      </span>
    </div>
  );
};

export default TodoItem;

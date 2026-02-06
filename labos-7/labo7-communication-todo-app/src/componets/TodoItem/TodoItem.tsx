interface TodoItemProps {
  completed: boolean;
  name: string;
  onMarkCompleted: (index: number, completed: boolean) => void;
  index: number;
}

const TodoItem = ({
  completed,
  name,
  onMarkCompleted: onMarkCompleted,
  index,
}: TodoItemProps) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={completed}
        onChange={(event) => onMarkCompleted(index, event.target.checked)}
      />
      <span style={{textDecoration: completed ? "line-through" : "none"}}>
        {name}
      </span>
    </div>
  );
};

export default TodoItem;

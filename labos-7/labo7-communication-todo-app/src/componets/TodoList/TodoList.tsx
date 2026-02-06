import TodoItem from "../TodoItem/TodoItem";

interface TodoListProps {
  data: {
    name: string;
    completed: boolean;
  }[];
  markCompleted: (index: number, completed: boolean) => void;
}

const TodoList = ({data, markCompleted}: TodoListProps) => {
  return (
    <div>
      {data.map((e, i) => (
        <TodoItem
          key={i}
          completed={e.completed}
          name={e.name}
          onMarkCompleted={markCompleted}
          index={i}
        />
      ))}
    </div>
  );
};
export default TodoList;

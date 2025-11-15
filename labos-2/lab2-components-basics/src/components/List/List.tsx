interface ListProps {
  items: string[];
}

interface ListItemProps {
  text: string;
}

const ListItem = ({text}: ListItemProps) => {
  return (
    <>
      <li>{text}</li>
    </>
  );
};

const List = ({items}: ListProps) => {
  return (
    <>
      <ul>
        {items.map((el) => (
          <ListItem key={el} text={el} />
        ))}
      </ul>
    </>
  );
};

export default List;

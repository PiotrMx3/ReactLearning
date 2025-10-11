import ListItem from "./ListItem";

interface StringArray {
  listArray: string[];
}

const List = ({listArray}: StringArray) => {
  return (
    <>
      <ul>
        {listArray.map((el, index) => (
          <ListItem key={index} text={el} />
        ))}
      </ul>
    </>
  );
};

export default List;

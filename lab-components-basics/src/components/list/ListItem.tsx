interface ItemList {
  text: string;
}

const ListItem = ({text}: ItemList) => {
  return (
    <>
      <li>{text}</li>
    </>
  );
};

export default ListItem;

import React, {useState} from "react";

interface ArrayItem {
  name: string;
  quantity: number;
  id: string;
}

const ShoppingList = () => {
  const [shoppingList, setShoppingList] = useState<ArrayItem[]>([]);

  const [infoMsg, setInfoMsg] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [quanity, setQuanity] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const addItemToArray = () => {
    const parsedQuantity = parseInt(quanity);

    if (parsedQuantity <= 0 || isNaN(parsedQuantity)) {
      setInfoMsg("Quantity must be greater than 0");
      setIsError(true);
      return;
    }

    if (!name.trim()) {
      setInfoMsg("Name must not be empty");
      setIsError(true);
      return;
    }

    const itemToAdd: ArrayItem = {
      name: name.trim(),
      quantity: parsedQuantity,
      id: crypto.randomUUID(),
    };

    setShoppingList((p) => [...p, itemToAdd]);

    setInfoMsg("Item added to shopping list");
    setIsError(false);
    setName("");
    setQuanity("");
  };

  const removeItemFromList = (id: string) => {
    setShoppingList((prev) => prev.filter((el) => el.id !== id));

    setInfoMsg("Item removed from shopping list");
    setIsError(false);
  };

  return (
    <>
      {infoMsg && (
        <p
          style={{
            backgroundColor: isError ? "red" : "green",
            fontWeight: "bold",
          }}
        >
          {infoMsg}
        </p>
      )}
      <br />
      <label htmlFor="name">Name: </label>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        name="name"
        id="name"
      />
      <br />
      <label htmlFor="quanity">Quanity: </label>
      <input
        onChange={(e) => setQuanity(e.target.value)}
        value={quanity}
        type="number"
        name="quanity"
        id="quanity"
        min="1"
      />
      <br />
      <button onClick={() => addItemToArray()} type="button">
        Add
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quanity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.quantity}</td>
                <td>
                  <button
                    onClick={() => removeItemFromList(e.id)}
                    type="button"
                  >
                    remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ShoppingList;

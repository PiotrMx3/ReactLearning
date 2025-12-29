import React, {useState} from "react";
import styles from "./ShoppingList.module.css";

interface Shopingitem {
  id: number;
  name: string;
  quantity: number;
}

const ShoppingList = () => {
  const [list, setList] = useState<Shopingitem[]>([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const removeItem = (toRemove: number) => {
    setList((prev) => prev.filter((el) => el.id !== toRemove));
    setSuccessMessage("Item removed from shopping list");
  };

  const additemTolist = () => {
    setSuccessMessage("");
    setErrorMessage("");

    if (!name) return setErrorMessage("Name must not be empty");
    if (!quantity || parseInt(quantity) <= 0)
      return setErrorMessage("Quantity must be greater than 0");

    const newItem: Shopingitem = {
      id: Date.now(),
      name: name,
      quantity: Number(quantity),
    };

    setList((prev) => [...prev, newItem]);
    setName("");
    setQuantity("");

    setSuccessMessage("Item added to shopping list");
  };

  return (
    <>
      <div className={`${styles.boxShopping}`}>
        {successMessage && (
          <div className={styles.successMessage}>
            <p>{successMessage}</p>
          </div>
        )}
        {errorMessage && (
          <div className={styles.errorMessage}>
            <p>{errorMessage}</p>
          </div>
        )}

        <div className={`${styles.inputField}`}>
          <label htmlFor="name-field">Name:</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            name="name"
            id="name-field"
          />
        </div>

        <div className={`${styles.inputField}`}>
          <label htmlFor="quantity-field">Quantity:</label>
          <input
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            min={1}
            type="number"
            name="quantity"
            id="quantity-field"
          />
        </div>
        <div>
          <button
            onClick={() => additemTolist()}
            className={`${styles.inputfieldButton}`}
            type="button"
          >
            Add
          </button>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Quanity</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {list.map((el, i) => (
                <React.Fragment key={`${el.name}-${i}`}>
                  <tr>
                    <td>{el.name}</td>
                    <td>{el.quantity}</td>
                    <td>
                      <button onClick={() => removeItem(el.id)} type="button">
                        remove
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ShoppingList;

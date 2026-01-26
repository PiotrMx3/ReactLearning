import type {FormEvent, CSSProperties} from "react";

const styles: {[key: string]: CSSProperties} = {
  formStyle: {
    maxWidth: "300px",
    margin: "1rem auto",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  inputStyle: {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  buttonStyle: {
    padding: "0.5rem",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

const MyForm = () => {
  // const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   const form = event.currentTarget;
  //   const formData = new FormData(form);

  //   // console.log(Object.fromEntries(formData));

  //   const name = formData.get("name");
  //   const year = formData.get("year");

  //   console.log({name: name, year: year});
  // };

  const HandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    const formData = new FormData(form);
    const dataObject = Object.fromEntries(formData);

    if (String(dataObject.name).length < 5) {
      alert("Naam is te kort");
      return;
    }

    console.log(dataObject);
  };
  return (
    <form onSubmit={HandleSubmit} style={styles.formStyle}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" style={styles.inputStyle} />

      <label htmlFor="year">Year:</label>
      <input
        type="number"
        id="year"
        name="year"
        min="1900"
        max="2021"
        style={styles.inputStyle}
      />

      <button type="submit" style={styles.buttonStyle}>
        Submit
      </button>
    </form>
  );
};

export default MyForm;

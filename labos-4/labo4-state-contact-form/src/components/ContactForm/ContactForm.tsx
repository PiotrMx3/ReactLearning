import React, {useState} from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [confirmationText, setConfirmationText] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    setConfirmationText(
      `Thanks ${firstName} ${lastName}! We will contact you at ${email}.`
    );

    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const isInvalid = !firstName || !lastName || !email || !message;

  return (
    <>
      <article className={`${styles.formbox}`}>
        <form onSubmit={handleSubmit}>
          <section className={`${styles.inputboxs}`}>
            <label htmlFor="first-name">First Name:</label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              name="first-name"
              id="first-name"
              value={firstName}
            />
          </section>

          <section className={`${styles.inputboxs}`}>
            <label htmlFor="last-name">Last Name:</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              name="last-name"
              id="last-name"
              value={lastName}
            />
          </section>
          <section className={`${styles.inputboxs}`}>
            <label htmlFor="email">Email:</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              value={email}
              required
            />
          </section>

          <section className={`${styles.inputboxs}`}>
            <label htmlFor="text-area">Message:</label>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              name="text-area"
              id="text-area"
              cols={20}
              rows={1}
              value={message}
            ></textarea>
          </section>
          <section className={`${styles.buttonbox}`}>
            <button disabled={isInvalid} type="submit">
              Send
            </button>
          </section>
        </form>
        {confirmationText && <p>{confirmationText}</p>}
      </article>
    </>
  );
};

export default ContactForm;

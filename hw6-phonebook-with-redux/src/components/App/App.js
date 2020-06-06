import React, { useState, useEffect, lazy, Suspense } from "react";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import { Button } from "@material-ui/core";
import { CSSTransition } from "react-transition-group";
import pop from "../../styles/pop.module.css";
import decreaseScale from "../../styles/decreaseScale.module.css";

const FormToAddContact = lazy(() =>
  import("../FormToAddContact/FormToAddContact" /*webpackChankName: "form" */)
);

const ContactList = lazy(() =>
  import(
    "../ContactList/ContactListReduxContainer" /*webpackChankName: "list" */
  )
);

const FilterContacts = lazy(() =>
  import(
    "../FilterContacts/FilterContactsReduxContainer" /*webpackChankName: "filter" */
  )
);

const App = ({ contacts, getContactsFromLocalStorage }) => {
  const [isTitleRendered, setIsTitleRendered] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleTitleRendering = () => {
    setIsTitleRendered(true);
  };
  const handleToogleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  useEffect(() => {
    handleTitleRendering();
  });

  useEffect(() => {
    const savedLocalyContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedLocalyContacts) getContactsFromLocalStorage(savedLocalyContacts);
  }, []);
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={styles.appWraper}>
      <CSSTransition
        in={isTitleRendered}
        timeout={500}
        unmountOnExit
        classNames={pop}
      >
        <h1 className={styles.appTitle}>Phonebook</h1>
      </CSSTransition>

      <Button
        variant="outlined"
        color="secondary"
        className={styles.addFormButton}
        onClick={handleToogleForm}
      >
        {isFormOpen ? "Hide form" : "Add contact"}
      </Button>

      <Suspense fallback={<h3>Loading...</h3>}>
        <CSSTransition
          in={isFormOpen}
          timeout={1000}
          unmountOnExit
          classNames={decreaseScale}
        >
          <FormToAddContact onCloseForm={handleToogleForm} />
        </CSSTransition>
        <CSSTransition
          in={contacts.length > 0}
          timeout={1000}
          unmountOnExit
          classNames={decreaseScale}
        >
          <h2>Contacts</h2>
        </CSSTransition>
        <CSSTransition
          in={contacts.length > 1}
          timeout={1000}
          unmountOnExit
          classNames={decreaseScale}
        >
          <FilterContacts />
        </CSSTransition>

        {contacts.length > 0 && <ContactList />}
      </Suspense>
    </div>
  );
};

export default App;

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  getContactsFromLocalStorage: PropTypes.func.isRequired,
};

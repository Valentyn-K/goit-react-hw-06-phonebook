import React from "react";
import PropTypes from "prop-types";
import styles from "./Contact.module.css";
import ClearIcon from "@material-ui/icons/Clear";

const Contact = ({ name, number, id, onDeleteContact }) => (
  <li className={styles.contactCard}>
    <div className={styles.imgcontainer}>
      <img
        className={styles.contactImage}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/768px-Google_Contacts_icon.svg.png"
        alt="contact-avatar"
      />
      <p>{name}</p>
    </div>
    <p>{number}</p>
    <ClearIcon
      className={styles.deleteIcon}
      onClick={() => onDeleteContact(id)}
    />
  </li>
);

export default Contact;

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

import { connect } from "react-redux";
import { deleteContact } from "../../redux/actions";
import Contact from "./Contact";

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(Contact);

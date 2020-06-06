import { connect } from "react-redux";
import * as Actions from "../../redux/actions";
import App from "./App";

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

const mapDispatchToProps = (dispatch) => ({
  getContactsFromLocalStorage: (contacts) =>
    dispatch(Actions.getContactsFromLocalStorage(contacts)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

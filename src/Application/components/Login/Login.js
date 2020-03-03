import React, { useContext, useState, useRef } from "react";
import { connect } from "react-redux";
import UserContext from "./UserContext";
import Modal from "../Modal/Modal";
import { logIn } from "./actions";

const Login = ({ logIn, logOut }) => {
  const [viewModal, showModal] = useState(true);
  const userContext = useContext(UserContext);
  const inputRef = useRef();

  const submit = e => {
    console.log(e);
    e.preventDefault();
    logIn(inputRef.current.value);
    userContext.updateUser(true);
  };
  return (
    <div className="login">
      <Modal visible={viewModal} onClose={() => showModal(false)} avoidClose>
        <form onSubmit={submit}>
          <input type="text" ref={inputRef} placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Log In</button>
        </form>
      </Modal>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  logIn: (...params) => dispatch(logIn(params))
});

export default connect(null, mapDispatchToProps)(Login);

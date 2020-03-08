import React, { useRef } from "react";
import { connect } from "react-redux";
import { logIn } from "./actions/user";

import "./css/Login.css";

const Login = ({ logIn }) => {
  const inputRef = useRef();

  const submit = e => {
    e.preventDefault();
    logIn(inputRef.current.value);
  };
  return (
    <div className="login">
      <div className="login__container">
        <div className="login__title">
          <h2>Haz login y empieza a escuchar toda la música!</h2>
        </div>
        <form className="login__form" onSubmit={submit}>
          <input type="text" ref={inputRef} placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  logIn: user => dispatch(logIn(user))
});

export default connect(null, mapDispatchToProps)(Login);

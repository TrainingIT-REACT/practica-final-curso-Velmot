import React, { useContext, useState } from "react";
import UserContext from "./UserContext";
import Modal from "../Modal/Modal";

const Login = () => {
  const [viewModal, showModal] = useState(true);
  const userContext = useContext(UserContext);
  const submit = e => {
    console.log(e);
    userContext.updateUser(true);
  };
  return (
    <div className="login">
      <Modal visible={viewModal} onClose={() => showModal(false)} avoidClose>
        <form>
          <input type="text" placeholder="Usuario" />
          <input type="password" placeholder="Contraseña" />
          <button type="submit" onClick={submit}>
            Log In
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default Login;

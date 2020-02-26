import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./css/Modal.css";

const modalNode = document.getElementById("modal");

const Modal = ({
  visible = false,
  onClose = () => false,
  avoidClose = false,
  children
}) => {
  const [wrapper] = useState(document.createElement("div"));
  wrapper.classList.add("modal");
  useEffect(() => {
    modalNode.appendChild(wrapper);
    return () => modalNode.removeChild(wrapper);
  }, [visible]);
  return visible
    ? ReactDOM.createPortal(
        <>
          <div
            className="modal__background"
            onClick={() => !avoidClose && onClose()}
          ></div>
          <div className="modal__container">
            <span
              className="modal__close"
              onClick={() => !avoidClose && onClose()}
            >
              &times;
            </span>
            {children}
          </div>
        </>,
        wrapper
      )
    : null;
};

export default Modal;

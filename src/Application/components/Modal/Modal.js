import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const modalNode = document.getElementById("modal");

const Modal = ({ visible, close = true, children }) => {
  const [wrapper, setWrapper] = useState(document.createElement("div"));
  const [open, setOpen] = useState(true);
  modalNode.appendChild(wrapper);
  useEffect(() => {
    if (visible && open) {
    }
    return () => modalNode.removeChild(wrapper);
  }, [visible]);
  return visible && open
    ? ReactDOM.createPortal(
        <div>
          <div className="background" onClick={() => setOpen(false)} />
          <div className="modal">
            {close && (
              <button className="modal__close" onClick={() => setOpen(false)}>
                &times;
              </button>
            )}
            {children}
          </div>
        </div>,
        wrapper
      )
    : null;
};

export default Modal;

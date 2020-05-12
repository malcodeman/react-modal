import React from "react";
import Dom from "react-dom";

import hooks from "./hooks";
import types from "./types";

const style = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  top: "0",
  right: "0",
  bottom: "0",
  left: "0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Modal(props) {
  const {
    onClose,
    mountNode,
    isOpen,
    dismissOnEsc,
    dismissOnClickOutside,
    children,
    role,
    ...otherProps
  } = props;
  const ref = React.createRef();

  hooks.useLockBodyScroll(isOpen);
  hooks.useKeyPress("Escape", dismissOnEsc && onClose);
  hooks.useOnClickOutside(ref, dismissOnClickOutside && onClose);

  if (!(mountNode instanceof HTMLElement)) {
    return null;
  } else if (!isOpen) {
    return null;
  }
  return Dom.createPortal(
    <div {...otherProps} style={{ ...style, ...props.style }}>
      {children &&
        React.cloneElement(children, {
          ...children.props,
          ref,
          role,
        })}
    </div>,
    mountNode
  );
}

Modal.propTypes = types.modalTypes;

Modal.defaultProps = types.modalDefaults;

export default Modal;

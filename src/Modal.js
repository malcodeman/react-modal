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
  const childArray = React.Children.toArray(children);

  function handleDismissOnEsc() {
    if (dismissOnEsc) {
      onClose && onClose();
    }
  }

  function handleDismissOnClickOutside() {
    if (dismissOnClickOutside) {
      onClose && onClose();
    }
  }

  hooks.useLockBodyScroll(isOpen);
  hooks.useKeyPress("Escape", handleDismissOnEsc);
  hooks.useOnClickOutside(ref, handleDismissOnClickOutside);

  if (!isOpen) {
    return null;
  } else if (!(mountNode instanceof HTMLElement)) {
    console.error(
      `[react-modal] mountNode must be HTML element, got ${typeof mountNode}`
    );
    return null;
  } else if (childArray.length !== 1) {
    console.error(
      `[react-modal] Exactly 1 child must be passed to Modal, found ${childArray.length} children`
    );
    return null;
  }
  return Dom.createPortal(
    <div {...otherProps} style={{ ...style, ...props.style }}>
      {React.cloneElement(children, {
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

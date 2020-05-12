import React from "react";
import styled from "styled-components";

import { Modal } from "../src";

export default {
  title: "Modal",
  component: Modal,
};

const Dialog = styled.div`
  margin: 1rem;
  width: 500px;
  background-color: #fff;
`;

const ModalHeader = styled.div`
  margin: 2rem 1.5rem 1rem 1.5rem;
  color: #000;
  font-family: "Roboto", sans-serif;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.4;
`;

const ModalBody = styled.div`
  margin: 1rem 1.5rem;
  color: rgb(84, 84, 84);
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 1.42;
`;

const ModalFooter = styled.div`
  padding: 0.5rem 0;
  margin: 0 1.5rem;
  text-align: right;
  border-top: 1px solid rgba(0, 0, 0, 0.5);
  font-family: "Roboto", sans-serif;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 1.42;
`;

const Button = styled.button`
  border: 0;
  cursor: pointer;
  outline: 0;
  padding: 0.25rem 0.5rem;
  :disabled {
    cursor: not-allowed;
  }
  font-family: "Roboto", sans-serif;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.55;
`;

const ModalButton = styled(Button)`
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const Default = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function onClick() {
    setIsOpen(!isOpen);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={onClick}>Trigger Modal</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>Modal</div>
      </Modal>
    </>
  );
};

export const Styling = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  function onClick() {
    setIsOpen(!isOpen);
  }

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={onClick}>Trigger Modal</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Dialog>
          <ModalHeader>Hello world</ModalHeader>
          <ModalBody>
            Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
            faucibus ex, non facilisis nisl. Maecenas aliquet mauris ut tempus.
          </ModalBody>
          <ModalFooter>
            <ModalButton onClick={onClose}>Cancel</ModalButton>
            <ModalButton>Okay</ModalButton>
          </ModalFooter>
        </Dialog>
      </Modal>
    </>
  );
};

# [react-modal](http://react-modal-storybook.surge.sh)

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malcodeman/react-modal/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/@malcodeman/react-modal)](https://www.npmjs.com/package/@malcodeman/react-modal)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

The Modal component is used to show content on top of an overlay. It blocks any interaction with the page — until the overlay is clicked, or a close action is triggered.

## Getting started

```sh
yarn add @malcodeman/react-modal
# or
npm install --save @malcodeman/react-modal
```

```jsx
import React from "react";
import { Modal } from "@malcodeman/react-modal";

function App() {
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
}

export default App;
```

## License

[MIT](./LICENSE)

import constants from "../constants";

const modalDefaults = {
  isOpen: false,
  mountNode: document.body,
  role: constants.ROLE.dialog,
  dismissOnClickOutside: true,
  dismissOnEsc: true,
};

export { modalDefaults };

export default { modalDefaults };

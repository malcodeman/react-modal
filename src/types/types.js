import PropTypes from "prop-types";

import constants from "../constants";

const modalTypes = {
  isOpen: PropTypes.bool,
  mountNode: PropTypes.instanceOf(Element).isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  role: PropTypes.oneOfType([
    constants.ROLE.alertdialog,
    constants.ROLE.dialog,
  ]),
  dismissOnClickOutside: PropTypes.bool,
  dismissOnEsc: PropTypes.bool,
};

export { modalTypes };

export default { modalTypes };

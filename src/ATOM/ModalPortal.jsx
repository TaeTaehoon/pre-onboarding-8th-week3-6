import { ReactDOM } from "react-dom";

import ModalBody from "./ModalBody";

const portal = document.querySelector("#modal-portal");

function MordalPortal({ children }) {
  return ReactDOM.createPortal(<ModalBody>{children}</ModalBody>, portal);
}

export default MordalPortal;

import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import ModalBody from "./ModalBody";
import IssueForm from "../MOLECULE/IssueForm";

const portal = document.querySelector("#modal-root");

function MordalPortal({ children }) {
  const isAddMode = useSelector((state) => state.mainSlice.isAddNewIssue);
  return ReactDOM.createPortal(
    <ModalBody>
      <IssueForm />
    </ModalBody>,
    portal
  );
}

export default MordalPortal;

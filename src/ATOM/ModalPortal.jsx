import ReactDOM from "react-dom";
import { useSelector } from "react-redux";

import ModalBody from "./ModalBody";
import IssueForm from "../MOLECULE/IssueForm";
import LoadingCircle from "./LoadingCircle";

const portal = document.querySelector("#modal-root");

function MordalPortal({ children }) {
  const isLoading = useSelector((state) => state.mainSlice.isLoading);
  const isAddMode = useSelector((state) => state.mainSlice.isAddNewIssue);
  return ReactDOM.createPortal(
    <ModalBody>
      {isLoading && <LoadingCircle />}
      {!isLoading && <IssueForm />}
    </ModalBody>,
    portal
  );
}

export default MordalPortal;

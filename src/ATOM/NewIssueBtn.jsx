import { useDispatch } from "react-redux";
import styled from "styled-components";

import { toggleModal, changeIssueStatus } from "../redux/modules/mainSlice";

function NewIssueBtn({ issueStatus }) {
  const dispatch = useDispatch();
  const handleClickBtn = (e) => {
    e.stopPropagation();
    dispatch(toggleModal("newIssue"));
    dispatch(changeIssueStatus(issueStatus));
  };
  return <StBtnBody onClick={handleClickBtn}>+ 새로 만들기</StBtnBody>;
}

const StBtnBody = styled.div`
  width: 7rem;
  height: 2rem;
`;

export default NewIssueBtn;

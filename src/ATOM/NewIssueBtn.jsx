import { useDispatch } from "react-redux";
import styled from "styled-components";

import { toggleModal } from "../redux/modules/mainSlice";

function NewIssueBtn() {
  const dispatch = useDispatch();
  const handleClickBtn = () => {
    dispatch(toggleModal());
  };
  return <StBtnBody onClick={handleClickBtn}>+ 새로 만들기</StBtnBody>;
}

const StBtnBody = styled.div`
  width: 7rem;
  height: 2rem;
`;

export default NewIssueBtn;

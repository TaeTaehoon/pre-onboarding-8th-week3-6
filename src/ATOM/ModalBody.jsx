import { useDispatch } from "react-redux";
import styled from "styled-components";

import { toggleModal } from "../redux/modules/mainSlice";

function ModalBody({ children }) {
  const dispatch = useDispatch();
  const handleClickBg = (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("modal-bg")) {
      dispatch(toggleModal());
    }
  };
  return (
    <StModalContainer onClick={handleClickBg} className="modal-bg">
      <StModalBody>{children}</StModalBody>
    </StModalContainer>
  );
}

const StModalContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

const StModalBody = styled.div`
  width: 128rem;
  height: 80rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1.9rem;
`;

export default ModalBody;

import styled from "styled-components";

function EditInput({ size, type }) {
  return <StInput type={type} />;
}

const StInput = styled.input`
  width: 80%;
  height: 2.2rem;
  font-size: 1.5rem;
`;

export default EditInput;

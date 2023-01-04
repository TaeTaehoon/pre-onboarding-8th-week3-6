import styled from "styled-components";

function EditInput({ size, type, onChange, name }) {
  return <StInput type={type} onChange={onChange} name={name} />;
}

const StInput = styled.input`
  width: 80%;
  height: 2.2rem;
  font-size: 1.5rem;
`;

export default EditInput;

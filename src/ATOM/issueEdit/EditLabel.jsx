import styled from "styled-components";

function EditLabel({ target, children }) {
  return <StLabel htmlFor={target}>{children}</StLabel>;
}

const StLabel = styled.label`
  font-size: 2rem;
`;

export default EditLabel;

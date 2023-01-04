import styled from "styled-components";

function EditLabel({ target, children }) {
  return <StLabel htmlFor={target}>{children}</StLabel>;
}

const StLabel = styled.label``;

export default EditLabel;

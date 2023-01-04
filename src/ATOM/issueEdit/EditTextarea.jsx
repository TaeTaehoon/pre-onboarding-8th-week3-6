import styled from "styled-components";

function EditTextarea({ onChange, name }) {
  return <StTextarea name={name} onChange={onChange} />;
}

const StTextarea = styled.textarea``;

export default EditTextarea;

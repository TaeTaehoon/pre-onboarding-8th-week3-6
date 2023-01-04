import styled from "styled-components";

function EditTextarea({ onChange, name, value }) {
  return <StTextarea name={name} onChange={onChange} value={value} />;
}

const StTextarea = styled.textarea``;

export default EditTextarea;

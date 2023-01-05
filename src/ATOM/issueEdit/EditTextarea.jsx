import styled, { css } from "styled-components";

function EditTextarea({ onChange, name, value, size }) {
  return (
    <StTextarea size={size} name={name} onChange={onChange} value={value} />
  );
}

const StTextarea = styled.textarea`
  ${({ size }) => {
    switch (size) {
      case "small": {
        return css`
          width: 5rem;
          height: 2.5rem;
        `;
      }
      case "midium": {
        return css`
          width: 15rem;
          height: 4rem;
        `;
      }
      case "large": {
        return css`
          width: 50rem;
          height: 11rem;
        `;
      }
    }
  }}
  font-size: 1.5rem;
`;

export default EditTextarea;

import styled, { css } from "styled-components";

function EditInput({ size, type, onChange, name, value }) {
  return (
    <StInput
      size={size}
      type={type}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
}

const StInput = styled.input`
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
          height: 5rem;
        `;
      }
    }
  }}
  font-size: 1.5rem;
`;

export default EditInput;

import styled, { css } from "styled-components";

function EditBtn({ size, children, onClick }) {
  return <StBtn onClick={onClick}>{children}</StBtn>;
}

const StBtn = styled.button`
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
          width: 40rem;
          height: 8rem;
        `;
      }
    }
  }}
`;

export default EditBtn;

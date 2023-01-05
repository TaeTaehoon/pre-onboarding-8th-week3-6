import styled from "styled-components";

function AuthorCard({ children }) {
  return <StCardBody>{children}</StCardBody>;
}

const StCardBody = styled.div`
  width: 50rem;
  height: 5rem;
  :hover {
    background-color: gray;
  }
`;

export default AuthorCard;

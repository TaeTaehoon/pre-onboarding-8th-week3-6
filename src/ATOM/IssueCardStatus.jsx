import styled from "styled-components";

function IssueCardStatus({ children }) {
  return <StCardStatus>{children}</StCardStatus>;
}

const StCardStatus = styled.p`
  font-size: 1.5rem;
`;

export default IssueCardStatus;

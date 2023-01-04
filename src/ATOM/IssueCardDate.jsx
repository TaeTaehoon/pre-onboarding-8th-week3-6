import styled from "styled-components";

function IssueCardDate({ children }) {
  return <StCardDate>{children}</StCardDate>;
}

const StCardDate = styled.p`
  font-size: 1.5rem;
`;

export default IssueCardDate;

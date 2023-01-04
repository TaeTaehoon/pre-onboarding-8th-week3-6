import styled from "styled-components";

function IssueCardTitle({ children }) {
  return <StCardTitle>{children}</StCardTitle>;
}
const StCardTitle = styled.h3`
  font-size: 1.7rem;
  margin-bottom: 1rem;
`;
export default IssueCardTitle;

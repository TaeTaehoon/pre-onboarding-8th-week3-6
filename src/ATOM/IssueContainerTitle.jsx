import styled from "styled-components";

function IssueContainerTitle({ children }) {
  return <StTitle>{children}</StTitle>;
}

const StTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

export default IssueContainerTitle;

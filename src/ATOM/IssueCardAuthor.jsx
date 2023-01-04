import styled from "styled-components";

function IssueCardAuthor({ children }) {
  return <StCardAuthor>{children}</StCardAuthor>;
}

const StCardAuthor = styled.p`
  font-size: 1.5rem;
`;

export default IssueCardAuthor;

import styled from "styled-components";

import EditBtn from "../ATOM/issueEdit/EditBtn";
import EditInput from "../ATOM/issueEdit/EditInput";
import EditTextarea from "../ATOM/issueEdit/EditTextarea";
import EditLabel from "../ATOM/issueEdit/EditLabel";

function IssueForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <StForm onSubmit={handleSubmit}>
      <div className="issue-title-wrapper">
        <EditLabel target="edit-issue-title">제목</EditLabel>
        <EditInput id="edit-issue-title" type="text" />
      </div>
      <div className="issue-content-wrapper">
        <EditLabel target="edit-issue-content">내용</EditLabel>
        <EditTextarea id="edit=issue-content" />
      </div>
      <div className="issue-status-wrapper">
        <EditLabel target="edit-issue-status">제목</EditLabel>
        <EditInput id="edit-issue-status" type="text" />
      </div>
      <div className="issue-author-wrapper">
        <EditLabel target="edit-issue-author">제목</EditLabel>
        <EditInput id="edit-issue-author" type="text" />
      </div>
    </StForm>
  );
}

const StForm = styled.form``;

export default IssueForm;

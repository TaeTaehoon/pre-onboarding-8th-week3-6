import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import EditBtn from "../ATOM/issueEdit/EditBtn";
import EditInput from "../ATOM/issueEdit/EditInput";
import EditTextarea from "../ATOM/issueEdit/EditTextarea";
import EditLabel from "../ATOM/issueEdit/EditLabel";
import { editContentsInput } from "../redux/modules/mainSlice";

function IssueForm() {
  const dispatch = useDispatch();
  const targetStatus = useSelector((state) => state.mainSlice.currStatus);
  //   const editContents = useSelector((state) => state.mainSlice.editContents);
  const [editContents, setEditContents] = useState({
    title: "",
    content: "",
    date: "",
    author: "",
    status: targetStatus,
  });
  const isAddMode = useSelector((state) => state.mainSlice.isAddNewIssue);

  const handleChangeInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setEditContents({ ...editContents, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editContentsInput(editContents));
    setEditContents({
      title: "",
      content: "",
      date: "",
      author: "",
      status: targetStatus,
    });
  };
  return (
    <StForm onSubmit={handleSubmit}>
      <div className="issue-title-wrapper">
        <EditLabel target="edit-issue-title">제목</EditLabel>
        <EditInput
          id="edit-issue-title"
          type="text"
          name="title"
          onChange={handleChangeInput}
        />
      </div>
      <div className="issue-content-wrapper">
        <EditLabel target="edit-issue-content">내용</EditLabel>
        <EditTextarea
          id="edit=issue-content"
          name="content"
          onChange={handleChangeInput}
        />
      </div>
      <div className="issue-status-wrapper">
        <EditLabel target="edit-issue-date">마감기한</EditLabel>
        <EditInput
          id="edit-issue-date"
          type="text"
          name="date"
          onChange={handleChangeInput}
        />
      </div>
      <div className="issue-author-wrapper">
        <EditLabel target="edit-issue-author">담당자</EditLabel>
        <EditInput
          id="edit-issue-author"
          type="text"
          name="author"
          onChange={handleChangeInput}
        />
      </div>
      <EditBtn id="edit-issue-submitBtn">
        {isAddMode ? "추가하기" : "수정하기"}
      </EditBtn>
      {!isAddMode && <EditBtn id="edit-issue-cancelBtn">취소하기</EditBtn>}
    </StForm>
  );
}

const StForm = styled.form``;

export default IssueForm;

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import EditBtn from "../ATOM/issueEdit/EditBtn";
import EditInput from "../ATOM/issueEdit/EditInput";
import EditTextarea from "../ATOM/issueEdit/EditTextarea";
import EditLabel from "../ATOM/issueEdit/EditLabel";
import {
  editContentsInput,
  updatIssueContents,
  removeIssue,
} from "../redux/modules/mainSlice";

function IssueForm() {
  const dispatch = useDispatch();
  const debouncer = useRef();
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const authors = useSelector((state) => state.mainSlice.authors);
  const preContents = useSelector((state) => state.mainSlice.editContents);
  const [editContents, setEditContents] = useState({
    title: "",
    content: "",
    date: "",
    author: "",
    status: "",
    issueId: -1,
  });
  const isAddMode = useSelector((state) => state.mainSlice.isAddNewIssue);

  const handleSearchAuthor = (e) => {
    setSearchInput(e.target.value);
    if (debouncer.current) {
      clearTimeout(debouncer.current);
      setSearchResult([]);
    }
    debouncer.current = setTimeout(async function () {
      if (e.target.value.length !== 0) {
        console.log(searchInput);
        const res = null;
        // setSearchResult([...result, ...reqRes.data]);
      } else {
        setSearchResult([]);
      }
    }, 200);
  };

  const handleChangeInput = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setEditContents({ ...editContents, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editContents.issueId === -1) {
      dispatch(editContentsInput({ ...editContents, issueId: Date.now() }));
    } else {
      dispatch(updatIssueContents(editContents));
    }
  };

  const handleClickDeleteBtn = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(removeIssue(editContents.issueId));
  };

  useEffect(() => {
    setEditContents({ ...editContents, ...preContents });
  }, []);
  return (
    <StForm onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <EditLabel target="edit-issue-title">제목</EditLabel>
        <EditInput
          id="edit-issue-title"
          type="text"
          name="title"
          value={editContents.title}
          onChange={handleChangeInput}
          size="large"
        />
      </div>
      <div className="input-wrapper">
        <EditLabel target="edit-issue-content">내용</EditLabel>
        <EditTextarea
          id="edit=issue-content"
          name="content"
          value={editContents.content}
          onChange={handleChangeInput}
          size="large"
        />
      </div>
      <div className="input-wrapper">
        <EditLabel target="edit-issue-date">마감기한</EditLabel>
        <EditInput
          id="edit-issue-date"
          type="datetime-local"
          name="date"
          value={editContents.date}
          onChange={handleChangeInput}
          size="large"
        />
      </div>
      <div className="input-wrapper">
        <EditLabel target="edit-issue-author">담당자</EditLabel>
        <EditInput
          id="edit-issue-author"
          type="text"
          name="author"
          value={editContents.author}
          onChange={(e) => {
            handleChangeInput(e);
            handleSearchAuthor(e);
          }}
          size="large"
        />
      </div>
      <EditBtn id="edit-issue-submitBtn">
        {isAddMode ? "추가하기" : "수정하기"}
      </EditBtn>
      {!isAddMode && (
        <>
          <EditBtn id="edit-issue-cancelBtn">취소하기</EditBtn>
          <EditBtn id="edit-issue-deleteBtn" onClick={handleClickDeleteBtn}>
            삭제하기
          </EditBtn>
        </>
      )}
    </StForm>
  );
}

const StForm = styled.form`
  position: relative;
  .input-wrapper {
    width: 70rem;
    height: 15rem;
    display: flex;
    justify-content: space-between;
  }
`;

export default IssueForm;

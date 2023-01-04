import styled from "styled-components";
import { useDispatch } from "react-redux";

import IssueCardTitle from "../ATOM/IssueCardTitle";
import IssueCardDate from "../ATOM/IssueCardDate";
import IssueCardStatus from "../ATOM/IssueCardStatus";
import IssueCardAuthor from "../ATOM/IssueCardAuthor";
import { toggleModal } from "../redux/modules/mainSlice";

function IssueCard({
  index,
  title,
  date,
  issueId,
  status,
  author,
  dragStartHandler,
  dragOverHandler,
  dragDropHandler,
}) {
  const dispatch = useDispatch();

  const handleClickCard = (e) => {
    e.stopPropagation();
    dispatch(toggleModal(issueId));
  };

  return (
    <StCardBody
      onClick={handleClickCard}
      onDragStart={(e) => dragStartHandler(e, index)}
      onDragEnter={(e) => dragOverHandler(e, index, status)}
      onDragEnd={(e) => dragDropHandler(e, index)}
      id={`N${issueId}`}
      draggable
    >
      <IssueCardTitle>{title}</IssueCardTitle>
      <IssueCardDate>{date}</IssueCardDate>
      <IssueCardStatus>{status}</IssueCardStatus>
      <IssueCardAuthor>{author}</IssueCardAuthor>
    </StCardBody>
  );
}

const StCardBody = styled.div`
  width: 100%;
  height: 15rem;
  background-color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default IssueCard;

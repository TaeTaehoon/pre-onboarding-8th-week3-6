import styled from "styled-components";

import IssueCardTitle from "../ATOM/IssueCardTitle";
import IssueCardDate from "../ATOM/IssueCardDate";
import IssueCardStatus from "../ATOM/IssueCardStatus";
import IssueCardAuthor from "../ATOM/IssueCardAuthor";
import { useCallback } from "react";

function IssueCard({
  index,
  title,
  date,
  status,
  author,
  dragStartHandler,
  dragOverHandler,
  dragDropHandler,
}) {
  const handleMouseDown = useCallback((e) => {
    e.stopPropagation();
    console.log(e);
  }, []);
  const handleMouseUp = useCallback((e) => {
    e.stopPropagation();
    console.log(e);
  }, []);
  return (
    <StCardBody
      onDragStart={(e) => dragStartHandler(e, index)}
      onDragEnter={(e) => dragOverHandler(e, index, status)}
      onDragEnd={(e) => dragDropHandler(e, index)}
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

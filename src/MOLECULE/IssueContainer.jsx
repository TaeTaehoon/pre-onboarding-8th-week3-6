import { useEffect, useState } from "react";
import styled from "styled-components";

import IssueContainerTitle from "../ATOM/IssueContainerTitle";
import IssueCounter from "../ATOM/IssueCounter";
import NewIssueBtn from "../ATOM/NewIssueBtn";
import IssueCard from "./IssueCard";

function IssueContainer({
  backgroundColor,
  status,
  totalCount,
  issues,
  dragStartHandler,
  dragOverHandler,
  dragDropHandler,
}) {
  return (
    <StContainerBody
      count={totalCount}
      bgColor={backgroundColor}
      onDragEnter={(e) => dragOverHandler(e, 0, status)}
    >
      <div className="container-header">
        <IssueContainerTitle>{status}</IssueContainerTitle>
        <IssueCounter>{issues.length}</IssueCounter>
      </div>
      {issues.map((issue, index) => {
        return (
          <IssueCard
            key={`${issue.title}.${index}`}
            index={index}
            title={issue.title}
            date={issue.date}
            status={issue.status}
            author={issue.author}
            dragStartHandler={dragStartHandler}
            dragOverHandler={dragOverHandler}
            dragDropHandler={dragDropHandler}
          />
        );
      })}

      <NewIssueBtn issueStatus={status} />
    </StContainerBody>
  );
}

const StContainerBody = styled.div`
  width: ${({ count }) => `calc(98% / ${count})` || "12rem"};
  border-radius: 1.3rem;
  padding: 1rem;
  background-color: ${({ bgColor }) => bgColor || "red"};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 1rem;
  .container-header {
    display: flex;
    align-items: center;
  }
`;

export default IssueContainer;

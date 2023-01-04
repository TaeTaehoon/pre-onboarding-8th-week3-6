import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import IssueContainer from "./MOLECULE/IssueContainer";
import MordalPortal from "./ATOM/ModalPortal";
import { updateIssues, syncData } from "./redux/modules/mainSlice";

function App() {
  const [containers, setContainers] = useState(["시작전", "진행중", "완료"]);
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.mainSlice.issues);
  const isModalOpen = useSelector((state) => state.mainSlice.modalOpen);

  const dragIssueCard = useRef();
  const dragOverItem = useRef();
  const dragEnterSection = useRef();

  const handleDragStart = (e, position) => {
    dragIssueCard.current = e.target.id;
  };

  const handleDragEnter = (e, position, status) => {
    e.stopPropagation();
    if (e.target.children[0]?.innerText !== undefined) {
      dragOverItem.current = e.target.id;
    }

    dragEnterSection.current = status;
  };

  const handleDragDrop = (e, position) => {
    const dragIssue = issues.find(
      (el) => `N${el.issueId}` === dragIssueCard.current
    );
    const overIssue = issues.find(
      (el) => `N${el.issueId}` === dragOverItem.current
    );
    const startSection = dragIssue.status;
    if (startSection === dragEnterSection.current) {
      const initCopyList = [
        ...issues.filter((el) => el.issueId !== dragIssue.issueId),
      ];
      if (
        issues.findIndex((el) => el.issueId === dragIssue.issueId) <
        issues.findIndex((el) => el.issueId === overIssue.issueId)
      ) {
        initCopyList.splice(
          initCopyList.findIndex((el) => el.issueId === overIssue.issueId) + 1,
          0,
          dragIssue
        );
      } else {
        initCopyList.splice(
          initCopyList.findIndex((el) => el.issueId === overIssue.issueId),
          0,
          dragIssue
        );
      }

      console.log(initCopyList);
      dispatch(updateIssues(initCopyList));
      console.log(
        initCopyList.findIndex((el) => el.issueId === overIssue.issueId)
      );
    } else {
      dispatch(
        updateIssues([
          ...issues.filter((el) => `N${el.issueId}` !== dragIssueCard.current),
          { ...dragIssue, status: dragEnterSection.current },
        ])
      );
    }
  };

  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    window.localStorage.setItem("issues", JSON.stringify(issues));
  });
  useEffect(() => {
    dispatch(syncData());
  }, [dispatch]);
  console.log(issues);
  return (
    <MainWrapper>
      <IssueContainer
        backgroundColor="green"
        status="시작전"
        totalCount={containers.length}
        issues={issues.filter((issue) => issue.status === "시작전")}
        dragStartHandler={handleDragStart}
        dragOverHandler={handleDragEnter}
        dragDropHandler={handleDragDrop}
      ></IssueContainer>
      <IssueContainer
        backgroundColor="blue"
        status="진행중"
        totalCount={containers.length}
        issues={issues.filter((issue) => issue.status === "진행중")}
        dragStartHandler={handleDragStart}
        dragOverHandler={handleDragEnter}
        dragDropHandler={handleDragDrop}
      ></IssueContainer>
      <IssueContainer
        backgroundColor="green"
        status="완료"
        totalCount={containers.length}
        issues={issues.filter((issue) => issue.status === "완료")}
        dragStartHandler={handleDragStart}
        dragOverHandler={handleDragEnter}
        dragDropHandler={handleDragDrop}
      ></IssueContainer>
      {isModalOpen && <MordalPortal />}
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 120rem;
  height: 100vh;
  margin: 0 auto;
  margin-top: 20rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`;

export default App;

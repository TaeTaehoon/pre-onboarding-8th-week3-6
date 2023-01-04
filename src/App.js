import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import IssueContainer from "./MOLECULE/IssueContainer";
import MordalPortal from "./ATOM/ModalPortal";
import { updateIssues } from "./redux/modules/mainSlice";

function App() {
  const [containers, setContainers] = useState(["시작전", "진행중", "완료"]);
  const dispatch = useDispatch();
  const issues = useSelector((state) => state.mainSlice.issues);
  const isModalOpen = useSelector((state) => state.mainSlice.modalOpen);
  // const [issues, setIssues] = useState([
  //   {
  //     title: "titlettittlelee",
  //     date: "2023",
  //     status: "시작전",
  //     author: "닷지강",
  //   },
  //   {
  //     title: "ffffffff",
  //     date: "2024",
  //     status: "진행중",
  //     author: "닷지강",
  //   },
  //   {
  //     title: "eeeeee",
  //     date: "2025",
  //     status: "완료",
  //     author: "닷지강",
  //   },
  // ]);
  const dragIssueCard = useRef();
  const dragOverItem = useRef();
  const dragEnterSection = useRef();
  const handleDragStart = (e, position) => {
    dragIssueCard.current = e.target.children[0].innerText;
  };

  const handleDragEnter = (e, position, status) => {
    e.stopPropagation();
    if (e.target.children[0]?.innerText !== undefined) {
      dragOverItem.current = e.target.children[0]?.innerText;
    }

    dragEnterSection.current = status;
  };

  const handleDragDrop = (e, position) => {
    const dragIssue = issues.find((el) => el.title === dragIssueCard.current);
    const overIssue = issues.find((el) => el.title === dragOverItem.current);
    const startSection = dragIssue.status;
    console.log(dragIssue);
    console.log(overIssue);
    if (startSection === dragEnterSection.current) {
      const initCopyList = [
        ...issues.filter((el) => el.title !== dragIssue.title),
      ];
      if (
        issues.findIndex((el) => el.title === dragIssue.title) <
        issues.findIndex((el) => el.title === overIssue.title)
      ) {
        initCopyList.splice(
          initCopyList.findIndex((el) => el.title === overIssue.title) + 1,
          0,
          dragIssue
        );
      } else {
        initCopyList.splice(
          initCopyList.findIndex((el) => el.title === overIssue.title),
          0,
          dragIssue
        );
      }

      console.log(initCopyList);
      dispatch(updateIssues(initCopyList));
      // setIssues(initCopyList);
      console.log(initCopyList.findIndex((el) => el.title === overIssue.title));
      console.log("얍!");
      console.log(initCopyList);
    } else {
      // dragIssue.status = dragEnterSection.current;
      dispatch(
        updateIssues([
          ...issues.filter((el) => el.title !== dragIssueCard.current),
          { ...dragIssue, status: dragEnterSection.current },
        ])
      );
      // setIssues([
      //   ...issues.filter((el) => el.title !== dragIssueCard.current),
      //   { ...dragIssue },
      // ]);
    }
  };

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

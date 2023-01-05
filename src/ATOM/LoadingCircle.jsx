import styled from "styled-components";

function LoadingCircle() {
  return <StCircle />;
}

const StCircle = styled.div`
  width: 10rem;
  height: 10rem;
  :after {
    content: " ";
    display: block;
    width: 8rem;
    height: 8rem;
    margin: 1rem;
    border-radius: 50%;
    border: 0.5rem solid gray;
    border-color: gray transparent gray transparent;
    animation: lds-dual-ring 1.4s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingCircle;

import styled from "styled-components";

export const MyHeader = styled.header`
  width: 70px;
  height: 100vh;
  z-index: var(--zIndex-items);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
    background-color: none;
    padding: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--bg-dark);
  }

  .menu_icon {
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    transform-origin: 50%;
    svg {
      width: 25px;
      height: 25px;
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      transform: ${(props) => (props.active ? "rotateZ(90deg)" : "")};
      path{
        fill: var(--main-color);
      }
    }
  }
`;

export const MyNavBar = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
`;

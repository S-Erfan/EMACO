import styled from "styled-components";

export const MainCardSelect = styled.div`
  height: 130px;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(6.3px);
  border-radius: 8px;
  border: 1px solid var(--gray-color);
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  gap: 8px;
  padding: 8px;


  .asideBar {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: var(--gray-color);
    padding: 8px;
    border-radius: 6px;
    .icon_place {
      background-color: var(--main-color);
      border-radius: 8px;
      width: 35px;
      height: 35px;
      padding: 2px;
      svg {
        width: 100%;
        height: 100%;
      }
    }

    .counter_command {
      width: 35px;
      height: 35px;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 8px;
      display: grid;
      place-items: center;
      line-height: 35px;
    }
  }

  .body_place{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
    .titles{
        h6{
            font-size: 16px;
        }
        span{
            font-size: 12px;
        }
    }
    .icons_holder{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 7px;
        svg{
            background-color: #000;
            padding: 7px;
            border-radius: 8px;
            color: var(--main-color);
            width: 30px;
            height: 30px;
        }
    }

    .circle_yell{
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: var(--main-color);
        position: absolute;
        top: 0;
        left: 0;
    }
}

`;

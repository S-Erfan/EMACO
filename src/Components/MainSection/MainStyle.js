import styled, { keyframes } from "styled-components";

// keyframes
const showText = keyframes`
    0%, 100% {
        transform: translateX(0%) translateY(-50%);
    }
    50%{
        transform: translateX(65%) translateY(-50%);
    }
    70% {
        transform: translateX(0%) translateY(-50%);
    }

`;

export const ContainerDiv = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 12px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .timePicker_holder {
    width: 100%;
    height: 30%;
    min-height: 150px;
    border-radius: 8px;
    padding: 12px;
  }

  .detail_device {
    width: 100%;
    height: 55%;
    display: flex;
    justify-content: flex-end;
    position: relative;

    .add_action_icon {
      color: var(--main-color);
      position: absolute;
      top: 0px;
      right: 0px;
      font-size: 25px;
    }

    .seleceted_places {
      width: 35%;
      max-width: 115px;
      height: 100%;
      padding: 4px;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      .actions_place {
        width: 100%;
        height: 100%;
        margin-top: 5px;
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding-top: 8px;
        border-top: 1px solid #808080;
        gap: 5px;
        ::-webkit-scrollbar {
          width: 5px;
          background-color: none;
          padding: 5px;
        }

        ::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background-color: var(--bg-dark);
        }
      }

      .name_place {
        width: 100%;
        height: 35px;
        border-radius: 8px;
        background-color: var(--main-color);
        display: grid;
        place-items: center;
        position: relative;
        overflow: hidden;

        .show_anim_text {
          width: fit-content;
          white-space: nowrap;
          position: absolute;
          top: 50%;
          right: 10px;
          /* transform: ; */
          animation: ${showText} 5s linear infinite;
        }
      }
    }
  }
`;

export const CardActionTag = styled.div`
  width: 100%;
  height: 60px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #c8c8c865;
  padding: 5px 0;
  border-radius: 12px;

  .btn_holder {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    align-items: center;
    gap: 8px;
    padding: 2px 4px;
    span {
      font-family: Arial, Helvetica, sans-serif;
      width: 30px;
      height: 30px;
      box-sizing: border-box;
      background-color: var(--bg-darkGray2);
      color: var(--main-color);
      font-size: 11px;
      display: grid;
      place-items: center;
      border-radius: 5px;
      transition: all 0.3s linear;
    }
    .active {
      background-color: var(--main-color-glass);
    }
  }
  .title_action {
    width: 100%;
    text-align: center;
    color: #fff;
    font-weight: 100;
    font-size: 12px;
  }
`;

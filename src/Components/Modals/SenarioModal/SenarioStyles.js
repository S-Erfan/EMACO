import styled from "styled-components";

export const FormSetSenarioTag = styled.div`
  width: 100%;
  border: 1px solid var(--main-color);
  margin-top: 1rem;
  border-radius: 12px;
  padding: 12px;
  overflow-y: hidden;
  .input_holder {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    border-bottom: 1px solid #000;
    padding-bottom: 6px;
    div {
      width: 80%;
    }
    svg {
      box-sizing: content-box;
      background-color: var(--bg-darkGray);
      padding: 6px;
      border-radius: 6px;
      color: var(--main-color);
    }
  }
`;

export const GroundActionsTag = styled.div`
  margin-top: 12px;
  /* width: 100%; */
  display: flex;
  gap: 12px;
  overflow-y: hidden;
  box-sizing: content-box;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    width: 1px;
    max-width: 2px;
    height: 3px;
    background-color: #b4b4b4aa;
    padding: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--bg-dark);
  }
`;

export const CardActionsMainTag = styled.div`
  width: 105px !important;
  min-width: 105px;
  height: 105px !important;
  min-height: 105px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: all 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  background-color: ${(props) =>
    props.active ? "var(--main-color-glass)" : "var(--bg-darkGray)"};
  padding: 12px;
  border-radius: 12px;

  h3 {
    font-size: 16px;
  }
  h6 {
    font-size: 14px;
    opacity: 0.6;
  }
  .number_holder {
    width: 100%;
    text-align: left;
    span {
      background-color: var(--bg-dark);
      color: #fff;
      width: 25px !important;
      height: 25px !important;
      padding: 1px 10px;
      border-radius: 4px;
      text-align: center;
    }
  }

  .switch_holder {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    display: flex;
    .count {
      background-color: var(--bg-dark);
      color: #fff;
      width: 25px !important;
      height: 25px !important;
      padding: 1px 10px;
      border-radius: 4px;
      text-align: center;
    }
  }
`;

export const GroundControlerTag = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const CardSenarioTag = styled.div`
  width: 100%;
  height: fit-content;
  background-color: var(--bg-darkGray2);
  border-radius: 12px;
  border: 1px solid #808080;
  min-height: 150px;
  padding: 8px;

  .header_card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
    padding-bottom: 8px;
    border-bottom: 1px solid #808080;

    .btn_controller {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      background-color: var(--bg-dark);
      padding: 5px;
      border-radius: 8px;

      button {
        width: 35px;
        height: 35px;
        outline: none;
        border: none;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 14px;
        font-size: 12px;
        line-height: 140px;
        color: var(--main-color);
        background-color: var(--bg-darkGray);
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .4s ease-out;
      }

      .activeStatus {
        background-color: var(--main-color-glass);
      }

      svg {
        width: 35px;
        height: 35px;
        border-radius: 8px;
        box-sizing: border-box;
        padding: 8px;
        font-size: 12px;
        line-height: 140px;
        color: var(--main-color);
        background-color: var(--bg-darkGray);
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }

  .actions_command {
    margin-top: 8px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-y: scroll;
    gap: 8px;
    z-index: 4;

    ::-webkit-scrollbar {
      width: 0;
      max-width: 2px;
      height: 3px;
      background-color: #b4b4b4aa;
      padding: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: var(--bg-dark);
    }
  }
`;

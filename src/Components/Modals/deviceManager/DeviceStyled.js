import styled from "styled-components";

export const MainDivForm = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  border: 1px solid var(--main-color);
  border-radius: 8px;
  padding: 8px;
  .btnHolder {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icons-holder {
      display: flex;
      gap: 8px;
      svg {
        transition: all 0.2s linear;
      }
    }
    svg {
      box-sizing: content-box;
      background: rgba(0, 0, 0, 0.4);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(6.3px);
      -webkit-backdrop-filter: blur(6.3px);
      border-radius: 8px;
      padding: 8px;
      color: var(--main-color) !important;
      font-size: 22px;
      cursor: pointer;
    }
    .act_icon {
      background: rgba(227, 161, 8, 0.4);
    }
  }
`;

export const GroundDevices = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
    background-color: none;
    padding: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--bg-dark);
  }

`;

export const DeviceCard = styled.div`
  width: 100%;
  height: 100%;
  padding: 6px;
  border-radius: 8px;
  background-color: var(--main-color-glass);
  display: flex;
  justify-content: space-between;
  align-items: stretch;

  .input_holder {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .icons_holder {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    svg {
      /* width: 40px;
      height: 40px; */
      box-sizing: content-box;
      background: rgba(0, 0, 0, .6);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(6.3px);
      -webkit-backdrop-filter: blur(6.3px);
      border-radius: 8px;
      padding: 8px;
      color: var(--main-color) !important;
      font-size: 22px;
      cursor: pointer;
    }
    .sim {
        cursor: unset !important;
        height: 48px;
    }
  }
`;

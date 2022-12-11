import styled from "styled-components";

export const FormAddUserDiv = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: stretch;
  border: 1px solid var(--main-color);
  border-radius: 12px;
  padding: 8px;
  .input_holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
  }
  .btn_holder {
    /* height: 100%; */
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    svg {
      box-sizing: content-box;
      background: var(--bg-darkGray);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(6.3px);
      -webkit-backdrop-filter: blur(6.3px);
      border-radius: 8px;
      padding: 8px;
      color: var(--main-color) !important;
      font-size: 22px;
      cursor: pointer;
    }
  }
`;

export const ListUsersDiv = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 260px;
  overflow-y: scroll;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: none;
    padding: 5px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--bg-dark);
  }

  .sms_icon {
    position: fixed;
    bottom: 5px;
    right: 5px;
    width: 40px;
    height: 40px;
    background-color: var(--main-color);
    border-radius: 50%;
    display: grid;
    place-items: center;
    z-index: 1;
    svg {
      color: var(--bg-dark);
      font-size: 35px;
    }
  }
`;

export const CardDetailUsers = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: stretch;
  border-radius: 12px;
  padding: 8px;
  box-shadow: none !important;
  .input_holder {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 8px;
    span{
        width: 100%;
        height: 40px;
        border-radius: 8px;
        text-align: center;
        background-color: var(--bg-dark);
        display: grid;
        place-items: center;
        box-shadow: 0 2px 6px #000000af ; 
    }
  }
  .btn_holder {
    /* height: 100%; */
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    svg {
      box-sizing: content-box;
      background: var(--bg-dark);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(6.3px);
      -webkit-backdrop-filter: blur(6.3px);
      border-radius: 8px;
      padding: 6px;
      color: var(--main-color) !important;
      font-size: 16px;
      cursor: pointer;
        width: 20px;
        height: 20px;
    }
  }
`;

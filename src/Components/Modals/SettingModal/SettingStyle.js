import styled from "styled-components";

export const FormPassTag = styled.div`
  margin-top: 2rem;
  width: 100%;
  border: 1px solid var(--main-color);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`;

export const ContainerBtnTag = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    color: var(--main-color);
    /* font-size: 35px; */
    width: 35px;
    height: 35px;
    padding: 4px;
    border-radius: 8px;
    transition: all 0.3s linear;
  }

  .add_btn{
    width: 50px;
    height: 50px;
  }

  .simcard_holder {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .act_icon {
    background-color: #e3a10844;
  }
`;

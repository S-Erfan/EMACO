import styled from "styled-components";

export const MainBodyModal = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const GroundTag = styled.div`
  width: 100%;
  border: 1px solid var(--main-color);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;
  overflow: hidden;

  .addBtn {
    width: 45px;
    height: 45px;
    padding: 4px;
    border-left: 1px solid var(--main-color);

    svg {
      color: var(--main-color);
      width: 100%;
      height: 100%;
      padding: 8px;
      background-color: var(--bg-darkGray);
      border-radius: 8px;
    }
  }

  .equipments_ {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 3px 2px;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CardGroundTag = styled.div`
  width: 45px;
  min-width: 45px;
  height: 45px;
  min-height: 45px;
  background-color: ${(props) =>
    props.active ? "#25252355" : "var(--bg-darkGray)"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);

  span {
    color: #fff;
    font-size: 10px;
  }
  svg {
    color: var(--main-color);
    width: 27px;
    height: 27px;
    path {
      fill: var(--main-color);
    }
  }
`;

export const GroundPlacesActiveTag = styled.div`
  width: 100%;
  height: 330px;
  .swiper_placesActive {
    width: 100%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
    }
  }
`;

export const PlaceContainerTag = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  border: 1px solid #808080;
  background-color: var(--bg-darkGray);
  border-radius: 12px;
  padding: 8px;
  .header_place {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 1px solid #808080;

    .info_place {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
      gap: 8px;
      .svg_holder {
        background-color: var(--main-color);
        width: 45px;
        height: 45px;
        border-radius: 8px;
        padding: 2px;
        svg {
          width: 100%;
          height: 100%;
        }
      }

      .des_holder {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        h3 {
          font-size: 14px;
          margin-bottom: 0;
        }
        h5 {
          font-size: 10px;
          margin-bottom: 0;
        }
      }
    }

    .delete_place {
      svg {
        width: 30px;
        height: 30px;
        background-color: var(--bg-dark);
        padding: 5px;
        color: var(--main-color);
        border-radius: 5px;
      }
    }
  }
`;

export const ListActionsContainerTag = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 8px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
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

export const CardActionsTag = styled.div`
  width: 100%;
  border: 1px solid var(--bg-dark);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  padding: 8px;
  background-color: #0005;
  .info_action {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 10px;
    .title {
      width: 100%;
      height: auto;
      input {
        background-color: var(--bg-dark) !important;
        box-shadow: 0 4px 6px #0005;
        text-align: right !important;
      }
    }
    .number {
      width: 32px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--bg-dark);
      box-shadow: 0 2px 6px #0005;
      border-radius: 8px;
      span {
        text-align: center;
        vertical-align: baseline;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }

  .btn_holder {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
    svg {
      width: 35px;
      height: 35px;
      background-color: var(--bg-dark);
      opacity: 0.6;
      box-shadow: 0px 3px 5px #0005;
      padding: 8px;
      border-radius: 8px;
      position: relative;
      opacity: 1;
      z-index: 2;
      color: var(--main-color);
    }
  }
`;

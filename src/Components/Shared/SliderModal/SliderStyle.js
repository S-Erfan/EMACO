import styled from "styled-components";

export const ContainerSlid = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid var(--main-color);
  border-radius: 8px;
  padding-bottom: 1rem;
  padding-top: 1rem;
  overflow: hidden;
  margin-top: 8px;
  z-index: 3;
  .mySwiper {
    padding: 0 8px 1rem;
  }
  .swiper-slide {
    transition: opacity 0.2s ease-in-out;
  }
  .selectedItem {
    opacity: 0.7;
  }
  .box {
    background-color: #0b0b0b;
    width: 80px;
    height: 80px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    .icon {
      fill: var(--main-color) !important;
      svg {
        width: 35px;
        height: 35px;
        font-size: 4px;
        path {
          fill: var(--main-color) !important;
        }
      }
    }
    span {
      color: #fff;
      font-size: 12px;
    }
  }
`;

export const DivSelectedItem = styled.div`
  width: 100%;
  /* background-color: #fff; */
  border-top: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  padding-top: 8px;
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
  }

  .selectedPlace {
    width: 130px;
    height: 45px;
    display: grid;
    background-color: #000;
    place-items: center;
    border-radius: 8px;
    color: #fff;
    .placeHolder {
      color: #c4c4c4;
    }
  }
`;

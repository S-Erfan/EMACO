import styled from "styled-components";

export const MyMenuSide = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background: transparent;
  color: #fff;
  .logo_containe {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin-top: 3rem;
    margin-bottom: 5rem;
    span {
      line-height: normal;
      font-size: var(--title-f);
      font-family: Arial, Helvetica, sans-serif !important;
    }
    img {
      width: 45px;
      height: 45px;
      object-fit: cover;
      background-color: yellow;
    }
  }

  ul {
    width: 100;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 2rem;
    padding: 0 !important;
    li {
      /* width: 100%; */
      font-size: var(--list-f);
      display: flex;
      flex-direction: row-reverse;
      justify-content: flex-start;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      svg {
        font-size: 16px;
        path {
          fill: var(--bg-dark);
          stroke: var(--main-color);
        }
      }

      .userIcon_custom{
        path {
          fill: var(--main-color);
          stroke: var(--main-color);
        }
      }

      .historyIcon_custom{
        path {
          fill: var(--main-color);
        }
      }

    }
  }
`;

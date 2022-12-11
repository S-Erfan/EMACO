import styled from "styled-components";

export const BoxPlaceSelected = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    background:${props => props.active ? "var(--main-color-glass)" : "#000a"};
    transition: all .3s linear;
    padding: 6px;
    svg{
        width: 100%;
        height: 40px;
        background-color: var(--main-color);
        border-radius: 8px;
        padding: 2px ;
    }
    span{
        font-size: 10px;
    }
`;
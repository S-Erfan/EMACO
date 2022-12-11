import styled from "styled-components";

export const InputCusMain = styled.input`
    width: 100%;
    height: ${props => props.height ? props.height : "100%" } ;
    border: none;
    border-radius: 8px;
    background-color: var(--bg-darkGray);
    color: var(--white-color);
    font-size: var(--form-text);
    padding: 12px 8px;
    text-align: center;
    outline: none;
`;
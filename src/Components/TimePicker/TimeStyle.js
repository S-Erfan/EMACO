import styled from "styled-components";

export const ContainerTimer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 5px;
    .nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--white-color);
        font-size: var(--form-text);
        .first_{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .icons_btn{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            svg{
                font-size: 20px;
                color: var(--main-color);
                width: 20px;
                height: 20px;
            }
        }
    }
    .times_holder{
        width: 100%;
        display: flex;
        justify-content: space-between;
        .start, .end {
            width: 45%;
            height: 50px;
            border: 1px solid var(--main-color);
            color: var(--main-color);
            font-size: 25px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px;
            border-radius: 8px;
            position: relative;
            span{
                width: 100%;
                height: 100%;
                text-align: center;
            }
        } 
        .start::after{
            content: "از";
            position: absolute;
            top: 0;
            right: 5px;
            color: var(--white-color);
            font-size: var(--form-text);
            transform: translateY(-130%);
        }

        .end::after{
            content: "تا";
            position: absolute;
            top: 0;
            right: 5px;
            color: var(--white-color);
            font-size: var(--form-text);
            transform: translateY(-130%);
        }
    }
`;

export const BTNselecte = styled.div`
    width: 60px;
    height: 30px;
    border-radius: 8px;
    background-color: var(--main-color);
    position: relative;
    overflow: hidden;
    p{
        width: 400px;
        display: block;
        width: fit-content;
        position: absolute;
        width: fit-content;
        display: none;
    }
`;  
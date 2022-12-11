import styled from "styled-components";

export const MainRegister = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 3;
    display: grid;
    place-items: center;
    .box{
        width: 80%;
        max-width: 650px;
        height: 450px;
        background-color: var(--bg-dark);
        border-radius: 10px;
        box-shadow: 0 4px 18px #0009;
        color: #fff;
        padding: 2rem ;
    }
    .title{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
            font-size: 16px;
        }
        .co_name{
            font-size: 20px;
            color: var(--main-color);
            font-weight: 700;
        }
        img{
            width: 50px;
            height: 50px;
        }
    }
    .form{
        margin-top: 2rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .btnHandler{
        margin-top: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        button{
            padding: .7rem 2rem !important;
        }
    }
`;
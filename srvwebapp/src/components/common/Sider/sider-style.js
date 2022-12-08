import styled from "styled-components";


export const SiderWrapper= styled.div`

    background-color: rgb(99, 62, 165)  ;
    width: 150px;
    height: 100vh;
    color: black;

    a{
        color: black;
        text-decoration: none;
    }

    .sider-content{
        font-size: 19px;
        text-align: center;
        padding: 16px;

        &:hover{
            cursor: pointer;
            transition-duration: 0.5s;
        }
    }
`;
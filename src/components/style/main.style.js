import Main from "../Main";
import styled from "styled-components";

export const MainStyled = styled(Main)`
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    & .on__small__screen{
        display: none;
        @media screen and (max-width:908px){
            display: block;
            font-weight: bold;
        }

    }
    & table thead{
        @media screen and (max-width:908px){
            display: none;
        }
    }
    & table td{
        padding: 1rem;
    }
    & table tr{
        @media screen and (max-width:908px){
            display: flex;
            flex-direction: column;
        }
    }
    
`
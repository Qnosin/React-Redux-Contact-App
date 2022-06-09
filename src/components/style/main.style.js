import Main from "../Main";
import styled from "styled-components";

export const MainStyled = styled(Main)`
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
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
    & table .delete{
        background-color: red;
        border: none;
        padding: 1.2rem;
    }
    & table  .edit{
        background-color: lightblue;
        border: none;
        padding: 1.2rem;
        color: black;
    }
    & .profile-pic{
        @media screen and (min-width:908px){
            max-width: 20%;
            display: block;
        }
        display: none;
    }
    
`
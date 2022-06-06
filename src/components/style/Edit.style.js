import UpdateFormPage from "../UpdateFormPage";
import styled from "styled-components";

export const EditStyled = styled(UpdateFormPage)`
    width: 50%;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    & form{
        display:flex;
        flex-direction: column;
        text-align: center;
    }
    & form input{
        padding: .5rem;
        margin-bottom: 1rem;
    }

`
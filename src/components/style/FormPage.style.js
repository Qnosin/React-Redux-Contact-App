import FormPage from "../FormPage";
import styled from "styled-components";

export const FormPageStyled = styled(FormPage)`
width: 50%;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
min-height: 60vh;
& form{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-top: 2rem;
}
& form input{
    padding: .2rem;
}
.Submit__btn{
    margin-top: 1rem;
}
`
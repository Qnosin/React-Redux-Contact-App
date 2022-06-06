import HeaderComp from '../Header';
import styled from 'styled-components';

export const HeaderStyled = styled(HeaderComp)`
        width: 100%;
        min-height: 10vh;
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        & h1{
                font-size: 2rem;
                border-bottom: 5px solid white;
        }
`;
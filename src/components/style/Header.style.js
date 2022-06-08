import HeaderComp from '../Header';
import styled from 'styled-components';

export const HeaderStyled = styled(HeaderComp)`
        width: 100%;
        min-height: 10vh;
        background-color: black;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        & h1{
                font-size: 2rem;
                border-bottom: 5px solid white;
                @media screen and (min-width: 909px) {
                        margin-left: 1rem;
                }
        }
        @media screen and (min-width: 909px) {
                        justify-content: left;
        }
        
`;
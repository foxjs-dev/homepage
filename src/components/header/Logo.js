import React from "react";
import styled from "@emotion/styled"

export const Logo = () => (
    <Wrapper>
        <Fox>fox</Fox>
        <Js>js</Js>
        <Dev>.dev</Dev>
    </Wrapper>    
);

const Wrapper = styled("h3")`
    display: flex;
    padding: 20px 10px;
    margin: 0 0 0 40px;
`;

const Fox = styled("span")`
    font-size: 24px;
    color: #ffab00;
    letter-spacing: 3px;
    font-weight: bold;
`
const Dev = styled("span")`
    font-size: 24px;
    color: #263238;
`
const Js = styled("span")`
    
    font-size: 24px;
    color: #607d8b;
    text-transform: uppercase;
    
`
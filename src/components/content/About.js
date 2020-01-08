import React from "react";
import styled from "@emotion/styled";

const About = () => (
    <Wrapper>
        <Title>Hello, there!</Title>
        <Welcome>
            I'm Piotr and I'm a Senior Frontend Developer at Egnyte.
        </Welcome>
    </Wrapper>
);

export default About;

const Wrapper = styled("div")`
    display: flex;
    flex: 1 1 auto;
    flex-flow: column nowrap;
    justify-content: center;
    padding-left: 20%;
    text-align: left;
`;

const Title = styled("h4")`
    font-size: 32px;
    color: #eceff1;
    padding: 10px 0;
    margin: 0;
`
const Welcome = styled("p")`
    font-size: 16px;
    color: #eceff1;
`
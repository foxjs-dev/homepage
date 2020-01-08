import React from "react";
import styled from "@emotion/styled";

const Box = () => (
    <Wrapper>
        <Message>
            Make it simple but
        </Message>
        <Strong>significant.</Strong>
    </Wrapper>
);

export default Box;

const Wrapper = styled("div")`
    display: flex;
    flex: 1 1 auto;
    flex-flow: column nowrap;
    justify-content: center;
    width: 35vw;
    height: 45vh;
    padding: 30px;
    margin: 0;
    border-radius: 3px;
    position: absolute;
    z-index: 1;
    top: calc(50% - 25vh);
    bottom: 0;
    left: 50px;
    box-shadow: -1px 2px 20px 0px #dbe5ea;
    background: #fff;
`;

const Message = styled("span")`
    font-size: 56px;
    color: #263238;
`
const Strong = styled("strong")`
    font-size: 56px;
    color: #263238;
    font-weight: bold;
    text-transform: uppercase;
    text-shadow: 8px 8px 3px #dbe5ea;
`
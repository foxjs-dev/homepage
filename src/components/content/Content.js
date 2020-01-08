import React from "react";
import styled from "@emotion/styled";



import { THEME } from "../../utils";
import Box from "./Box";
import About from "./About";


const Content = () => (
    <Wrapper>
        <Container color={THEME.LIGHT.primary} small>
            <Box />
        </Container>
        <Container color={THEME.DARK.primary}>
            <About />
        </Container>
    </Wrapper>
);

export default Content;

const Wrapper = styled("div")`
    display: flex;
    flex-flow: row nowrap;
    flex: 1 1 auto;
`;

const Container = styled("div")(({ color, small }) => ({
    display: "flex",
    flex: small ? "1" : "2",
    flexFlow: "row nowrap",
    backgroundColor: color,
    height: "100vh",
    position: "relative",
}));

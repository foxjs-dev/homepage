import React from "react";
import styled from "@emotion/styled"

import { Logo } from "./Logo";

const Header = () => (
    <Wrapper>
        <Logo />
    </Wrapper>
);

export default Header;

const Wrapper = styled("div")`
    position: fixed;
    z-index: 1;
    display: flex;
    flex-flow: column nowrap;
    flex: 1 1 auto;
    background: transparent;
`;

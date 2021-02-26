// import { Link as RouterLink } from "react-router-dom";
import { Link as UnstyledLink, Toolbar as UnstyledToolbar } from "@material-ui/core";
// import Toolbar as UnstyledToolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import { spacing, palette } from "@material-ui/system";

export const LogoLink = styled(UnstyledLink)`
  display: flex;
  align-items: center;
`;

export const Toolbar = styled(UnstyledToolbar)`
  display: flex;
  justify-content: space-between;
`;

export const SpacedLink = styled(UnstyledLink)`
  /* &:not(:last-of-type) {
    color: red;
  } */
  ${spacing}
`;

import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
import BooksLogo from "../BooksLogo";
import Box from "@material-ui/core/Box";
import * as S from "../styled/styles";

import MuiButton from "@material-ui/core/Button";

const Header = () => {
  return (
    <>
      <AppBar position="fixed">
        <S.Toolbar>
          <S.LogoLink component={RouterLink} to="/" color="inherit">
            <BooksLogo fontSize="large" />
            <Box ml={1}>
              <Typography variant="h6" color="inherit" noWrap>
                My Library
              </Typography>
            </Box>
          </S.LogoLink>
          <Box display="flex">
            <S.SpacedLink component={RouterLink} to="/" color="inherit" mr={2}>
              Search for a Book
            </S.SpacedLink>
            <Link component={RouterLink} to="/" color="inherit">
              Search for a Book
            </Link>
          </Box>
        </S.Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;

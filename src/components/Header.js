import React from "react";
import {
  Grid, AppBar, CssBaseline, Toolbar, Typography,
} from "@material-ui/core";

const Header = () => (
  <>
    <header data-testid="header">
      <CssBaseline />
      <AppBar position="static" elevation={0} className="MuiAppBar-root">
        <Toolbar className="">
          <Grid container justify="space-between" alignItems="center">
            <Typography variant="h4">Store</Typography>
            <Typography variant="h6">Shopping Cart</Typography>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  </>
);

export default Header;

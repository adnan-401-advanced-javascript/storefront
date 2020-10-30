import PropTypes from "prop-types";
import React from "react";
import {
  Grid, AppBar, CssBaseline, Toolbar, Typography,
} from "@material-ui/core";

const Header = (props) => {
  const { cartCounter } = props;
  return (
    <>
      <header data-testid="header">
        <CssBaseline />
        <AppBar position="static" elevation={0} className="MuiAppBar-root">
          <Toolbar className="">
            <Grid container justify="space-between" alignItems="center">
              <Typography variant="h4">Store</Typography>
              <Typography variant="h6">
                {`Cart ${cartCounter}`}
              </Typography>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
    </>
  );
};

Header.propTypes = {
  cartCounter: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default Header;

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Grid, AppBar, CssBaseline, Toolbar, Button,
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
              <Button
                to="/"
                component={Link}
              >
                Store
              </Button>
              <Button
                to="/checkout"
                component={Link}
              >
                {`Cart ${cartCounter}`}
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </header>
    </>
  );
};

Header.propTypes = {
  cartCounter: PropTypes.number.isRequired,
};

const mapStateToProps = (store) => ({
  cartCounter: store.cart.items ? store.cart.items.length : 0,
});

export default connect(mapStateToProps, null)(Header);

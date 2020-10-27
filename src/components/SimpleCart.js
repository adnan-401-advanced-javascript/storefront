import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  IconButton, Grid, List, ListItem, ListItemText,
} from "@material-ui/core";

import HighlightOffIcon from "@material-ui/icons/HighlightOff";

import { makeStyles } from "@material-ui/core/styles";
import { removeFromCartAction } from "../redux/actions";

const useStyles = makeStyles(() => ({
  "@global": {
    ul: {
      background: "#f5f5f5",
      border: "1px solid #f5f5f5",
      listStyleType: "none",
      margin: 0,
      padding: "1rem",
    },
  },
  simpleCart: {
    fontSize: "1.25rem",
    position: "fixed",
    top: "4.5rem",
    right: "1rem",
    width: "200px",
  },
}));

const SimpleCart = (props) => {
  const { cart } = props;
  const classes = useStyles();

  const removeHandler = (item) => {
    props.removeFromCart(item);
  };

  return (
    <Grid className={classes.simpleCart} item xs={4}>
      <Grid container justify="flex-end">

        <List>
          {cart.map((item) => (
            <ListItem key={item.name}>
              <ListItemText primary={item.name} />
              <IconButton onClick={() => removeHandler(item)}>
                <HighlightOffIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

SimpleCart.propTypes = {
  cart: PropTypes.oneOfType([PropTypes.array]).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  cart: store.cart.items,
});

const mapDispatchToProps = { removeFromCart: removeFromCartAction };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);

import React from "react";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  ul1: {
    background: "#fff",
    border: "none",
    listStyleType: "none",
    margin: 0,
    padding: "1rem",
  },
  li1: {
    border: "none!important",
  },
  listHeader: {
    padding: "20px 0px 0 20px",
  },
}));

const CheckoutList = (props) => {
  const { cart } = props;

  const classes = useStyles();

  let total = 0;
  const list = [];
  cart.forEach((product) => {
    total += product.price;
    list.push(
      <ListItem className={classes.li1} key={product._id}>
        {/* secondary={product.description} */}
        <ListItemText primary={product.name} />
        <Typography variant="body2">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(product.price)}
          {" "}
          x
          {" "}
          {product.quantity}
          {" "}
          =
          {" "}
          {" "}
          <strong>
            {" "}
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price * product.quantity)}
          </strong>
        </Typography>
      </ListItem>,
    );
  });

  return (
    <>
      <Typography className={classes.listHeader} variant="h6" align="left" gutterBottom>
        Order summary
      </Typography>
      <List className={classes.ul1}>
        {list}
        <ListItem className={classes.li1}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1">
            <strong>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(total)}
            </strong>
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

CheckoutList.propTypes = {
  cart: PropTypes.oneOfType([PropTypes.array]).isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.cart.items,
});

export default connect(mapStateToProps)(CheckoutList);

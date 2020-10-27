import PropTypes from "prop-types";

import React from "react";

import { connect } from "react-redux";

import {
  Box, CardMedia, Container, Grid, Card, CardContent, CardActions, Button, Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { addToCartAction } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  fullHeight: {
    height: "100%",
  },
  card: {
    margin: "1em",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  },
  jss8: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flexWrap: "initial",
  },
  jss5: {
    padding: "64px 0px 48px",
  },
  jss7: {
    paddingTop: "64px",
    paddingBottom: "64px",
  },
}));

const Products = ({ products, addToCart }) => {
  const addToCartButton = (product) => {
    addToCart(product);
  };

  const classes = useStyles();

  return (
    <Container maxWidth="md" component="main">
      <Box className={classes.jss5} textAlign="center">
        <Typography variant="h2" color="textPrimary">
          {products.length > 0 ? products[0].category.toUpperCase() : ""}
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {products.length > 0 ? "Category Description Goes Here" : ""}
        </Typography>
      </Box>
      <Grid className={classes.jss7} container spacing={0} direction="row" justify="center" alignItems="center">
        {products.map((product) => (

          <Grid key={product.name} className={classes.jss8} container item xs={12} sm={6} lg={4}>

            <Card className={classes.card}>

              <CardMedia
                className={classes.media}
                image={product.image}
                title={product.name}
              />
              <CardContent>
                <Typography variant="h5" color="textPrimary">
                  {product.name}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  {product.description}
                </Typography>
                <Typography variant="h6" color="textSecondary">
                  {`inventoryCount ${product.inventoryCount}`}
                </Typography>
              </CardContent>
              <CardActions>
                <Button style={{ fontSize: "0.8125rem" }} onClick={() => addToCartButton(product)}>Add to Cart</Button>
              </CardActions>
            </Card>

          </Grid>
        ))}

      </Grid>
    </Container>
  );
};

Products.propTypes = {
  products: PropTypes.oneOfType([PropTypes.array]).isRequired,
  addToCart: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  products: store.products.products,
});

const mapDispatchToProps = { addToCart: addToCartAction };

export default connect(mapStateToProps, mapDispatchToProps)(Products);

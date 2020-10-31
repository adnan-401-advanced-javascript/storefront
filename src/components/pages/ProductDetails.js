import React, { useEffect } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

import {
  getOneProductAction,
  addToCartAction,
} from "../../redux/actions";

const useStyles = makeStyles(() => ({
  imgStyle: {
    width: "100%",
    padding: "20px 15px 0 15px",
  },
  rightAlign: {
    textAlign: "right",
  },
  addBtn: {
    margin: "20px 0 30px 0",
  },
  container: {
    padding: "20px 0 50px 0",
  },
  margin: {
    margin: "30px 0 10px 0",
  },
}));

const ProductDetails = (props) => {
  const {
    getOneProduct,
    addToCart,
    currentProduct,
  } = props;

  const { match: { params: { id } } } = props;

  const classes = useStyles();

  useEffect(() => {
    getOneProduct(id);
  }, [getOneProduct, id]);

  return (
    <Container maxWidth="sm" className={classes.container}>
      <Typography variant="h3" align="center" gutterBottom>
        {currentProduct.name}
      </Typography>
      <Typography
        align="center"
        color="textSecondary"
        component="div"
        gutterBottom
      >
        {currentProduct.description}
      </Typography>

      <Card className="card">
        <img src={currentProduct.image} alt="img" className={classes.imgStyle} />
        <CardContent justify="space-between">
          <Grid container>
            <Grid item xs={6}>
              <Typography align="left" color="textSecondary" component="span">
                In Stock:
                {" "}
                {currentProduct.inventoryCount}
              </Typography>
            </Grid>
            <Grid xs={6} item className={classes.rightAlign}>
              <Typography align="right" color="textSecondary" component="span">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(currentProduct.price)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        className={classes.addBtn}
        onClick={() => {
          addToCart(currentProduct);
        }}
        disabled={!currentProduct.inventoryCount}
      >
        Add To Cart
      </Button>

      <Grid container>
        <Grid className={classes.margin} item xs={12}>
          <Typography variant="h5">Related Items</Typography>
        </Grid>
        <Grid item xs={4} className="suggestions">
          <Card>
            <CardContent>
              <Typography variant="body2" display="inline" align="center">
                Suggestion
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" display="inline" align="center">
                Suggestion
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography variant="body2" display="inline" align="center">
                Suggestion
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid className={classes.margin} item xs={12}>
          <Typography variant="h5">Product Details</Typography>
        </Grid>
        <Grid item xs={12}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Specifications</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This product has all the specs...dont even worry about it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>User Reviews</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This product was so great! You should buy it.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </Container>
  );
};

ProductDetails.propTypes = {
  getOneProduct: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  currentProduct: PropTypes.oneOfType([PropTypes.object]).isRequired,
  match: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => ({
  currentProduct: state.products.currentProduct,
});

const mapDispatchToProps = {
  getOneProduct: getOneProductAction,
  addToCart: addToCartAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);

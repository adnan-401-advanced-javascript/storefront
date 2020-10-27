import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import { Box, ButtonGroup, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { changeActiveCategoryAction } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  browseCategories: {
    padding: 4,
    margin: 4,
  },
}));

const Categories = ({ categories, changeActiveCategory }) => {
  const classes = useStyles();

  return (
    <>
      <Box>
        <h2 className={classes.browseCategories}>Browse our Categories</h2>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          {categories.map((category) => (
            <Button key={category.name} onClick={() => changeActiveCategory(category.name)}>
              {category.displayName}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.oneOfType([PropTypes.array]).isRequired,
  changeActiveCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  categories: store.categories.categories,
});

const mapDispatchToProps = { changeActiveCategory: changeActiveCategoryAction };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);

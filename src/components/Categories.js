import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Box, ButtonGroup, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { changeActiveCategoryAction } from "../redux/actions";

const useStyles = (theme) => ({
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
});

const Categories = (props) => {
  const { classes, categories, changeActiveCategory } = props;

  return (
    <>
      <Box>
        <h2 className={classes.browseCategories}>Browse our Categories</h2>
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          {categories.map((category) => (
            <Button key={category.name} onClick={() => changeActiveCategory(category.name)}>
              {category.display_name}
            </Button>
          ))}
        </ButtonGroup>
      </Box>
    </>
  );
};

Categories.propTypes = {
  categories: PropTypes.oneOfType([PropTypes.array]).isRequired,
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  changeActiveCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (store) => ({
  categories: store.categories.categories,
});

const mapDispatchToProps = { changeActiveCategory: changeActiveCategoryAction };

const styledComponent = withStyles(useStyles)(Categories);
export default connect(mapStateToProps, mapDispatchToProps)(styledComponent);

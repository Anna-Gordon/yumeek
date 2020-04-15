import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

const useStyles = makeStyles(() => ({
  root: {
        width: "4 em"
  },
  style: { fontSize: 40 }
})
);

const checkIfRecipeInTheList = function(savedRecipes, src) {
console.log("!!!!", savedRecipes, src)
  const found = savedRecipes.filter(item => item.recipe.src_url === src )
  return found
}

export default function SaveRecipeButton(props) {
  const {recipe, savedRecipes, handleAdd } = props;
  console.log("SAVEBUTTON", props)
  const classes = useStyles();
  const savedRecipe = checkIfRecipeInTheList(savedRecipes, recipe.recipe.src_url);

  return(
      <>
      { savedRecipe.length > 0 ? (
          <Button variant="contained" size="medium" color="primary" >
            Delete From List
          </Button>
        ) : (
          <Button color="secondary" component="div" className={classes.root} onClick={() => handleAdd(recipe)}> 
            <CalendarTodayOutlinedIcon className={classes.style}/>
              Save to My List
          </Button>
        )
      }
      </>
  );
}


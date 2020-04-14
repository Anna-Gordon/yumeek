import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: "23%",
    margin: "1%",
  },
  media: {
    height: 200,
  },
});

export default function RecipesCard(props) {
  const { recipe, handleAdd, clickRecipe } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() =>
          clickRecipe({ ...recipe.recipe, ...recipe.nutrients, weekday: null })
        }
      >
        <CardMedia
          className={classes.media}
          image={recipe.recipe.img_url}
          title={recipe.recipe.label}
        />
        <CardContent>
          <Typography>{recipe.recipe.label}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleAdd(recipe)}>
          Add
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            clickRecipe({
              ...recipe.recipe,
              ...recipe.nutrients,
              weekday: null,
            });
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

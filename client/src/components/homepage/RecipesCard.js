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
    width: "18%",
    margin: "1%",
  },
  media: {
    height: 200,
  },
  label: {
    height: 48,
  },
  cardRoot: {
    padding: "8px 16px 0 16px",
    overflow: "auto",
  },
  cardActionArea: {
    padding: 0,
    display: "flex",
    justifyContent: "space-evenly",
  },
});

export default function RecipesCard(props) {
  const { recipe, handleAdd, clickRecipe } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea
        onClick={() => {
          clickRecipe(recipe);
        }}
      >
        <CardMedia
          className={classes.media}
          image={recipe.img_url}
          title={recipe.label}
        />
        <CardContent className={classes.cardRoot}>
          <Typography className={classes.label}>{recipe.label}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardActionArea}>
        <Button size="small" color="primary" onClick={() => handleAdd(recipe)}>
          Add
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            clickRecipe(recipe);
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

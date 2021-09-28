import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";

import { deleteRecipe, getRecipes } from "../../services/api/recipe";

const useStyles = makeStyles({
  root: {
    marginBottom: 30,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Recipe = (props) => {
  const [recipes, setRecipes] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    await getRecipes({}, (response) => {
      setRecipes(response.recipes);
    });
  };

  const delRecipe = async (id) => {
    await deleteRecipe({}, id, (response) => {
      let _recipes = recipes.filter((recipe) => recipe._id != id);
      setRecipes(_recipes);
    });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.history.push(`/recipe/create/new`)}
      >
        Create Recipe
      </Button>
      <Typography>Recipes List</Typography>
      {recipes &&
        recipes.map((recipe) => (
          <Card className={classes.root}>
            <CardContent>
              <Typography>
                <b>Name </b>
                {recipe.name}
              </Typography>
              <Typography>
                <b>Description </b>
                {recipe.description}
              </Typography>
              <Typography>
                <b>Prep Time </b>
                {recipe.prep_time_minutes || "unknown"}
              </Typography>
              <Typography>
                <b>Cook Time </b>
                {recipe.cook_time_minutes || "unknown"}
              </Typography>
              <Button
                variant="contained"
                onClick={() => props.history.push(`/recipe/edit/${recipe._id}`)}
              >
                <p>Update</p>
              </Button>
              <Button variant="contained" onClick={() => delRecipe(recipe._id)}>
                <p>Delete</p>
              </Button>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default Recipe;

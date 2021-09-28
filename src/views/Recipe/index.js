import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";

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
  const [paginatedRecipes, setPaginatedRecipes] = useState([]);
  const [page, setPage] = useState(1);

  const classes = useStyles();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    await getRecipes({}, (response) => {
      setRecipes(response.recipes);
      setPaginatedRecipes(response.recipes.slice(page * 10, (page + 1) * 10));
    });
  };

  const delRecipe = async (id) => {
    await deleteRecipe({}, id, (response) => {
      let _recipes = recipes.filter((recipe) => recipe._id != id);
      setRecipes(_recipes);
    });
  };

  const paginateRecipes = (val) => {
    setPage(val);
    let _recipes = recipes.slice((val - 1) * 10, val * 10);
    setPaginatedRecipes(_recipes);
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
      {paginatedRecipes && (
        <Pagination
          count={
            recipes.length % 10 === 0
              ? recipes.length / 10
              : recipes.length / 10 + 1
          }
          page={page}
          onChange={(event, val) => paginateRecipes(val)}
        />
      )}

      {paginatedRecipes &&
        paginatedRecipes.map((recipe) => (
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

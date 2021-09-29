import React, { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardContent,
  makeStyles,
  Input,
} from "@material-ui/core";
import { Pagination, Rating } from "@material-ui/lab";

import { deleteRecipe, getRecipes } from "../../services/api/recipe";
import { createReview } from "../../services/api/review";

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

  const [message, setMessage] = useState("");
  const [reviewForm, setReviewForm] = useState(false);
  const [rating, setRating] = useState(5);

  const classes = useStyles();

  useEffect(() => {
    fetchRecipes();
  }, [reviewForm]);

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

  const addReview = async (id) => {
    await createReview({ message, rating }, id, (response) => {
      setReviewForm(false);
      setMessage("");
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
      {paginatedRecipes && (
        <Pagination
          count={
            recipes.length % 10 === 0
              ? recipes.length / 10
              : Math.floor(recipes.length / 10) + 1
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
              {reviewForm == recipe._id && (
                <div>
                  <Input
                    type="text"
                    name="message"
                    value={message}
                    required
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                      setRating(newValue);
                    }}
                  />
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => addReview(recipe._id)}
                  >
                    <Typography>Save Review</Typography>
                  </Button>
                  <br />
                </div>
              )}
              <Button
                variant="contained"
                onClick={() => props.history.push(`/recipe/edit/${recipe._id}`)}
              >
                <Typography>Update</Typography>
              </Button>
              <Button variant="contained" onClick={() => delRecipe(recipe._id)}>
                <Typography>Delete</Typography>
              </Button>
              <Button
                variant="contained"
                onClick={() => setReviewForm(recipe._id)}
              >
                <Typography>Review</Typography>
              </Button>
              <Typography>
                <b>Reviews</b>
              </Typography>
              {recipe.reviews?.map((review) => (
                <div>
                  <Typography>{review.message}</Typography>
                  <Rating name="read-only" value={review.rating} readOnly />
                  <Typography>{review.user.email}</Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default Recipe;

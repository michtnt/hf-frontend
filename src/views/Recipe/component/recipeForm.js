import React, { useEffect, useState } from "react";
import { Input, Typography, Button } from "@material-ui/core";

import {
  getRecipe,
  updateRecipe,
  createRecipe,
} from "../../../services/api/recipe";

const RecipeForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [preptime, setPrepTime] = useState("");
  const [cooktime, setCookTime] = useState("");

  const { id, type } = props.match.params;

  useEffect(() => {
    if (id && type == "edit") {
      // update
      fetchRecipe(id);
    }
  }, []);

  const fetchRecipe = async (id) => {
    await getRecipe({}, id, (response) => {
      setName(response.recipe.name);
      setDescription(response.recipe.description);
      setPrepTime(response.recipe.prep_time_minutes);
      setCookTime(response.recipe.cook_time_minutes);
    });
  };

  const addRecipe = async () => {
    let newRecipe = {
      name,
      description,
      prep_time_minutes: preptime,
      cook_time_minutes: cooktime,
    };
    await createRecipe(newRecipe, () => {
      props.history.push("/recipe");
    });
  };

  const updRecipe = async () => {
    let updateObj = {
      name,
      description,
      prep_time_minutes: preptime,
      cook_time_minutes: cooktime,
    };

    await updateRecipe(updateObj, id, () => {
      props.history.push("/recipe");
    });
  };

  return (
    <div>
      <Typography>Name</Typography>
      <Input
        type="text"
        value={name}
        required
        onChange={(e) => setName(e.target.value)}
      />
      <Typography>Description</Typography>
      <Input
        type="text"
        value={description}
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <Typography>Prep Time</Typography>
      <Input
        type="text"
        value={preptime}
        onChange={(e) => setPrepTime(e.target.value)}
      />
      <Typography>Cook Time</Typography>

      <Input
        type="text"
        value={cooktime}
        onChange={(e) => setCookTime(e.target.value)}
      />
      <br />
      {type == "edit" ? (
        <Button onClick={updRecipe} variant="contained" color="secondary">
          <Typography>Update</Typography>
        </Button>
      ) : type == "create" ? (
        <Button onClick={addRecipe} variant="contained" color="secondary">
          <Typography>Create</Typography>
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default RecipeForm;

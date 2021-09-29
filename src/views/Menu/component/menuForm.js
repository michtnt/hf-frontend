import React, { useEffect, useState } from "react";
import {
  Input,
  Typography,
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { getMenu, updateMenu, createMenu } from "../../../services/api/menu";
import { getRecipes } from "../../../services/api/recipe";

const MenuForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [recipes, setRecipes] = useState([]);
  const [availableRecipes, setAvailableRecipes] = useState([]);
  const [recipe, setRecipe] = useState("");
  const { id, type } = props.match.params;

  useEffect(() => {
    if (id && type == "edit") {
      // update
      fetchMenu(id);
    } else {
      // create, fetch all recipes
      fetchRecipes();
    }
  }, []);

  const fetchMenu = async (id) => {
    await getMenu({}, id, (response) => {
      setRecipes(response.menu.recipes);
      setName(response.menu.name);
      setDescription(response.menu.description);
      // state is not set yet, use response directly
      // don't include those that is in already
      fetchRecipes(response.menu.recipes);
    });
  };

  const fetchRecipes = async (recipes = []) => {
    await getRecipes({}, (response) => {
      let _recipes = recipes.map((recipe) => recipe._id);
      let availableRecipe = response.recipes.filter(
        (recipe) => !_recipes.includes(recipe._id)
      );
      setAvailableRecipes(availableRecipe);
    });
  };

  const addMenu = async () => {
    let newMenu = {
      name,
      description,
      recipes,
    };
    await createMenu(newMenu, () => {
      props.history.push("/menu");
    });
  };

  const updMenu = async () => {
    let updateObj = {
      name,
      description,
      recipes,
    };

    await updateMenu(updateObj, id, () => {
      props.history.push("/menu");
    });
  };

  const removeRecipe = (recipeId) => {
    let _recipes = recipes.filter((recipe) => recipe._id !== recipeId);
    setRecipes(_recipes);
  };

  const addRecipe = () => {
    let _recipes = recipes;
    _recipes.push(recipe);
    setRecipes(_recipes);
    setRecipe("");
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
      {recipes && <Typography>List of recipes</Typography>}
      <FormControl style={{ width: 200 }}>
        <InputLabel>Recipe</InputLabel>
        <Select value={recipe} onChange={(e) => setRecipe(e.target.value)}>
          {availableRecipes.map((recipe) => (
            <MenuItem value={recipe}>{recipe.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {recipe && (
        <Button variant="contained" color="secondary" onClick={addRecipe}>
          Add Recipe
        </Button>
      )}
      {recipes?.map((recipe) => (
        <Card>
          <CardContent>
            <Typography>{recipe.name}</Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => removeRecipe(recipe._id)}
            >
              <Typography>Remove</Typography>
            </Button>
          </CardContent>
        </Card>
      ))}
      <br />
      {type == "edit" ? (
        <Button onClick={updMenu} variant="contained" color="secondary">
          <Typography>Update</Typography>
        </Button>
      ) : type == "create" ? (
        <Button onClick={addMenu} variant="contained" color="secondary">
          <Typography>Create</Typography>
        </Button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MenuForm;

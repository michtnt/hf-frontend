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

import { deleteMenu, getMenus, reviewMenu } from "../../services/api/menu";

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

const Menu = (props) => {
  const [menus, setMenus] = useState([]);
  const [paginatedMenus, setPaginatedMenus] = useState([]);
  const [page, setPage] = useState(1);

  const [message, setMessage] = useState("");
  const [reviewForm, setReviewForm] = useState(false);
  const [rating, setRating] = useState(5);

  const classes = useStyles();

  useEffect(() => {
    fetchMenus();
  }, [reviewForm]);

  const fetchMenus = async () => {
    await getMenus({}, (response) => {
      setMenus(response.menus);
      setPaginatedMenus(response.menus.slice((page - 1) * 10, page * 10));
    });
  };

  const delMenu = async (id) => {
    await deleteMenu({}, id, (response) => {
      let _menus = menus.filter((menu) => menu._id != id);
      setMenus(_menus);
      fetchMenus();
    });
  };

  const paginateMenus = (val) => {
    setPage(val);
    let _menus = menus.slice((val - 1) * 10, val * 10);
    setPaginatedMenus(_menus);
  };

  const addReview = async (id) => {
    await reviewMenu({ message, rating }, id, (response) => {
      setReviewForm(false);
      setMessage("");
    });
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.history.push(`/menu/create/new`)}
      >
        Create Menu
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={() => props.history.push(`/recipe`)}
      >
        Recipe
      </Button>
      <Typography>Menus List</Typography>
      {paginatedMenus && (
        <Pagination
          count={
            menus.length % 10 === 0
              ? menus.length / 10
              : Math.floor(menus.length / 10) + 1
          }
          page={page}
          onChange={(event, val) => paginateMenus(val)}
        />
      )}

      {paginatedMenus &&
        paginatedMenus.map((menu) => (
          <Card className={classes.root}>
            <CardContent>
              <Typography>
                <b>Name </b>
                {menu.name}
              </Typography>
              <Typography>
                <b>Description </b>
                {menu.description || "unknown"}
              </Typography>
              <Typography>
                <b>Recipes</b>
              </Typography>
              {menu.recipes?.map((recipe) => (
                <div>
                  <Typography>{recipe.name}</Typography>
                </div>
              ))}
              {reviewForm == menu._id && (
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
                    onClick={() => addReview(menu._id)}
                  >
                    <Typography>Save Review</Typography>
                  </Button>
                  <br />
                </div>
              )}
              <Button
                variant="contained"
                onClick={() => props.history.push(`/menu/edit/${menu._id}`)}
              >
                <Typography>Update</Typography>
              </Button>
              <Button variant="contained" onClick={() => delMenu(menu._id)}>
                <Typography>Delete</Typography>
              </Button>
              <Button
                variant="contained"
                onClick={() => setReviewForm(menu._id)}
              >
                <Typography>Review</Typography>
              </Button>
              <Typography>
                <b>Reviews</b>
              </Typography>
              {menu.reviews?.map((review) => (
                <div>
                  <Typography>{review.message}</Typography>
                  <Rating name="read-only" value={review.rating} readOnly />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
    </div>
  );
};

export default Menu;

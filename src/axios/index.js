import axios from "axios";
import { dispatch } from "../redux";
// const instanceAxios = axios.create({
//   baseUrl: "https://api.nytimes.com/svc/books/v3/lists/",
// });

const url = "https://api.nytimes.com/svc/books/v3/lists/";

export const categoryGetter = () => {
  console.log("getter");

  axios
    .get(
      `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=TYLmTpa2waLuB6GrnEL0yW7s5mPsXrN9`
    )
    .then((res) => {
      console.log(res.data.results);
      dispatch({
        type: "SET_CATEGORIES",
        payload: { data: res.data.results },
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const bookGetter = (cat) => {
  axios
    .get(
      `https://api.nytimes.com/svc/books/v3/lists/current/${cat}.json?api-key=0nG5do2caU59G7F2PT1eRQD0RAsaX5Du`
    )
    .then((res) => {
      console.log(res.data.results);
      res.data.results &&
        dispatch({
          type: "SET_BOOKS",
          payload: { data: res.data.results },
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

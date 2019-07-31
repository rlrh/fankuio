import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => {
  return async dispatch => {
    try {
      const res = await axios.get("/api/current_user");
      dispatch({ type: FETCH_USER, payload: res.data });
    } catch (error) {
      dispatch({ type: FETCH_USER });
    }
  };
};

export const handleToken = token => {
  return async dispatch => {
    try {
      const res = await axios.post("/api/stripe", token);
      dispatch({ type: FETCH_USER, payload: res.data });
    } catch (error) {
      dispatch({ type: FETCH_USER });
    }
  };
};

export const submitSurvey = (values, callback) => {
  return async dispatch => {
    try {
      const res = await axios.post("/api/surveys", values);
      callback();
      dispatch({ type: FETCH_USER, payload: res.data });
    } catch (error) {
      callback();
      dispatch({ type: FETCH_USER });
    }
  };
};

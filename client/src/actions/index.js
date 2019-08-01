import axios from "axios";
import { FETCH_USER, FETCH_SURVEYS } from "./types";

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
    const res = await axios.post("/api/surveys", values);
    callback();
    dispatch({ type: FETCH_USER, payload: res.data });
  };
};

export const fetchSurveys = () => {
  return async dispatch => {
    const res = await axios.get("/api/surveys");
    dispatch({ type: FETCH_SURVEYS, payload: res.data });
  };
};

import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from "./types";

export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
  payload: {}
});

export const getUserSuccess = () => ({
  type: GET_USER_SUCCESS,
  payload: {}
});

export const getUserFailure = () => ({
  type: GET_USER_FAILURE,
  payload: {}
});

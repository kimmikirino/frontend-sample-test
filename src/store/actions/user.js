import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_REPOS_REQUEST,
  GET_REPOS_SUCCESS,
  GET_REPOS_FAILURE,
  GET_COMMITS_REQUEST,
  GET_COMMITS_SUCCESS,
  GET_COMMITS_FAILURE
} from "./types";

import api from "../../services/api";

export const getUserRequest = user => {
  return dispatch => {
    dispatch({ type: GET_USER_REQUEST });

    api
      .get(`/users/${user}`)
      .then(res => {
        dispatch(getUserSuccess(res.data));
      })
      .catch(err => {
        dispatch(getUserFailure(err.message));
      });
  };
};

export const getUserSuccess = payload => {
  return { type: GET_USER_SUCCESS, payload };
};

export const getUserFailure = payload => {
  return { type: GET_USER_FAILURE, payload };
};

export const getReposRequest = userLogin => {
  return dispatch => {
    dispatch({ type: GET_REPOS_REQUEST });

    api
      .get(`/users/${userLogin}/repos`)
      .then(res => {
        dispatch(getReposSuccess(res.data));
      })
      .catch(err => {
        dispatch(getReposFailure(err.message));
      });
  };
};

export const getReposSuccess = payload => {
  return { type: GET_REPOS_SUCCESS, payload };
};

export const getReposFailure = payload => {
  return { type: GET_REPOS_FAILURE, payload };
};

export const getCommitsRequest = (repoName, repoId) => {
  return dispatch => {
    dispatch({ type: GET_COMMITS_REQUEST });

    api
      .get(`/repos/${repoId}/${repoName}/commits`)
      .then(res => {
        dispatch(getCommitsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getCommitsFailure(err.message));
      });
  };
};

export const getCommitsSuccess = payload => {
  return { type: GET_COMMITS_SUCCESS, payload };
};

export const getCommitsFailure = payload => {
  return { type: GET_COMMITS_FAILURE, payload };
};

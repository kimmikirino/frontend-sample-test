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
} from "../../actions/types";

const INITIAL_STATE = {
  isLoading: false,
  user: {},
  repos: {},
  commits: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
    case GET_REPOS_REQUEST:
    case GET_COMMITS_REQUEST:
      return { ...state };
    case GET_USER_SUCCESS:
      return { ...state, user: action.payload };
    case GET_REPOS_SUCCESS:
      return { ...state, repos: { ...action.payload } };
    case GET_COMMITS_SUCCESS:
      return { ...state, commits: { ...action.payload } };
    case GET_USER_FAILURE:
    case GET_REPOS_FAILURE:
    case GET_COMMITS_FAILURE:
      return { ...state };
    default:
      return { ...state };
  }
};

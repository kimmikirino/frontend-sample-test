import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from "../../actions/types";

const INITIAL_STATE = {
  user: {}
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { ...state };
    case GET_USER_SUCCESS:
      return { ...state };
    case GET_USER_FAILURE:
      return { ...state };
    default:
      return { ...state };
  }
}

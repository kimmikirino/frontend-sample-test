import { FETCH_REPOSITORIES } from '../actions/types';

const repositories = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REPOSITORIES:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

export default repositories;
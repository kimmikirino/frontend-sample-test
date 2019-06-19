import Github from '../api/Github';
import { FETCH_REPOSITORIES } from './types';

export const fetchRepositories = () => async (dispatch) => {
  const response = await Github.get('/users/ygorgs/repos');
  
  dispatch({ type: FETCH_REPOSITORIES, payload: response.data });
}


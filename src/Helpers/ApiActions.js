import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from '../Redux/Actions/Actions';
import { null_message } from '../constants';
import {URL} from './Api';

const FetchAPIData = () => {
  return async dispatch => {
    dispatch(fetchDataRequest());
    try {
      const response = await fetch(URL);
      const json = await response.json();

      if (json) {
        dispatch(fetchDataSuccess(json));
      } else {
        dispatch(fetchDataFailure(null_message));
      }
    } catch (error) {
      dispatch(fetchDataFailure(error.message));
    }
  };
};

export default FetchAPIData;

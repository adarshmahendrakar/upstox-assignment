// there are many ways to intigrate the API calls, as this is only one API call, I have intigrated in this way 
import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from '../Redux/Actions/Actions';
import { null_message } from '../constants';
import { URL } from './Api';

const FetchAPIData = () => {
  return dispatch => {
    dispatch(fetchDataRequest());
    fetch(URL)
      .then(response => {
        if (!response.ok) {
          throw new Error(null_message);
        }
        return response.json();
      })
      .then(json => {
        dispatch(fetchDataSuccess(json));
      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message || null_message));
      });
  };
};

export default FetchAPIData;

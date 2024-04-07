import {
  fetchDataFailure,
  fetchDataRequest,
  fetchDataSuccess,
} from '../Redux/Actions/Actions';
import {null_message} from '../constants';
import {URL} from './Api';

const FetchAPIData = () => {
  return dispatch => {
    dispatch(fetchDataRequest());
    fetch(URL)
      .then(response => {
        if (!response.ok) {
          // response.ok specifies response status is within the range of 200-299 - (it will check the HTTP Requast response)
          throw new Error(null_message);
        }
        return response.json();
      })
      .then(json => {
        if (json) {
          dispatch(fetchDataSuccess(json));
        }
      })
      .catch(error => {
        dispatch(fetchDataFailure(error.message || null_message));
      });
  };
};

export default FetchAPIData;

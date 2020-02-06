import axios from "../axiosApi";

export const VALUE_CHANGED = "VALUE_CHANGED";
export const ENCODE_MESSAGE = 'ENCODE_MESSAGE'; 
export const DECODE_MESSAGE = 'DECODE_MESSAGE';

export const valueChanged = event => ({type: VALUE_CHANGED, event});
export const encodeMessageSuccess = (response) => ({type: ENCODE_MESSAGE, response});
export const decodeMessageSuccess = (response) => ({type: DECODE_MESSAGE, response});

export const encodeMessage = (message, password) => {
  return async (dispatch) => {
    const response = await axios.post('/encode', {message, password})
    dispatch(encodeMessageSuccess(response.data.encoded));
  };
};

export const decodeMessage = (message, password) => {
  return async (dispatch) => {
    const response = await axios.post('/decode', {message, password})
    dispatch(decodeMessageSuccess(response.data.decoded));
  };
};


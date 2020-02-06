import { ENCODE_MESSAGE, DECODE_MESSAGE, VALUE_CHANGED } from "../store/actions";

const initialState = {
  message: '',
  encoded: '',
  password: '',
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case VALUE_CHANGED:
      return {...state, [action.event.target.name]: action.event.target.value};
    case ENCODE_MESSAGE:
      return {...state, encoded: action.response, password: '', message: ''};
    case DECODE_MESSAGE:
      return {...state, message: action.response, password: '', encoded: ''};
    default:
      return state;
  }
};

export default productsReducer;
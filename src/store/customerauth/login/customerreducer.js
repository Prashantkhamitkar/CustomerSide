import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionTypes";
const initialState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  token:null,
};
const customerreducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_SUCCESS:
      return { ...state, loading: false, isAuthenticated: true,token:action.payload };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGOUT:
      return { ...state, isAuthenticated: false,token:null };
    default:
      return state;
  }
};

export default customerreducer;
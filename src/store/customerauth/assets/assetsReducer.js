import { FETCH_ASSETS_FAILURE, FETCH_ASSETS_REQUEST, FETCH_ASSETS_SUCCESS } from "./actionType";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const assetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ASSETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ASSETS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_ASSETS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default assetsReducer;

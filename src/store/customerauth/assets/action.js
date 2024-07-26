import { FETCH_ASSETS_FAILURE, FETCH_ASSETS_REQUEST, FETCH_ASSETS_SUCCESS } from "./actionType";

export const fetchAssetsRequest = () => ({
  type: FETCH_ASSETS_REQUEST,
});

export const fetchAssetsSuccess = (data) => ({
  type: FETCH_ASSETS_SUCCESS,
  payload: data,
});

export const fetchAssetsFailure = (error) => ({
  type: FETCH_ASSETS_FAILURE,
  payload: error,
});

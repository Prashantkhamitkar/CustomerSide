import { call, put, takeLatest } from "redux-saga/effects";
import { fetchAssetsFailure, fetchAssetsSuccess } from "./action";
import { FETCH_ASSETS_REQUEST } from "./actionType";
import axios from "axios";



function* fetchAssetsSaga() {
  try {
    //pass the api axios into the call method parameter body 
    const data = yield call(axios.get,"https://jsonplaceholder.typicode.com/photos");
    yield put(fetchAssetsSuccess(data));
  } catch (error) {
    yield put(fetchAssetsFailure(error.message));
  }
}

export default function* watchFetchAssets() {
  yield takeLatest(FETCH_ASSETS_REQUEST, fetchAssetsSaga);
}

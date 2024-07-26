import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {  loginSuccess, loginFailure } from "./action";
import {LOGIN_REQUEST} from "./actionTypes"

function* loginSaga(action) {
  try {
    const response = yield call(
      axios.post,
      "https://dummyjson.com/auth/login",
      action.payload
    );
    
    yield put(loginSuccess(response));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* watchLoginSaga() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
}

export default watchLoginSaga;

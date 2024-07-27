import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import { persistReducer, persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig={
  key:"root",
  storage,
  
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
export function configureStore(initialState) {

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  const persistor=persistStore(store);
  return {store,persistor};
}


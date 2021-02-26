import { createStore } from "redux";

import rootReducer from "./rootReducer";

const saveToLocalStorage = (reduxGlobalState) => {
  //serialize = convert js object to string
  try {
    const serializeState = JSON.stringify(reduxGlobalState);
    localStorage.setItem("state", serializeState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromLocalStorage = () => {
  const serializedState = localStorage.getItem("state");

  if (serializedState === null) {
    return undefined;
  } else {
    return JSON.parse(serializedState);
  }
};

const persistedState = loadFromLocalStorage();

const store = createStore(
  rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;

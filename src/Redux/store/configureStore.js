import { combineReducers, createStore } from "redux";
import pageNumberReducer from "../reducers/pagesNumbers";
import currentReducer from "../reducers/currentStates";
const configureStore = () => {
  const store = createStore(
    combineReducers({
      pagesNumbers: pageNumberReducer,
      currentStates: currentReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};

export default configureStore;

import { combineReducers, createStore } from "redux";

export const UPDATE_ROUTE_NAME = "UPDATE_ROUTE_NAME";
const initialState = {
  routeName: ""
};

const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case UPDATE_ROUTE_NAME:
      return {
        ...state,
        routeName: action.name
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  app: appReducer
});

export default createStore(rootReducer);

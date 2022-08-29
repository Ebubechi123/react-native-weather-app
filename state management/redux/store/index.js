import { legacy_createStore,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducers } from "../reducers";

// let composeEhancers = compose;
var  middleware = applyMiddleware(thunk)


   const  composeEhancers =  window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

const Store =legacy_createStore(Reducers,composeEhancers(middleware))

 
export default Store;


// {},window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
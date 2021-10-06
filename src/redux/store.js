import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
//Moze biti kao sto je napisano u liniji ispod ali ako budemo prosirivali listu middleware-a onda nije prakticno
//const store = createStore(rootReducer, applyMiddleware(logger));
export default store;

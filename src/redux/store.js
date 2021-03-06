import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [];

if (process.env.NODE_ENV == "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
//Moze biti kao sto je napisano u liniji ispod ali ako budemo prosirivali listu middleware-a onda nije prakticno
//const store = createStore(rootReducer, applyMiddleware(logger));

export const persistor = persistStore(store);

export default { store, persistor };

import { UserActionTypes } from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  //state = INITIAL_STATE oznacava da ako state ne bude nista onda ce se postaviti na defaultnu vrednost koja je definisana u initial_state, a ako ima neku vrednost onda ce biti ta vrednost koja jeste
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

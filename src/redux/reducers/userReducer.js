import {
  LOGINERR,
  LOGIN,
  GETUSER,
  LOGOUT,
  GETUSERERR,
  ADD_USER,
  ADD_USER_ERR
} from "../actions/userActions";

var initialState = {
  isLoading: "nill",
  hasErrored: false,
  userStatus: false,
  LogoutDone: "notdone",
  user: {},
  getuserErr: "sadf",
  adressStatus: "not done",
  loader: new Date(),
  signUpStatus: "not done"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        userStatus: true,
        LogoutDone: "notdone",
        user: action.payload,
        isLoading: "move"
      };
    }

    case GETUSER: {
      console.log("re", action.payload)
      return {
        ...state,
        userStatus: true,
        LogoutDone: "notdone",
        user: action.payload,
        getuserErr: new Date(),

      };
    }

    case GETUSERERR: {
      return {
        ...state,
        getuserErr: new Date(),
        userStatus: false
      };
    }

    case LOGOUT: {
      return {
        ...state,
        isLoading: "ssadf",
        LogoutDone: "done",
        userStatus: false,
        user: {}
      };
    }
    case ADD_USER: {
      return {
        ...state,
        userStatus: true,
        LogoutDone: "notdone",
        user: action.payload,
        signUpStatus: "done"
      };
    }

    case ADD_USER_ERR: {
      return {
        ...state,
        signUpStatus: "error",
        loader: new Date(),
        userStatus: false
      };
    }

    case LOGINERR:
      return { ...state, hasErrored: action.payload, userStatus: false };
    case "ITEMS_FETCH_DATA_SUCCESS":
      return { ...state, items: action.items };
    default:
      return state;
  }
}

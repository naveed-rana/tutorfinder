import {
  ADD_POST,
  ADD_POST_ERR,
  SHOW_POST,
  SHOW_POST_ERR
} from "../actions/postAction";

var initialState = {
  allPosts: [],
  getAllPostStatus: "not done",
  addPostStatus: "not done",
  loader: "sof"
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_POST:
      return {
        addPostStatus: "done",
        loader: new Date()
      };
    case ADD_POST_ERR:
      return {
        addPostStatus: "error",
        loader: new Date()
      };
    case SHOW_POST:
      return {
        allPosts: action.payload,
        getAllPostStatus: "done",
        loader: new Date()
      };
    case SHOW_POST_ERR:
      return {
        getAllPostStatus: "error",
        loader: new Date()
      };
    default:
      return state;
  }
}

import { db } from "../../firebase";
import toastr from "toastr";
export const ADD_POST = "ADD_POST";
export const ADD_POST_ERR = "ADD_POST_ERR";
export const SHOW_POST = "SHOW_POST";
export const SHOW_POST_ERR = "SHOW_POST_ERR";

export const addPost = data => {
  return dispatch => {
    db.collection("posts")
      .add(data)
      .then(function(docRef) {
        const id = docRef.id;
        // const Taskdata = docRef.data();
        const dataToStore = { id, ...data };
        toastr.success("successfully posted");
        dispatch({
          type: ADD_POST,
          payload: dataToStore
        });
      })
      .catch(function(error) {
        dispatch({
          type: ADD_POST_ERR
        });
        toastr.error("Error occured. Please try again later");
      });
  };
};
export const deletePost = id => {
  return dispatch => {

  db.collection("posts").doc(id).delete().then(function() {
    console.log("Document successfully deleted!");
    toastr.success("successfully deleted");
}).catch(function(error) {
    toastr.error("Error occured. Please try again later");
    console.error("Error removing document: ", error);
});

  };
};

export function getPost() {
  return dispatch => {
    db.collection("posts").onSnapshot(
      function(querySnapshot) {
        let datatoStore = [];
        querySnapshot.forEach(function(doc) {
          const data = doc.data();
          const id = doc.id;
          datatoStore.push({ id, ...data });
          return datatoStore;
        });
        console.log("============datatoStore========================");
        console.log(datatoStore);
        console.log("====================================");

        dispatch({
          type: SHOW_POST,
          payload: datatoStore
        });
      },
      err => {
        console.log("err", err);
        dispatch({
          type: SHOW_POST_ERR
        });
      }
    );
  };
}


// db.collection("cities").doc("DC").delete().then(function() {
//   console.log("Document successfully deleted!");
// }).catch(function(error) {
//   console.error("Error removing document: ", error);
// });

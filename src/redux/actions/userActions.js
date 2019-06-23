import { auth, db } from "../../firebase";
import toastr from "toastr";
export const LOGIN = "LOGIN";
export const LOGINERR = "LOGINERR";
export const LOGOUT = "LOGOUT";
export const LOGOUTERR = "LOGOUTERR";
export const GETUSER = "GETUSER";
export const GETUSERERR = "GETUSERERR";
export const ADD_USER = "ADD_USER";
export const ADD_USER_ERR = "ADD_USER_ERR";

//Login
export function startLogin(data) {
  return dispatch => {
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(users => {
        auth.onAuthStateChanged(user => {
          if (user) {
            db.collection("users")
              .where("email", "==", data.email)
              .get()
              .then(function(querySnapshot) {
                let datatoStore = {};
                querySnapshot.forEach(function(doc) {
                  let data = doc.data();
                  let docid = doc.id;
                  let final = {
                    ...data,
                    docid
                  };
                  datatoStore = final;
                });

                let data = {
                  ...datatoStore,
                  uid: user.uid
                };
                console.log("data", data);
                toastr.success("Succesfull Login!");

                dispatch({
                  type: LOGIN,
                  payload: data
                });
              })
              .catch(err => {
                toastr.error("Error Occoured try again!");

                dispatch({
                  type: LOGINERR,
                  payload: new Date()
                });
              });
          } else {
            toastr.error("Error Occoured try again!");
            dispatch({
              type: LOGINERR,
              payload: new Date()
            });
          }
        });
      })
      .catch(function(error) {
        // Handle Errors here.

        console.log("err from fire", error);

        toastr.error("Wrong Email or Password try again!");

        dispatch({
          type: LOGINERR,
          payload: new Date()
        });
        // ...
      });
  };
}

//Logout
export function startLogout(data) {
  return dispatch => {
    auth.signOut().then(
      function() {
       
        toastr.success("Successfully Logout");

        dispatch({
          type: LOGOUT
        });
      },
      function(error) {
        toastr.error("Error occoured Try again!");
      }
    );
  };
}

//current user get;
export function startGetCurrentUser() {
  return dispatch => {
    //   var user = auth.currentUser;

    auth.onAuthStateChanged(user => {
      console.log("current user", user);
      if (user) {
        db.collection("users")
          .where("email", "==", user.email)
          .get()
          .then(function(querySnapshot) {
            let datatoStore = {};
            querySnapshot.forEach(function(doc) {
              let data = doc.data();
              let docid = doc.id;
              let final = {
                ...data,
                docid
              };
              datatoStore = final;
            });

            // if (datatoStore.stripeCustomer) {
            //   if (datatoStore.status == "active") {
                let datas = {
                  ...datatoStore,
                  uid: user.uid
                };
                console.log("data from net", datas);
                dispatch({
                  type: GETUSER,
                  payload: datas
                });
            //   } else {
            //     dispatch({
            //       type: GETUSERERR,
            //       payload: "nill"
            //     });
            //     toastr.error(
            //       "Your account is blocked by Admin, Contact to admin for more information"
            //     );
            //   }
            // } else {
            //   dispatch({
            //     type: GETUSERERR,
            //     payload: "nill"
            //   });
            // }
          });
      } else {
        dispatch({
          type: GETUSERERR,
          payload: "nill"
        });
      }
    });
  };
}

//ForgetPassword
export function startRessetPassword(data) {
  return dispatch => {
    auth
      .sendPasswordResetEmail(data)
      .then(function() {
        // Email sent.
      })
      .catch(function(error) {
        // An error happened.
      });
  };
}

export function createUser(data) {
  return dispatch => {
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(res => {
        console.log("res", res.user.uid);
        db.collection("users")
          .add(data)
          .then(function(docRef) {
            const id = docRef.id;
            const uid = res.user.uid;
            // const Taskdata = docRef.data();
            const dataToStore = { id, uid, ...data };
            toastr.success("Successfully Registered");
            dispatch({
              type: ADD_USER,
              payload: dataToStore
            });
          })
          .catch(function(error) {
            toastr.error("Error occured. Please try again later");
          });
      })
      .catch(err => {
        console.log("er", err);
        toastr.error("Error occured. Please try again later");
        dispatch({
          type: ADD_USER_ERR
        });
      });
  };
}

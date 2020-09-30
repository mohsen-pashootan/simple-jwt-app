import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "../stateManager/reducer";
import jwt_decode from "jwt-decode";

const jwtMiddleware = (store) => (next) => (action) => {
  if (typeof action === "function") {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");
    if (accessToken) {
      const token = jwt_decode(accessToken);
      const expirationDate = new Date(0);
      expirationDate.setUTCSeconds(token.exp);

      const now = new Date(0);
      now.setUTCMilliseconds(Date.now());

      if (now >= expirationDate) {
        fetch("http://localhost:4000/token", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token: refreshToken }),
        })
          .then((response) => response.json())
          .then(({ accessToken }) => {
            localStorage.setItem("access_token", accessToken);
            next(action);
          });
      } else {
        next(action);
      }
    } else {
      fetch("http://localhost:4000/token", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: refreshToken }),
      })
        .then((response) => response.json())
        .then(({ accessToken }) => {
          window.localStorage.setItem("access_token", accessToken);
          next(action);
        });
    }
  } else {
    next(action);
  }
};

export default createStore(reducer, applyMiddleware(jwtMiddleware, thunk));

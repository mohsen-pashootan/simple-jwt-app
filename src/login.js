import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPassword,
  getUsername,
  getUserPost,
} from "./stateManager/actionCreator";

export default function Login() {
  const { username, password, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const user = useRef();
  const pass = useRef();

  function handleLogin() {
    dispatch(getUserPost(username, password));
  }

  return (
    <>
      <input
        type="text"
        ref={user}
        onChange={() => dispatch(getUsername(user.current.value))}
      />
      <input
        type="password"
        ref={pass}
        onChange={() => dispatch(getPassword(pass.current.value))}
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </>
  );
}

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./stateManager/actionCreator";
import { useHistory } from "react-router-dom";

export default function Posts() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { posts } = useSelector((state) => state);

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      history.push("/login");
      return;
    }
    dispatch(getPosts());
  }, [dispatch, history]);
  return (
    <>
      <p>
        <br />
        {posts.map((x) => (
          <li key={x.userId}>{x.title}</li>
        ))}
      </p>
    </>
  );
}

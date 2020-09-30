import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getSearched } from "./../stateManager/actionCreator";
import styles from "./layout.module.scss";

export default function Layout({ children, onPast, onLuanch }) {
  const getSearch = useRef();
  const dispatch = useDispatch();

  function handleSearch(text) {
    dispatch(getSearched(text));
  }

  return (
    <>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>SpaceX's launches list</h1>
        <input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          ref={getSearch}
        />
        <span>
          <button className={styles["btn-past"]} onClick={onPast}>
            PastLaunches
          </button>
          <button className={styles["btn-upcome"]} onClick={onLuanch}>
            UpcomingLaunches
          </button>
        </span>
      </div>
      <div>{children}</div>
    </>
  );
}

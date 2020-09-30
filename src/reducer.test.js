// import React from "react";
// import { render } from "@testing-library/react";
import reducer from "./stateManager/reducer";
import { Increase } from "./stateManager/actionCreator";

describe("increase and decrease for a counter ", () => {
  it(" if none action was called go default", () => {
    expect(reducer(undefined, {})).toEqual({
      counter: 0,
    });
  });
  it(" if increased counter must be inc + 1", () => {
    expect(reducer({ counter: 6 }, { type: "INCREASED" })).toEqual({
      counter: 7,
    });
  });
  it("if an action for increasing dispatched", () => {
    expect(Increase()).toEqual({ type: "INCREASED" });
  });
  it("multi time call increasing", () => {
    expect(reducer(makeInc(0), { type: "INCREASED" })).toEqual();
  });
});

function makeInc(counter) {
  const times = 100;
  
  Array.from({ length: times }, () => counter + 1);
}
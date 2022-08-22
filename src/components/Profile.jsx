import React from "react";

import { useSelector, useDispatch } from "react-redux";

export const Profile = () => {
  const { showName, name } = useSelector((state) => state);
  const dispatch = useDispatch();
  const EXAMPLE_ACTION = "EXAMPLE_ACTION";
  const setShowName = () => {
    dispatch({ type: EXAMPLE_ACTION });
  };
  return (
    <div>
      <h4>Profile</h4>
      <input
        type="checkbox"
        checked={showName}
        value={showName}
        onChange={setShowName}
      />
      <span>Show Name</span>
      {showName && <div>{name}</div>}
    </div>
  );
};

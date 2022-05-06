import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";

import { useDispatch } from "react-redux";

import { userSignedOut } from "../../../../store/user-reducer";

const Func = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(userSignedOut([]));
  };

  return (
    <Nav navbar className="border-left flex-row">
      <Notifications />
      <UserActions onLogout={onLogout} />
    </Nav>
  );
};
export default Func;

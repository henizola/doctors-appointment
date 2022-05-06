import React from "react";
import { Nav } from "shards-react";

import Notifications from "./Notifications";
import UserActions from "./UserActions";

import { useDispatch, useSelector } from "react-redux";

import { userSignedOut } from "../../../../store/user-reducer";

const Func = () => {
  const user = useSelector((state) => state.user[0]);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(userSignedOut([]));
  };

  return (
    <Nav navbar className="border-left flex-row">
      <Notifications />
      <UserActions onLogout={onLogout} user={user} />
    </Nav>
  );
};
export default Func;

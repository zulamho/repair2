import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProfilePages() {
  const dispatch = useDispatch();
  // const user = useSelector((state) => user.application.users);
  const user = useSelector((state) => state.users.currentUser)
  console.log(user);

  return (
    <div>
      {user}
    </div>
  )
}

export default ProfilePages;

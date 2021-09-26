import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProfilePages() {
  const dispatch = useDispatch();
  // const user = useSelector((state) => user.application.users);
  const token = useSelector((state) => state.application.currentUser)
  console.log(token);

  return (
    <div>
      {token}
    </div>
  )
}

export default ProfilePages;

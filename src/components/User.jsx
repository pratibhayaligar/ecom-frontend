import React from "react";

const User = ({ name, email, children }) => {
  return (
    <>
      <div>name:{name}</div>
      <p>email:{email}</p>
      {children}
    </>
  );
};

export default User;

import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  // specific angle bracket and mention the type of initial vale as well as the future value
  // user? user can be null
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({ name: "adrian", email: "adrian@123.com" });
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>

      {/* user? user can be null  */}
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default User;

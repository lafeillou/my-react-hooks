import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../utils/login";
export const Index = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button>Logout</button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

import { AuthContext } from "@/contexts/auth";
import { useContext, useState } from "react";

const Demo = () => {
  const [user, setUser] = useState("");
  return (
    <AuthContext.Provider
      value={{ currentUser: user, updateCurrentUser: setUser }}
    >
      <DisplayUser />
      <DisplayUser />
      <UserInputField />
    </AuthContext.Provider>
  );
};

const UserInputField = () => {
  const auth = useContext(AuthContext);
  return (
    <input
      className="bg-slate-300"
      onChange={(event) => {
        auth?.updateCurrentUser(event.target.value);
      }}
    />
  );
};

const DisplayUser = () => {
  const auth = useContext(AuthContext);
  return (
    <h1>
      <b>current user:</b> {auth?.currentUser}
    </h1>
  );
};

export default Demo;

import { useState } from "react";
import { loginToTheBackend } from "../api/login";
import { setAuth } from "../api/axios.js";
import { listUsers } from "../api/user";

const HomeLoginPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers] = useState();

  const login = async () => {
    const data = await loginToTheBackend({
      username: username,
      password: password,
    });
    if (data.status == 200) {
      setAuth(btoa(`${username}:${password}`));
    }
  };

  function handleUserList() {
    listUsers().then(setUsers);
  }

  return (
    <>
      <h2>This is a Home Login Page</h2>
      <input
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Put your username here"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Put your password here"
      />
      <button onClick={login}>Submit</button>
      <div>
        <button onClick={handleUserList}>Get Users</button>
      </div>
      <h2>User list</h2>
      {users?.message == "Network Error" ? (
        <p>You need to log in to perform this action!</p>
      ) : (
        users?.data?.map((user) => <p key={user.id}>1.{user.username}</p>)
      )}
    </>
  );
};

export default HomeLoginPage;

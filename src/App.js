import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const user = useRef();
  const pass = useRef();

  function handleLogin() {
    fetch("http://localhost:4000/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then(({ accessToken, refreshToken }) => {
        window.localStorage.setItem("access_token", accessToken);
        window.localStorage.setItem("refresh_token", refreshToken);
        history.push("/post");
      });
  }

  return (
    <>
      <input
        type="text"
        ref={user}
        onChange={() => setUsername(user.current.value)}
      />
      <input
        type="password"
        ref={pass}
        onChange={() => setPassword(pass.current.value)}
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </>
  );
}

export default App;

// useEffect(() => {
//   if (!localStorage.getItem("Access_Token")) {
//     setMode("notLogin");
//     return;
//   }
//   const accessToken = localStorage.getItem("Access_Token");
//   const token = jwt(accessToken);
//   const expriationDate = new Date(0);
//   expriationDate.setUTCSeconds(token.exp);
//   const now = new Date(0);
//   now.setUTCMilliseconds(Date.now());
//     if (now >= expriationDate) {
//       const { accessToken } = await getToken();
//       localStorage.setItem("Access_Token", accessToken);
//       const x = await fn();
//       setState(x)
//         .then(({ accessToken }) => {
//           localStorage.setItem("Access_Token", accessToken);
//           fn().then(x => setState(x))
//         })
//     }
//     else {
//       fn().then(x => setState(x))
//     }
// }, []);

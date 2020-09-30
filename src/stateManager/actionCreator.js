export const getPosts = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/posts", {
      headers: {
        authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    })
      .then((response) => response.json())
      .then((posts) => dispatch({ type: "POSTS_RECIEVED", payload: posts }));

    //------ without jwt Middleware we have to write code like bellow in action creator.----//

    // const accessToken = localStorage.getItem("access_token");
    // const refreshToken = localStorage.getItem("refresh_token");
    // const token = jwt_decode(accessToken);
    // const expirationDate = new Date(0);
    // expirationDate.setUTCSeconds(token.exp);

    // const now = new Date(0);
    // now.setUTCMilliseconds(Date.now());

    // if (now >= expirationDate) {
    //   fetch("http://localhost:4000/token", {
    //     method: "POST",
    //     mode: "cors",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ token: refreshToken }),
    //   })
    //     .then((response) => response.json())
    //     .then(({ accessToken }) => {
    //       localStorage.setItem("access_token", accessToken);
    //       posts();
    //     });
    // .catch(() => {
    //   history.push("/login");
    // });
    // } else {
    //   posts();
    // }
    // function posts() {
    //   fetch("http://localhost:3000/posts", {
    //     headers: {
    //       authorization: "Bearer " + localStorage.getItem("access_token"),
    //     },
    //   })
    //     .then((response) => response.json())
    //     .then((posts) => dispatch({ type: "POSTS_RECIEVED", payload: posts }));
    // }
  };
};

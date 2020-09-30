export const INIT_STATE = {
  username: "",
  password: "",
  loading: false,
  posts: [],
};

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };

    case "USERNAME_ENTERED":
      return {
        ...state,
        username: action.payload,
      };
    case "PASSWORD_ENTERED":
      return {
        ...state,
        password: action.payload,
      };

    case "USER_LOGEDIN":
      return {
        ...state,
      };

    case "POSTS_RECIEVED":
      console.log(action.payload);
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
}

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";


export const login = (email, password) => (dispatch) => {
  const savedUser = JSON.parse(localStorage.getItem("registeredUser"));

  if (savedUser && email === savedUser.email && password === savedUser.password) {
    const user = {
      firstName: savedUser.firstName,
      lastName: savedUser.lastName,
      email: savedUser.email,
    };

    localStorage.setItem("authUser", JSON.stringify(user));
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } else {
    alert("Invalid Email or Password! Please Register First.");
  }
};


export const logout = () => (dispatch) => {
  localStorage.removeItem("authUser");
  dispatch({ type: LOGOUT });
};

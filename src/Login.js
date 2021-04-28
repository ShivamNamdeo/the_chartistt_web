import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";
    import { GoogleLogout,GoogleLogin } from 'react-google-login';

const Login = ({ history }) => {
  
    const { currentUser } = useContext(AuthContext);



  const handleLogin = useCallback(
    async response => {
      console.log(response.profileObj);

    const { email, name, } = response.profileObj;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email, name);
        history.push("/DashBoard");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );


    const responseGoogle = (response) => {
  console.log(response);
}

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Log in</h1>
             <GoogleLogin
    clientId={'522766607190-mdohs51le7sicbel0kkj5j5fc0r8r7k8.apps.googleusercontent.com'}
    onSuccess={handleLogin}
    onFailure={responseGoogle}
  >
   
    <span> Login with Google</span>
  </GoogleLogin>
    </div>
  );
};

export default withRouter(Login);

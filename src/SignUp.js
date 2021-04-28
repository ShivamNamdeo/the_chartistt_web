import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "./base";

    import { GoogleLogout,GoogleLogin } from 'react-google-login';

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async response => {

    console.log(response.profileObj);

    const { email, name, imageUrl} = response.profileObj;
    try {
      await  app.auth()
  .createUserWithEmailAndPassword(email,name);

    app.firestore()
      .collection("users")
      .doc(email)
      .set({
        email:email,
        name:name,
        avatar:imageUrl,

      })
  
      history.push("/DashBoard");
    } catch (error) {
      alert(error);
    }
  }, [history]);


  const responseGoogle = (response) => {
  console.log(response);
}
  


  return (
    <div>
      <h1>Sign up</h1>
        
        <GoogleLogin
    clientId={'522766607190-mdohs51le7sicbel0kkj5j5fc0r8r7k8.apps.googleusercontent.com'}
    onSuccess={handleSignUp}
    onFailure={responseGoogle}
    uxMode={true}
  >
   
    <span> Login with Google</span>
  </GoogleLogin>



    </div>
  );
};

export default withRouter(SignUp);

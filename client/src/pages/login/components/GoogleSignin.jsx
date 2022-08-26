import React, { useEffect, useRef } from "react";
import backend from "../../../APIs/backend";
import jwt_decode from "jwt-decode";
import { useContext } from "react";
import { GlobalContext } from "../../../contexts/globalContext";

function GoogleSignin() {
  const googleButtonRef = useRef();
  const { setCurrentUser } = useContext(GlobalContext);
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: onGoogleSignIn,
      login_uri: "http://localhost:3000",
      auto_select: false,
    });
    window.google.accounts.id.renderButton(googleButtonRef.current, {
      size: "large",
    });
  }, []);

  const onGoogleSignIn = async (user) => {
    let userCred = user.credential;
    let payload = jwt_decode(userCred);
    const data = {
      email: payload.email,
      givenName: payload.given_name,
      familyName: payload.family_name,
      userName: payload.name,
      photo: payload.picture,
    };
    console.log(data);
    try {
      await backend.post("/user", data);
      const response = await backend.post("/auth/google", data);
      console.log(response.data);
      setCurrentUser(data);
    } catch {
      console.log("something went wrong with google signin");
    }
  };

  return <div ref={googleButtonRef}></div>;
}

export default GoogleSignin;

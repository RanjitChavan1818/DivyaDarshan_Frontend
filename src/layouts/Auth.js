import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";


// views
import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import OTPVerification from "views/auth/VerifyOtp"

export default function Auth() {
  return (
    <>
      <main>
          <Switch>
            <Route path="/auth/login" exact component={Login} />
            <Route path="/auth/register" exact component={Register} />
            <Route path="/auth/VerifyOtp/:userId" exact component={OTPVerification} />

            <Redirect from="/auth" to="/auth/login" />
          </Switch>
      </main>
    </>
  );
}

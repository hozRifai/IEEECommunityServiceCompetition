import React from "react";
import { Button, message } from "antd";

const error = () => {
  message.error("you have already won the points for logging in!");
};

const LoginCheck = props => (
  <div className="container">
    <h1 id="login_daily_check">Login Daily Check</h1>
    <h4>We have our own way to thank you for using our website! </h4>
    <Button style={{ marginTop: "6px" }} type="primary" onClick={error}>
      Login Check
    </Button>
  </div>
);
export default LoginCheck;

import React from "react";
import "./HeaderStyles.css";

function SignupButton({ children, ...restProps }) {
  return (
    <div>
      <a className="signin-button" href="/signup" {...restProps}>
        {children}
      </a>
    </div>
  );
}

export default SignupButton;

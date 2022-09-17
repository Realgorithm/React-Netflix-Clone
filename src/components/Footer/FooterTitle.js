import React from "react";
import "./FooterStyles.css";

function FooterTitle({ children, ...restProps }) {
  return (
    <a href="https://www.netflix.com/in/" className="footer-title" {...restProps}>
      {children}
    </a>
  );
}

export default FooterTitle;

import React from "react";
import "./FooterStyles.css";

function FooterLink({ children, ...restProps }) {
  return (
    <a href="https://www.netflix.com/in/" className="footer-link" {...restProps}>
      {children}
    </a>
  );
}

export default FooterLink;

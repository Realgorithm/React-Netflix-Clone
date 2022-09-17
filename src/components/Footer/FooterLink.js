import React from "react";
import "./FooterStyles.css";

function FooterLink({ children, ...restProps }) {
  return (
    <a href="https://www.instagram.com/tabish_hussain09/" className="footer-link" {...restProps}>
      {children}
    </a>
  );
}

export default FooterLink;

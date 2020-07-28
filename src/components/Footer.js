import React from "react";

const Footer = () => {
  const date = new Date();
  const getFullYear = date.getFullYear();

  return (
    <div className="footer__maindiv">
      <hr style={{ width: "75%", border: "border: 2px solid red" }}></hr>
      <div style={{ marginTop: 15 }}> &copy; Olorunleke I | {getFullYear} </div>
    </div>
  );
};

export default Footer;

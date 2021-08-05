import React, { useEffect } from "react";
import headerLogo from "./icons/dao-logo.svg";
import { useHistory } from "react-router-dom";

function Home({ header }) {
  const history = useHistory();

  useEffect(() => {
    if (!header) {
      const mouseClickListener = (e) => {
        e.preventDefault();
        history.push("/DAOggregate-React-Front-End-Skills-Test/dao");
      };

      window.addEventListener("click", mouseClickListener);
      return () => window.removeEventListener("click", mouseClickListener);
    }
  });

  return (
    <div className={`${header ? "header-logo" : "home-logo"}`}>
      <img src={headerLogo} alt="dao logo" />
    </div>
  );
}

export default Home;

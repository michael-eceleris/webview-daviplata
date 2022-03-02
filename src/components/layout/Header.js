import React from "react";
import { useHistory } from "react-router-dom";

import Back from "../../assets/icons/back.svg";
import Times from "../../assets/icons/times.svg";
import { useMobile } from "../../hooks/useMobile";

const Header = () => {
  const { goBack, location } = useHistory();
  const back = () => {
    if (location.key) {
      goBack();
    }
  };
  const { isMobile } = useMobile();
  return (
    <header
      className={`fixed top-0 z-10 ${isMobile ? "" : "hidden"} ${
        window.location.pathname === "/health" ? "hidden" : ""
      }`}
    >
      <div className='container--icon'>
        <img src={Back} onClick={back} alt='icon_back_app' />
      </div>
      <h2 className='font--white font--regular font--18'>Tienda Virtual</h2>
      <div className='container--icon'>
        <img src={Times} alt='icon_exit_app' />
      </div>
    </header>
  );
};

export default Header;

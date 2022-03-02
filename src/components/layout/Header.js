import React from "react";
import { useHistory } from "react-router-dom";

import Back from "../../assets/icons/back.svg";
import Times from "../../assets/icons/times.svg";
import { useMobile } from "../../hooks/useMobile";
import { usePostMessage } from "../../hooks/usePostMessage";

const Header = () => {
  const { goBack, location } = useHistory();
  const { isMobile, isIphone } = useMobile();
  const { handlePostMessage } = usePostMessage();

  const back = () => {
    if (location.key) {
      goBack();
    } else {
      handlePostMessage(isIphone, "close");
    }
  };

  const close = () => {
    handlePostMessage(isIphone, "close");
  };

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
        <img src={Times} alt='icon_exit_app' onClick={close} />
      </div>
    </header>
  );
};

export default Header;

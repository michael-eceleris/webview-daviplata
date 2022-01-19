import React from "react";
import { useHistory } from "react-router-dom";
import { BsChevronCompactLeft } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const Header = () => {
  const { goBack } = useHistory();
  return (
    <header className='fixed top-0 z-10'>
      <div className='container--icon'>
        <BsChevronCompactLeft fontSize={"24px"} onClick={goBack} />
      </div>
      <h2 className='font--white font--18'>Tienda Virtual</h2>
      <div className='container--icon'>
        <FaTimes fontSize={"24px"} />
      </div>
    </header>
  );
};

export default Header;

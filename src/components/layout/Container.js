import React from "react";

const Container = ({ children }) => {
  return (
    <div className='container-daviplata min-h-screen grid grid-cols-4 md:grid-cols-6 lg:grid-cols-6 p-4 gap-2 md:pb-10 lg:pb-10 bg-current '>
      {children}
    </div>
  );
};

export default Container;

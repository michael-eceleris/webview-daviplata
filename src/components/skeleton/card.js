import React from "react";

const SkeletonCard = ({ withClass = " " }) => {
  return (
    <div
      className={`${withClass} rounded-2xl w-full py-3.5 card--product--shadow px-4 mt-5 mb-6 skeleton--card h-40`}
    >
      <div className='flex justify-between pb-3.5'>
        <div className='text-left w-3/6'></div>
        <div className='text-right w-3/6'></div>
      </div>
      <div className='flex justify-between pt-4'>
        <div className='text-left w-3/6'></div>
        <div className='text-right w-3/6'></div>
      </div>
    </div>
  );
};

export default SkeletonCard;

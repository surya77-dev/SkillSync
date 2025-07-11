import React from 'react'

const ProfileLink = () => {
  return (
    <button className="group relative flex items-center border-none bg-transparent cursor-pointer">
      <span className="relative pr-4 pb-2 text-[14px] uppercase tracking-[4px] text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-black after:origin-bottom-right after:transition-transform after:duration-300 group-hover:after:scale-x-100 group-hover:after:origin-bottom-left">
        View Profile
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="10"
        viewBox="0 0 46 16"
        className="transition-all duration-300 -translate-x-2 group-hover:translate-x-0 group-active:scale-90"
      >
        <path
          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
          transform="translate(30)"
        />
      </svg>
    </button>
  );
};


export default ProfileLink
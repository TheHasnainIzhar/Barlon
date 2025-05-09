import React from 'react';
import "../../styles/ui/location.mark.style.css";

const FooterLocationMark = (props: React.SVGProps<SVGSVGElement>) => (
  <div className='location-mark-style'>
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      {...props}
      className="w-8 h-8 text-gray-500"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  </div>
);

export default FooterLocationMark;

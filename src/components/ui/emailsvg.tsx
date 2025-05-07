import React from "react";
import "../../styles/ui/email.svg.style.css";

const EmailSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <div className="email-svg-style">
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
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </div>
  );
};

export default EmailSvg;

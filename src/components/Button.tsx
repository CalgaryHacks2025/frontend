import React from "react";
import { Link } from "react-router-dom";

interface FullPageButtonProps {
  to: string;
  children: React.ReactNode;
}

const FullPageButton: React.FC<FullPageButtonProps> = ({ to, children }) => {
  return (
    <div>
      <button className="bg-[#23453A] text-white rounded-md mr-3 w-full w-9/10 h-12 flex items-center justify-center font-bold">
        <Link to={to}>{children}</Link>
      </button>
    </div>
  );
};

export default FullPageButton;

import React from "react";

const ResponsiveMenu = ({isOpen}) => {
  console.log("first--", isOpen);
  return <div>
    {isOpen && (
        <div className="w-full bg-gray-800 text-white">
            <ul className="flex flex-col">
                <li className="p-4 border-b border-gray-700">Menu Item 1</li>
                <li className="p-4 border-b border-gray-700">Menu Item 2</li>
                <li className="p-4 border-b border-gray-700">Menu Item 3</li>
            </ul>
        </div>
    )}
  </div>;
};

export default ResponsiveMenu;

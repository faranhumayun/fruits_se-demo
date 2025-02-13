import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";

import ResponsiveMenu from "./ResponsiveMenu";

const NavbarMenu = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "Products", link: "#" },
  { id: 3, title: "About", link: "#" },
  { id: 4, title: "Shop", link: "#" },
  { id: 5, title: "Contacts", link: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="container mx-auto flex justify-between items-center py-4 md:pt-4">
          <div className="text-2xl font-bold uppercase flex text-center gap-2 select-none">
            <p className="text-primary">Fruit</p>
            <p className="text-secondary">Store</p>
            <FaLeaf className="text-green-500" />
          </div>
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((navItem) => (
                <li key={navItem.id}>
                  <a
                    href={navItem.link}
                    className="inline-block font-semibold py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ef4444]"
                  >
                    {navItem.title}
                  </a>
                </li>
              ))}
              <button className="rounded-full text-2xl hover:text-white hover:bg-primary duration-200 p-2">
                <MdOutlineShoppingCart />
              </button>
            </ul>
          </div>
          <div className="md:">
            <LuMenu onClick={() => setIsOpen(!isOpen)} className="text-4xl" />
          </div>
        </div>
      </nav>

      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;

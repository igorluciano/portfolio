import PropTypes from "prop-types";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export function TopBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 border-b border-gray-300 py-2">
      <div className="flex items-center justify-between xl:max-w-7x mx-auto max-w-full px-[8%] flex-wrap w-full">
        <b>Blog</b>
        <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />
        <nav className={[open ? "block" : "hidden", "  z-50 w-full lg:flex lg:items-center lg:w-auto  bg-blue-600"].join(" ")}>
          <ul className="text-base text-gray-600 lg:flex lg:justify-between">
            <li>
              <a className="lg:px-5 py-2 block hover:text-blue-700 font-semibold" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="lg:px-5 py-2 block hover:text-blue-700 font-semibold" href="#">
                Sobre
              </a>
            </li>
            <li>
              <a className="lg:px-5 py-2 block hover:text-blue-700 font-semibold" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="lg:px-5 py-2 block hover:text-blue-700 font-semibold" href="#">
                Contato
              </a>
            </li>
            <li>
              <a className="px-6 py-2 block bg-blue-700 text-white rounded-xl" href="#">
                Trabalhos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

TopBar.propTypes = {};

TopBar.defaultProps = {};

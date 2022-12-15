import photo from "@assets/photo.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaHome, FaChild, FaNewspaper, FaRegImage } from "react-icons/fa";
import Link from "next/link";

export function TopBar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth <= 640 && setIsOpen(false));
  }, []);

  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__header">
          <Link href="/">
            <span className="brand">Igor Moreira</span>
          </Link>
          {isOpen ? <FaTimes className="menu__trigger" onClick={() => setIsOpen(false)} /> : <FaBars className="menu__trigger" onClick={() => setIsOpen(true)} />}
        </div>
        <nav className={[isOpen && "block", "topbar__content"].join(" ")}>
          <ul className="menu">
            <li>
              <Link className="menu__item" href="/sobre">
                <FaChild /> Sobre
              </Link>
            </li>
            {/* <li>
              <Link className="menu__item" href="/portfolio">
                <FaRegImage /> Portfólio
              </Link>
            </li> */}
            <li>
              <Link className="menu__item" href="/blog/page/1">
                <FaNewspaper /> Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

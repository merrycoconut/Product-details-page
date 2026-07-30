import "./Navbar.css";
import { RiShoppingBag3Line } from "@remixicon/react";

export default function Navbar() {
  return (
    <nav className="navbar" aria-label="main navigation">
      <div> icon </div>
      <ol className="links-container">
        <li>
          <a> Shop All </a>
        </li>
        <li>
          <a> Latest arrival </a>
        </li>
      </ol>
      <RiShoppingBag3Line />
    </nav>
  );
}

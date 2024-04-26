import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const NavBarElements = links.map((link) => {
    return <a key={link} href={`#${link}`}>{link}</a>
  });

  return (
    <nav>
      {NavBarElements}
    </nav>);
}


export default NavBar;

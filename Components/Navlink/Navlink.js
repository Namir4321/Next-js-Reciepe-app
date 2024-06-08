"use client";

import { usePathname } from "next/navigation";
import classes from "./Navlink.module.css";
import Link from "next/link";

const Navlink = ({ href, children }) => {
const path=usePathname()
    return (
    <Link 
    href={href}
      className={path.startsWith(href) ? `${classes.link} ${classes.active}` : undefined}
    >
      {children}
    </Link>
  );
};

export default Navlink;

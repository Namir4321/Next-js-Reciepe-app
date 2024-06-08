import Link from "next/link";
import ImgIcon from "@/assets/logo.png";
import Style from "./Navbar.module.css";
import Image from "next/image";
import MainBanner from "../Mainbanner/MainBanner";
import Navlink from "../Navlink/Navlink";

const Navbar = () => {
  return (
    <>
      <MainBanner />
      <header className={Style.header}>
        <Link className={Style.logo} href="/">
          <Image src={ImgIcon} alt="A plate with food" priority />
          NextLevel Food
        </Link>
        <nav className={Style.nav}>
          <ul>
            <li>
              <Navlink href="/meals">Browse Meals</Navlink>
            </li>
            <li>
              <Navlink href="/community">Community</Navlink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

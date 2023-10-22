import Image from "next/image";
import Link from "next/link";
import { Menu } from "..";
import { LoginBtn } from "@/components/atoms";

export const Header = () => {
  return (
    <nav className="header flex justify-center shadow-sm bg-white">
      <div className="flex items-center justify-between py-2 px-4 container">
        {/* Brand */}
        <Link href={"/"}>
          <Image
            src={"assets/images/logo-full.svg"}
            width={173}
            height={52}
            alt="Logo"
          />
        </Link>

        {/* Rigt navigation */}
        <div>
          <LoginBtn />
          {/* <Menu /> */}
        </div>
      </div>
    </nav>
  );
};

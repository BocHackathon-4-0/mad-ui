import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AdminAuth } from "@/app/context/AuthContext";

function Navbar() {
  const { admin } = AdminAuth();

  useEffect(() => {
    console.info("Admin Navbar => ", admin);
  }, [admin]);

  return (
    <nav className={"navbar-main"}>
      <Link href={"/"} className={"flex items-center gap-4"}>
        <Image src={"/logos.svg"} alt={"logo"} width={32} height={32} />
        <p className={"text-heading3-bold text-light-1 max-xs:hidden"}>
          MAD - Financial Freedom
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden"></div>
      </div>
    </nav>
  );
}

export default Navbar;

import Link from "next/link";
import logo from "../../../public/images/logo.svg";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-10 flex justify-between items-center">
      <Link href="/home">
        <Image src={logo} alt="logo" width={200} />
      </Link>

      <ul className="hidden lg:flex lg:items-center gap-5">
        <li>
          <Link href="/home" className="text-[#7B797B] hover:text-black">
            Home
          </Link>
        </li>
        <li>
          <Link href="/home" className="text-[#7B797B] hover:text-black">
            Blog
          </Link>
        </li>
        <li>
          <Link href="/home" className="text-[#7B797B] hover:text-black">
            Tutorials
          </Link>
        </li>
        <li>
          <Link
            href="/home"
            className="bg-black py-2 px-3 rounded-xl text-white hover:bg-[#FFD719] hover:text-[#0C3C37]"
          >
            @DionovanR
          </Link>
        </li>
      </ul>

      <div className="flex lg:hidden">
        <GiHamburgerMenu size={20} />
      </div>
    </nav>
  );
}

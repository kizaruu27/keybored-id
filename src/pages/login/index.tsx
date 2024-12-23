import styles from "@/styles/login/login.module.scss";
import keeb1 from "../../../public/images/keeb1.svg";
import keeb2 from "../../../public/images/keeb2.svg";
import keeb3 from "../../../public/images/keeb3.svg";
import logo from "../../../public/images/logo.svg";
import google from "../../../public/images/google.svg";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex w-full h-[100vh]">
      {/* Keyboard images */}
      <div className="w-[50%] grid grid-cols-2 gap-4 p-5">
        <div className="row-span-2">
          <Image
            src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/home/social-grid/long/DSC09584_1_a1lrit"
            alt="keeb1"
            width={500}
            height={500}
            className="object-cover h-full w-full rounded-xl"
          />
        </div>
        <div className="row-span-1">
          <Image
            src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/home/social-grid/short/peng_close_4_pwgtdy"
            alt="keeb2"
            width={500}
            height={500}
            className="object-cover h-full w-full rounded-xl"
          />
        </div>
        <div className="row-span-1">
          <Image
            src="https://res.cloudinary.com/kineticlabs/image/upload/q_auto/c_fit,w_1000/f_auto/v1/api-images/home/social-grid/short/DSCF7666_1_yy3itw"
            alt="keeb2"
            width={500}
            height={500}
            className="object-cover h-full w-full rounded-xl"
          />
        </div>
      </div>
      {/* Login inputs */}
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-[#EEEEEE] w-[60%] h-[80%] rounded-2xl p-8 flex flex-col justify-between">
          <Image src={logo} alt="" className="w-52" />
          <form action="" className="mt-5">
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="email" className="text-[#848484]">
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="p-2 rounded-lg bg-[#D9D9D9]"
              />
            </div>
            <div className="flex flex-col gap-1 mb-5">
              <label htmlFor="password" className="text-[#848484]">
                password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className="p-2 rounded-lg bg-[#D9D9D9]"
              />
            </div>
          </form>
          <div>
            <button
              className="bg-[#FFD20D] w-full p-2 font-semibold rounded-lg mb-5"
              type="submit"
            >
              Sign In
            </button>
            <button className="bg-[#D9D9D9] w-full p-2 font-semibold rounded-lg mb-5 flex items-center justify-center gap-3">
              <Image src={google} alt="google" className="w-5" />
              <span>Sign In with Google</span>
            </button>
            <p className="text-center text-sm font-semibold">
              Don{"'"}t have an account? Sign up{" "}
              <Link href="#" className="text-[#1276D2]">
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

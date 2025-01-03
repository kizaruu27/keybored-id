import styles from "@/styles/login/login.module.scss";
import keeb1 from "../../../public/images/login/keeb1.avif";
import keeb2 from "../../../public/images/login/keeb2.avif";
import keeb3 from "../../../public/images/login/keeb3.avif";
import keeb4 from "../../../public/images/login/keeb4.avif";
import logo from "../../../public/images/logo.svg";
import google from "../../../public/images/google.svg";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className={styles.login}>
      {/* Images Grid */}
      <div className={styles.login__imageSection}>
        <div className="grid grid-cols-2 gap-3 p-3 h-screen">
          <div className="h-full row-span-2">
            <Image
              src={keeb1}
              alt="keeb-1"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <Image
              src={keeb2}
              alt="keeb-2"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <Image
              src={keeb3}
              alt="keeb-3"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="col-span-2 h-[65%]">
            <Image
              src={keeb4}
              alt="keeb-4"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
      <div className={styles.login__formSection}>
        <div className={styles.login__formSection__formRegisterContainer}>
          <Image
            src={logo}
            alt=""
            className={styles.login__formSection__formContainer__logo}
          />
          <h1 className={styles.login__formSection__formContainer__title}>
            Register Your Account
          </h1>
          <form action="" className={styles.login__formSection__formContainer__form}>
            <div className={styles.login__formSection__formContainer__form__formItem}>
              <label
                htmlFor="email"
                className={
                  styles.login__formSection__formContainer__form__formItem__label
                }
              >
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={
                  styles.login__formSection__formContainer__form__formItem__input
                }
              />
            </div>
            <div className={styles.login__formSection__formContainer__form__formItem}>
              <label
                htmlFor="password"
                className={
                  styles.login__formSection__formContainer__form__formItem__label
                }
              >
                password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                className={
                  styles.login__formSection__formContainer__form__formItem__input
                }
              />
            </div>
            <div className={styles.login__formSection__formContainer__form__formItem}>
              <label
                htmlFor="password-confirmation"
                className={
                  styles.login__formSection__formContainer__form__formItem__label
                }
              >
                confirm your password
              </label>
              <input
                type="password"
                name="password-confirmation"
                id="password-confirmation"
                className={
                  styles.login__formSection__formContainer__form__formItem__input
                }
              />
            </div>
          </form>
          <div>
            <button
              className="bg-[#FFD20D] w-full p-2 font-semibold rounded-lg mb-5"
              type="submit"
            >
              Register
            </button>

            <p className="text-center text-sm font-semibold">
              Already have an account? Sign in{" "}
              <Link href="/register" className="text-[#1276D2]">
                here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

type Proptypes = {
  type: "login" | "register";
  title: string;
  children: React.ReactNode;
  link: string;
};
const AuthLayout = (props: Proptypes) => {
  const { type, title, children, link } = props;
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row p-5 pt-20 lg:p-5 bg-white">
      <div className="lg:w-1/2 flex flex-col justify-center items-center">
        <img
          src="/assets/images/auth/yacht.svg"
          alt="Yacht"
          className="h-40 w-40 lg:h-80 lg:w-80"
        />
        <div className="hidden lg:block text-center">
          <p className="text-lg font-semibold text-neutral-700">
            Belanja Hanya di Crisorca
          </p>
          <p className="mt-2 text-md font-medium text-neutral-600">
            Gabung dan rasakan kemudahan bertransaksi di Crisorca
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 flex flex-col justify-center items-center">
        <div className="max-w-md w-full rounded-lg lg:border border-neutral-200 lg:shadow-lg p-5 bg-white">
          <div className="text-center">
            <h1 className="text-md md:text-lg text-neutral-700 font-semibold">
              {title}
            </h1>
            <p className="text-xs md:text-sm lg:text-md text-neutral-700 font-medium">
              {type === "login"
                ? "Don't have an account? "
                : "Already have an account? "}
              <Link href={link} className="font-semibold text-indigo-700">
                {type === "login" ? " Register" : " Login"}
              </Link>
            </p>
          </div>

          <div className="mt-5">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

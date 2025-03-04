/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const RegisterView = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { push } = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    const form = event.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      fullname: form.fullname.value,
      password: form.password.value,
      phone: form.phone.value,
    };

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (result.status == 200) {
      setIsLoading(false);
      form.reset();
      push("/auth/login");
    } else {
      setIsLoading(false);
      setError("Email sudah terdaftar");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row p-5 pt-20 lg:p-5">
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
        <div className="max-w-md w-full rounded-lg lg:border border-neutral-100 lg:shadow-lg p-5">
          <div className="text-center">
            <h1 className="text-md md:text-lg text-neutral-700 font-semibold">
              Daftar Sekarang
            </h1>
            <p className="text-xs md:text-sm lg:text-md text-neutral-700 font-medium">
              Sudah punya akun Crisorca?{" "}
              <Link
                href={"/auth/login"}
                className="font-semibold text-indigo-700"
              >
                Masuk
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2 mb-3">
                <label
                  htmlFor="fullname"
                  className="text-xs lg:text-sm text-neutral-600 font-semibold"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-neutral-300 rounded p-2 text-neutral-600 focus:outline-none focus:border-neutral-600"
                  id="fullname"
                  name="fullname"
                />
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <label
                  htmlFor="email"
                  className="text-xs lg:text-sm text-neutral-600 font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="w-full border border-neutral-300 rounded p-2 text-neutral-600 focus:outline-none focus:border-neutral-600"
                  id="email"
                  name="email"
                />
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <label
                  htmlFor="phone"
                  className="text-xs lg:text-sm text-neutral-600 font-semibold"
                >
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  placeholder="08123456789"
                  className="w-full border border-neutral-300 rounded p-2 text-neutral-600 focus:outline-none focus:border-neutral-600"
                  id="phone"
                  name="phone"
                />
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <label
                  htmlFor="password"
                  className="text-xs lg:text-sm text-neutral-600 font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  placeholder="**********"
                  className="w-full border border-neutral-300 rounded p-2 text-neutral-600 focus:outline-none focus:border-neutral-600"
                  id="password"
                  name="password"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-700 text-white font-semibold rounded p-2 cursor-pointer text-sm lg:text-md"
              >
                {isLoading ? "Memuat..." : "Daftar"}
              </button>
              <div>
                {error && (
                  <p className="mt-3 text-center text-sm text-red-500">
                    {error}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterView;

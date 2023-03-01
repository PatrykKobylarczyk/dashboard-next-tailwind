import BasicCard from "@/components/BasicCard";
import Head from "next/head";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string;
  password: string;
}

const Login = () => {
  const [login, setLogin] = useState(false);
  const [error, setError] = useState(false);

  const { signIn, signUp } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };

  return (
    <div className="relative h-screen grid place-items-center ">
      <Head>
        <title>Dashboard | Sign In</title>
        <link rel="icon" href="/netflix-favicon.png" />
      </Head>
      <div className="max-w-[380px]">
        <BasicCard>
          <form
            onSubmit={handleSubmit(onSubmit as any)}
            className="relative space-y-8 rounded py-10 px-10 "
          >
            <h1 className="text-4xl font-semibold">Sign in</h1>
            <div className="space-y-4">
              <label className="inline-block w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="input border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="p-1 text-[13px] text-orange-500">
                    Please enter a valid email.
                  </p>
                )}
              </label>
              <label className="inline-block w-full">
                <input
                  type="password"
                  placeholder="Password"
                  className="input border-2 border-gray-100 focus:border-Primary outline-none px-4 py-2 rounded-lg"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="p-1 text-[13px] text-orange-500">
                    Your password must contain between 4 and 60 characters.
                  </p>
                )}
              </label>
            </div>

            <button
              className="w-full bg-Primary text-white py-3 font-semibold flex justify-center"
              onClick={() => setLogin(true)}
            >
              Sign in
            </button>
            {error && <p>fill both inputs</p>}

            <div className="text-[gray] text-xs sm:text-base flex items-center">
              New to Dashboard?{"  "}
              <button
                type="submit"
                className="hover:underline text-xs sm:text-base hover:bg-transparent hover:underline-offset-1 hover:text-Primary"
                onClick={() => setLogin(false)}
              >
                Sign up now.
              </button>
            </div>
          </form>
        </BasicCard>
      </div>
    </div>
  );
};

export default Login;

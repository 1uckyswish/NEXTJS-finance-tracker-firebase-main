import React, { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
  const { googleLoginHandler, anonymousLoginHandler } = useContext(authContext);

  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <h1 className="mb-6 text-6xl font-bold text-center">Welcome 👋</h1>

      <div className="flex flex-col overflow-hidden shadow-md rounded-2xl">
        <div className="h-52">
          <img
            className="object-cover w-full h-full"
            src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg"
            alt="Welcome Image"
          />
        </div>

        <div className="px-4 py-4">
          <h3 className="text-2xl text-center">Please sign in to continue</h3>

          <div className="flex flex-col items-center mt-6 space-y-4">
            <button
              onClick={googleLoginHandler}
              className="flex items-center gap-2 p-4 font-medium text-white bg-gray-700 rounded-lg"
            >
              <FcGoogle className="text-2xl" /> Google
            </button>

            <button
              onClick={anonymousLoginHandler}
              className="flex items-center gap-2 p-4 font-medium text-white bg-gray-700 rounded-lg"
            >
              Sign in anonymously
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;

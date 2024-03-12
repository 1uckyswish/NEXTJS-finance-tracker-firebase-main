import React, { useContext } from "react";
import { authContext } from "@/lib/store/auth-context";
import { FcGoogle } from "react-icons/fc";
import { FaUserSecret } from 'react-icons/fa';

function SignIn() {
  const { googleLoginHandler, anonymousLoginHandler } = useContext(authContext);

  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <div className="flex flex-col overflow-hidden shadow-md rounded-2xl">
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Welcome to Finance Tracker 👋🏻</h1>
              <p className="mb-5">Effortlessly track your expenses, monitor your income, and master your financial balance with dynamic charts and detailed timestamps.</p>
              <div className="px-4 py-4">
                <div className="flex flex-col items-center mt-6 space-y-4">
                <button
                    onClick={googleLoginHandler}
                    className="flex items-center gap-2 px-4 font-medium btn btn-secondary text-black rounded-lg"
                  >
                    <FcGoogle className="text-2xl" /> Sign in with Google
                  </button>
                  <button
                    onClick={anonymousLoginHandler}
                    className="flex items-center gap-2 px-4 font-medium text-white btn btn-primary rounded-lg"
                  >
                   <FaUserSecret className="text-2xl text-black" />  Sign in Anonymous
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SignIn;

import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home(): JSX.Element {
  const [choice, setChoice] = useState<number>(0);

  function handleChoice(choice: number) {
    console.log(choice);
    setChoice(choice);
  }

  return (
    <>
      <header className="text-white border-b border-slate-700 flex items-center  h-14">
        <h1 className="ml-8 text-3xl  font-semiboldpy-4 ">Payment</h1>
      </header>
      <main className=" px-8 py-8 border-2 rounded-lg border-slate-700   max-w-fit mx-auto mt-10 text-white flex-1 mb-24">
        <h2 className="text-4xl font-bold">Welcome to payment</h2>
        <p className="text-lg mt-2">
          Sign in to your account or create a new one to get started
        </p>
        <div className="mt-16">
          <div className="bg-gray-400   gap-3 p-1 rounded-lg">
            <button
              onClick={() => {
                handleChoice(0);
              }}
              className={`w-2/4 h-9 
            transition-all duration-300
            ${choice === 0 ? "bg-white" : ""} text-black rounded-md`}
            >
              Login
            </button>
            <button
              onClick={() => {
                handleChoice(1);
              }}
              className={`w-2/4 h-9 text-black  ${
                choice == 1 ? "bg-white" : ""
              }  rounded-md transition-all duration-300 `}
            >
              Sign In
            </button>
          </div>
          <form className="mt-8">
            <p hidden={choice === 1 ? false : true}>Nome</p>
            <input
              className="mt-2 rounded-md w-full h-12 bg-transparent border border-slate-600  p-2 mb-4" //+
              placeholder="My name" //+
              type="text" //+
              hidden={choice === 1 ? false : true}
              disabled={choice === 1 ? false : true}
            />

            <p>Email</p>
            <input
              className="mt-2 rounded-md w-full h-12 bg-transparent border border-slate-600  p-2"
              placeholder="Myemail@.com"
              type="text"
            />
            <p className="mt-4">Password</p>
            <input
              className="mt-2 rounded-md w-full h-12 bg-transparent border border-slate-600 p-2"
              placeholder="My password"
              type="password"
            />

            <p className="mt-4" hidden={choice === 0 ? true : false}>
              Age
            </p>
            <input
              className="mt-2 rounded-md w-full h-12 bg-transparent border border-slate-600 p-2"
              placeholder="My password"
              type="date"
              hidden={choice === 1 ? false : true}
              disabled={choice === 1 ? false : true}
            />
            <button className="mt-4 w-full text-center bg-green-600 h-10 rounded-md hover:bg-green-700">
              SEND
            </button>
          </form>
          {choice === 0 && (
            <div className="flex items-center gap-4 mt-4 justify-center">
              <Link to="/forgot-password" className="hover:text-slate-400">
                Forgot Password?
              </Link>
            </div>
          )}
        </div>
      </main>
      <footer className=" flex justify-between items-center p-4 text-white border-slate-700 border-t   h-16 w-full">
        <p>&copy;{new Date().getFullYear()} Payment All rights reserved.</p>
        <div className="flex gap-10">
          <a href="">Terms of Service</a>
          <a href="">Privacy Policy</a>
          <Link target="blank" to={"https://github.com/Kainom"}>
            Contact Support
          </Link>
        </div>
      </footer>
    </>
  );
}

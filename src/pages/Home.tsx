import React from "react";
import { ButtonDefault } from "../components/Button";
import { Link } from "react-router-dom";
import { FcDebt } from "react-icons/fc";

const Home = () => {
  return (
    <>
      <header className="text-gray-200 border-b border-slate-500 bg-slate-950 flex items-center  h-14">
        <h1 className="ml-8 text-3xl  font-semiboldpy-4 ">Payment</h1>
      </header>
      <main
        className="h-screen w-screen bg-cover flex justify-center
      bg-cover-pic
    items-center flex-col relative"
        style={{
          backgroundImage: `url(${"./field.webp"})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh", // cobre a altura total da tela
          width: "100vw", // cobre a largura total da tela
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          objectFit: "cover",
        }}
      >
        <div className=" w-full h-2/6   flex flex-col mb-36  justify-center items-center relative  ">
          <h1 className="text-black text-4xl  my-10 before:bottom-28 before:left-0  before:w-3/12 before:h-1 before:bg-white before:absolute  after:bottom-28 after:right-0  after:w-3/12 after:h-1 after:bg-white after:absolute">
            Welcome to Payment
          </h1>
          <div className="flex  justify-center  w-1/4  p-6 mt-10">
            <Link to={"/login"}>
              <ButtonDefault message={"Log in"} />
            </Link>
          </div>
        </div>
        <div className="absolute pt-10 bottom-0 bg-slate-950 w-screen h-2/6 flex justify-evenly">
          <span>
            <h2 className="text-2xl text-gray-200">Security Pay</h2>
            <p className="mt-2 text-gray-200">
              Your payment is safe and secure.
            </p>
          </span>
          <span>
            <h2 className="text-2xl text-gray-200">Payment Options</h2>
            <p className="mt-2 text-gray-200 text-center">
              Apple Pay, Google Pay, Amazon Pay
            </p>
            <FcDebt size={60} className="mt-5 flex mx-auto" />
          </span>
          <span>
            <h2 className="text-2xl text-gray-200">Payment History</h2>
            <p className="mt-2 text-gray-200">See your past payments</p>
          </span>
        </div>
      </main>
    </>
  );
};

export default Home;

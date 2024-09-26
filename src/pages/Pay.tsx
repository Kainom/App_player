import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Header from "../components/Header";

export default function Pay(): JSX.Element {
  return (
    <>
      <Header />  
      <div className="mt-8 shadow-2xl rounded-3xl m-auto max-w-screen-sm	text-slate-200 px-5 py-5 ">
        <div className="flex items-center  p-2">
          <FaMoneyCheckDollar className="text-5xl mr-4 text-green-400  " />

          <h1 className="text-slate-200 text-3xl   font-bold  text-center">
            Make Payment
          </h1>
        </div>

        <p className="px-2 opacity-60 mb-16">
          Enter your payment details below
        </p>
        <section className="relative px-2 text-xl">
          <p className="mb-2 text-base font-medium text-gray-300">Full Name</p>
          <FaUser className="ml-3 opacity-50 absolute w-6 h-6 top-11" />

          <input
            placeholder="John Doe"
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 pl-12 py-2.5 rounded-md w-full"
            type="text"
          />
          <p className="mb-2 mt-4 text-base font-medium text-gray-300">
            Amount
          </p>
          <MdAttachMoney className="ml-3 opacity-50 absolute w-8 h-8 bottom-2" />
          <input
            placeholder="0.00"
            className="bg-gray-700  border-gray-600 text-white placeholder-gray-400 pl-12 pr-3 py-2.5 rounded-md w-full"
            type="number"
          />
        </section>
      </div>
    </>
  );
}

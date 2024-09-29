import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Header from "../components/Header";
import { useState } from "react";

export default function Pay(): JSX.Element {
  const [selectedPayment, setSelectedPayment] = useState<string>("");

  const handlePayment = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedPayment(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="mt-8 shadow-2xl rounded-3xl m-auto max-w-screen-sm border border-slate-700	text-slate-200 px-5 py-5 ">
        <form action="">
          <div className="flex items-center  p-2">
            <FaMoneyCheckDollar className="text-5xl mr-4 text-green-400  " />

            <h1 className="text-slate-200 text-3xl   font-bold  text-center">
              Make Payment
            </h1>
          </div>

          <p className="px-2 opacity-60 mb-16">
            Enter your payment details below
          </p>
          <section className=" px-2 text-xl">
            <div className="relative">
              <p className="mb-2 text-base font-medium text-gray-300">
                Full Name
              </p>
              <FaUser className="ml-3 opacity-50 absolute w-6 h-6 mt-3 " />

              <input
                placeholder="John Doe"
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 pl-12 h-12 rounded-md w-full"
                type="text"
              />
              <p className="mb-2 mt-4 text-base font-medium text-gray-300">
                Amount
              </p>
              <MdAttachMoney className="ml-3 opacity-50 absolute left-0 mt-2  w-8 h-8 " />
              <input
                placeholder="0.00"
                className="bg-gray-700  border-gray-600 text-white placeholder-gray-400 pl-12 pr-3 h-12 rounded-md w-full"
                type="number"
              />
            </div>
            <div className="mt-8">
              <p className="mb-2 mt-4 text-base font-medium text-gray-300">
                Payment Method
              </p>
              <select
                className="w-full bg-gray-700 h-12 rounded-md pl-4"
                name="paymentMethod"
                id="pay"
                value={selectedPayment}
                onChange={handlePayment}
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="applePay">Apple Pay</option>
                <option value="googlePay">Google Pay</option>
                <option value="amazonPay">Amazon Pay</option>
              </select>
            </div>
          </section>
          <button className="text-2xl mt-4 w-full text-center bg-green-600 h-10 rounded-md hover:bg-green-700">
            Pay
          </button>
        </form>
      </div>
    </>
  );
}

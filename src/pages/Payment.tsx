import { MdAttachMoney } from "react-icons/md";
import Header from "../components/Header";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function Payment(): JSX.Element {
  const [people, setPeople] = useState<number>(0);

  const handlePeopleChange = () => {
    setPeople(people + 1);
  };

  return (
    <>
      <Header />
      <button
          onClick={handlePeopleChange}
          className="px-8 bg-red-200 rounded-xl hover:bg-sky-500"
        >
          OK
        </button>
      <div
        className="mt-8 shadow-2xl rounded-3xl m-auto max-w-screen-lg	text-slate-200 px-5 py-5 
       border-slate-700 border"
      >
        <h1 className="text-slate-200 text-4xl   mb-16 mt-4  font-light  text-start">
          Payment History
        </h1>
        <div className="relative items-center w-4/12 flex bg-gray-800  mb-10  rounded-md -4 p-2 ">
        <CiSearch className="ml-3 opacity-50 absolute w-6 h-6 bottom-2 left-0" />
          <input
            type="text"
            placeholder="Search payments"
            className="bg-transparent text-gray-400 focus:outline-none px-10"
          />
        </div>
     
        <div className="flex justify-between m-auto gap-10 items-center text-xl  px-10 py-2 font-normal    mt-3 rounded-xl">
          <span className="  w-56 text-start px-3 text-slate-400">
            Person
          </span>
          <span className=" w-56 text-start  px-3 text-slate-400">
            Amount
          </span>
          <span className="  w-56 text-center  px-3 text-slate-400">
            Data
          </span>
          <span className="  w-56 text-end  px-3 text-slate-400">
            Status
          </span>
        </div>
        {(() => {
          const items: JSX.Element[] = [];
          for (let i = 0; i <= people; i++) {
            items.push(
              <div
                className="border-t	 border-slate-700  flex justify-between m-auto gap-6 items-center text-xl  px-10 py-4    hover:bg-slate-800"
                key={i}
              >
                <span>People</span>
                <span className="rounded-lg">R$54,00</span>
                <span className="">2004-03-20T12:34:35</span>
                <span className="bg-green-600 font-bold  px-3 py-1 text-sm rounded-xl hover:bg-slate-700">
                  completed
                </span>
              </div>
            );
          }
          return items;
        })()}
      </div>
    </>
  );
}

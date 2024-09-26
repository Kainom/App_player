import Header from "../components/Header";
import {useState } from "react";
export default function Payment(): JSX.Element {
  const [people, setPeople] = useState<number>(0);


  const handlePeopleChange = () => {
    setPeople(people + 1);
  };

  return (
    
    <>
    <Header/>
      <div className="mt-8 shadow-2xl rounded-3xl m-auto max-w-screen-lg	text-slate-200 px-5 py-5 
      bg-gray-900">
      <h1 className="text-slate-200 text-4xl  pl-5 mb-20 mt-4 font-bold  text-start">Payment History</h1>
      <button  onClick={handlePeopleChange} className="px-8 bg-red-200 rounded-xl hover:bg-sky-500">OK</button>
      <div className=" flex justify-between m-auto gap-10 items-center text-2xl px-5 py-2 font-normal    mt-3 rounded-xl"  >
        <span><h2 className="text-center">Person</h2></span>
        <span><h2>Amount</h2></span>
        <span><h2>Data</h2></span>
        <span><h2>Status</h2></span>


      </div>
      {(() => {
          const items: JSX.Element[] = [];
          for (let i = 0; i <= people; i++) {
            items.push(<div className="border-t-2	   flex justify-between m-auto gap-6 items-center text-xl  px-3 py-2    hover:bg-slate-500" key={i}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr8aeI-og93IV5tknuGGXGBvOGlWn9g_yYhQ&s" className="w-16 h-16 rounded-full" alt="" />
              <span>People</span>
              <span className="rounded-lg">R$54,00</span>
              <span className="" >2004-03-20T12:34:35</span>
              <span className="bg-green-600 font-bold  px-3 py-1 text-sm rounded-xl hover:bg-slate-700" >completed</span>
            </div>);
          }
          return items;
        })()}
      </div>
    </>
  );
}

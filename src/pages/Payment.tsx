import { MdAttachMoney } from "react-icons/md";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbRuler2 } from "react-icons/tb";
import axios from "../services/Axios";

export default function Payment(): JSX.Element {
  interface Pagamento {
    cod_pagamento: number;
    ano: number;
    mes: number;
    valor: number;
    jogador: Jogador;
  }

  interface Jogador {
    cod_jogador: number;
    nome: string;
    email: string;
    datanasc: string;
  }

  const [payShow, setPayShow] = useState<number | null>(null);
  const [payment, setPayment] = useState<Pagamento[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/futebol/pagamento/")
      .then((response) => {
        // console.log(response.data);
        setPayment([...response.data]);
      })
      .catch((e) => console.log(e));
    console.log(payment);
  }, []);

  const handleShow = (id: number) => {
    setPayShow((prevSelectedId) => (prevSelectedId === id ? null : id));
    console.log(id);
  };

  return (
    <>
      <Header />
      <div
        className="max-sm:w-11/12 mt-8 shadow-2xl rounded-3xl m-auto max-w-screen-lg	text-slate-200 px-5 py-5 
       border-slate-700 border mb-10"
      >
        <h1 className="text-slate-200 text-4xl   mb-16 mt-4  font-light  text-start">
          Payment History
        </h1>
        <div className="max-sm:w-52 relative items-center w-4/12 flex bg-gray-800  mb-10  rounded-md -4 p-2 ">
          <CiSearch className="ml-3 opacity-50 absolute w-6 h-6 bottom-2 left-0" />
          <input
            type="text"
            placeholder="Search payments"
            className="bg-transparent text-gray-400 focus:outline-none px-10"
          />
        </div>

        <div className="flex justify-between m-auto gap-10 items-center text-xl   py-2 font-normal    mt-3 rounded-xl">
          <span className="max-sm:w-1/2 sm:w-1/4   max-[330px]:pl-1 max-[330px]:mb max-sm:text-start max-sm:pl-10 w-56  text-left pl-7 pr-3 text-slate-400">
            Person
          </span>
          <span className="text-end  sm:w-1/4  max-sm:w-1/2 max-[330px]:hidden  max-sm:text-end max-sm:pr-10 sm:pr-20 px-3 text-slate-400">
            Amount
          </span>
          <span className="max-sm:hidden pr-10 sm:w-1/4 text-end   px-3 text-slate-400">
            Data
          </span>
          <span className="max-sm:hidden sm:w-1/4 w-56 text-end  pr-12 text-slate-400">
            Status
          </span>
        </div>
        {payment.map((pay) => (
          <div
            className="border-t  max-sm:grid max-sm:grid-cols-2	 border-slate-700  flex justify-between m-auto gap-6 items-center text-xl max-sm:px-0 max-sm:pl-8  max-sm:gap-4   px-5  py-4  max-[330px]:pl-7 hover:bg-slate-800"
            key={pay.cod_pagamento}
          >
            <span
              className="sm:w-1/4 overflow-hidden max-[330px]:col-span-full  
            flex gap-2   items-center  max-[330px]:justify-between
            "
            >
              {pay.jogador.nome}
              <button
                className=" sm:hidden"
                onClick={() => handleShow(pay.cod_pagamento)}
              >
                <MdOutlineKeyboardArrowDown />
              </button>
            </span>
            <span
              className="  
             max-sm:justify-end flex   items-center   max-sm:pr-10 sm:w-1/4 max-[330px]:hidden  sm:text-end"
            >
              R${pay.valor}
            </span>
            <span className="max-sm:hidden  pr-10 sm:w-1/4 text-center">
              {pay.mes}/{pay.ano}
            </span>

            <span className="max-sm:hidden bg-green-600 font-bold  px-3 py-1 text-sm rounded-xl hover:bg-slate-700">
              completed
            </span>
            {payShow === pay.cod_pagamento && (
              <div className="col-span-full">
                <div className="truncate  max-[330px]:p-0   border-slate-700 flex-col pl py-6 flex gap-2 justif-i items-center">
                  <span className="self-start">
                    <strong>Recipient:</strong> {pay.jogador.nome}
                  </span>
                  <span className="self-start">
                    <strong>Amount:</strong>{pay.valor}
                  </span>
                  <span className="self-start">
                    <strong>Status:</strong> Completedes
                  </span>
                  <span className="self-start">
                    <strong>Date: </strong>
                    {pay.mes}/{pay.ano}
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

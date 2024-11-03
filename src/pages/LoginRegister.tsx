import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "../services/Axios";
import axios from "axios";
import { ToastSuccess ,ToastFailure} from "../components/toastify/Toast";
import { ToastContainer, toast } from "react-toastify";
interface LoginForm {
  email: string;
  password: string;
}

type RegisterForm = {
  nome: string;
  email: string;
  password: string;
  datanasc: string;
};

export default function LoginRegister(): JSX.Element {
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    nome: "",
    email: "",
    password: "",
    datanasc: "",
  });

  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [choice, setChoice] = useState<number>(0);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      if (choice === 0) {
        // handle login submit
        const response = await axios.post<LoginForm>(
          "http://localhost:8000/futebol/auth/login",
          loginForm
        );
        console.log(response);
          
        if(response.status === 200) navigate('/perfil')

      } else {
        console.log(registerForm);
        const response = await axios.post<RegisterForm>(
          "http://localhost:8000/futebol/jogador/create",
          registerForm
        ) 
        console.log(response);
      }
    } catch (e: any) {
      console.error(e.response.data);
    }
  }

  function handleLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
    const { name, value } = e.target;
    setLoginForm((loginForm) => ({
      ...loginForm,
      [name]: value,
    }));
  }

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setRegisterForm({ ...registerForm, [name]: value });
  };

  function handleChoice(choice: number) {
    console.log(choice);
    setChoice(choice);
  }

  return (
    <>
      <header className="text-white border-b border-slate-700 flex items-center  h-14">
        <h1 className="ml-8 text-3xl  font-semiboldpy-4 ">Payment</h1>
      </header>
      <main className=" px-8 py-8 border-2 rounded-lg border-slate-700   max-w-fit mx-auto mt-10 text-white flex-1 mb-24  max-sm:mx-2">
        <h2 className="text-4xl font-bold max-[300px]:hidden">
          Welcome to payment
        </h2>
        <p className="max-[350px]:hidden text-lg mt-2">
          Sign in to your account or create a new one to get started
        </p>
        <div className="min-[300px]:mt-16">
          <div className="max-[300px]:grid bg-gray-400   gap-3 p-1 rounded-lg">
            <button
              onClick={() => {
                handleChoice(0);
              }}
              className={`min-[300px]:w-2/4 min-[300px]:h-9 
            transition-all duration-300 max-[300px]:col-span-full max-[300px]:h-10
            ${choice === 0 ? "bg-white" : ""} text-black rounded-md`}
            >
              Login
            </button>
            <button
              onClick={() => {
                handleChoice(1);
              }}
              className={`min-[300px]:w-2/4 min-[300px]:h-9 max-[300px]:h-10 text-black  ${
                choice == 1 ? "bg-white" : ""
              }  rounded-md transition-all duration-300 `}
            >
              Sign In
            </button>
          </div>
          <form className="mt-8" onSubmit={handleSubmit}>
            <p hidden={choice === 1 ? false : true}>Nome</p>
            <input
              className="mt-2 rounded-md w-full h-12 bg-transparent border border-slate-600  p-2 mb-4" //+
              placeholder="My name" //+
              type="text" //+
              hidden={choice === 1 ? false : true}
              disabled={choice === 1 ? false : true}
              onChange={handleRegisterChange}
              name="nome"
              value={registerForm.nome}
            />

            <p>Email</p>
            <input
              className="mt-2 rounded-md w-full h-12 bg-transparent border border-slate-600  p-2"
              placeholder="Myemail@.com"
              type="text"
              onChange={choice === 1 ? handleRegisterChange : handleLoginChange}
              name="email"
              value={choice === 1 ? registerForm.email : loginForm.email}
            />
            <p className="mt-4">Password</p>
            <input
              className="mt-2 rounded-md w-full h-12 bg-transparent border border-slate-600 p-2"
              placeholder="My password"
              type="password"
              onChange={choice === 1 ? handleRegisterChange : handleLoginChange}
              name="password"
              value={choice === 1 ? registerForm.password : loginForm.password}
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
              onChange={handleRegisterChange}
              name="datanasc"
              value={registerForm.datanasc}
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
      <footer className=" flex justify-between items-center p-4 text-white border-slate-700 border-t   h-16 w-full max-[468px]:grid max-[468px]:gap-2 max-[468px]:mb-16">
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

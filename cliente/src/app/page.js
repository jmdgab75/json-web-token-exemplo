'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      const userMacht = await handlerAcessUser(user);
      if (userMacht.token === undefined) {
        toast.error("Erro no e-mail ou senha!");
      }
      push('/pages/dashboard');
    } catch {
      toast.error("Erro na aplicação");
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handlerLogin} className="login-form">
        <input
          placeholder='E-mail'
          type="email"
          onChange={(e) => { setUser({ ...user, email: e.target.value }) }}>
        </input>
        <input
          placeholder='Senha'
          type='password'
          onChange={(e) => { setUser({ ...user, password: e.target.value }) }}>
        </input>
        <button className="login-button">Entrar</button>
      </form>
      <ToastContainer />
    </div>
  )
}

'use client'

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SideBar from "@/app/functions/componentes/SideBar";
import "./styles.css";
import { useState } from "react";
import { postUser } from "@/app/functions/handlerAcessAPI";
import { useRouter } from "next/navigation";

export default function Register() {
   const [user, setUser] = useState({
     nome: '',
     senha: '',
     csenha:'',
   });
const { push } = useRouter();
const handlerFormSubmit = async (event) => {
  event.preventDefault();
  try{
   await postUser(user);
   push('/pages/dashboard');
  } catch {
    return toast.error('Error')
  }

  const success = true;
  if (success) {
    toast.success('Usuário cadastrado com sucesso.');
  } else {
    toast.error('Ocorreu um erro ao cadastrar o usuário.');
  }

};



return(
    <div>
      <SideBar/>
      <h1>Cadastrar usuário</h1>
      <form onSubmit={handlerFormSubmit}>
      <input
        type="text" placeholder="Nome" id="nome" value={user.nome} onChange={(e) => { setUser({ ...user, nome: e.target.value });}} 
        required/>
      <input
        type="password" placeholder="Senha" id="senha" value={user.senha}onChange={(e) => { setUser({ ...user, senha: e.target.value });}} 
        required/>
        <input
         type="password" placeholder="Confirmar Senha" id="csenha" value={user.csenha} onChange={(e) => { setUser({ ...user, csenha: e.target.value });}} 
         required/>
        <button>Cadastrar</button>
      </form>
      <ToastContainer/>
    </div>
  )
}
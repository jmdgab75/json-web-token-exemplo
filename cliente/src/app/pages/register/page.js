'use client'

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SideBar from "@/app/functions/componentes/SideBar";
import "./styles.css";
import { useState } from "react";

export default function Register() {
   const [user, setUser] = useState({
     name: '',
     email: '',
     password:'',
   });
const { push } = useState();
const handlerFormSubmit = async (event) => {
  event.preventDefault();
  try{
   await postUser(registro);
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
        type="text" placeholder="Nome" id="name"  onChange={(e) => { setUser({ ...user, name: e.target.value });}} 
        required/>
      <input
        type="email" placeholder="E-mail" id="email" onChange={(e) => { setUser({ ...user, email: e.target.value });}} 
        required/>
        <input
         type="password" placeholder="Senha" id="password" onChange={(e) => { setUser({ ...user, password: e.target.value });}} 
         required/>
        <button>Cadastrar</button>
      </form>
      <ToastContainer/>
    </div>
  )
}
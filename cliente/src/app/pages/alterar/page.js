'use client'

import {ToastContainer, toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SideBar from "@/app/functions/componentes/SideBar";
import "./styles.css";

export default function Register() {

    const onAlterar = async (e) => {
        e.preventDefault();
          toast.success("Os dados do usuário foram alterados");
      }

return(
    <div>
      <SideBar/>
      <h1>Alterar dados do usuário</h1>
      <form onSubmit={onAlterar}>
      <input
          placeholder='Nome'
          type="name">
        </input>
        <input
          placeholder='E-mail'
          type="email">
        </input>
        <input
          placeholder='Senha'
          type='password'>
        </input>
        <button>Alterar</button>
      </form>
      <ToastContainer/>
    </div>
  )
}
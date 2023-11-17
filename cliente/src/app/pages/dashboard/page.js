import { getUsers } from "@/app/functions/handlerAcessAPI";
import { Suspense } from "react";
import ListUsers from "@/app/functions/componentes/ListUser.js";
import SideBar from "@/app/functions/componentes/SideBar";
import { useCookies } from "react-cookie"; 
import './style.css'


export default async function Dashboard() {
   const users = await getUsers();
    return (
        <div>
            <SideBar/> 
            <div className='dashboard-container'>
            <h1> Usuários cadastrados </h1>
            <div className='centered-card'></div>
            <Suspense fallback={<p>Carregando...</p>}>
            <div className='card'>
                 <ListUsers users={users}/>
                 </div>
            </Suspense>
            </div>
        </div>
    );
};
import './SideBar.css'

export default async function SideBar() {
    return(
    <div className="barra">
        <h1>Opções</h1>
        <ul>
        <li><a href="/pages/dashboard">Usuários</a></li>
            <li><a href="/pages/register">Cadastrar</a></li>
            <li><a href="/pages/alterar">Alterar</a></li>
        </ul> 
    </div>
        
    );
}
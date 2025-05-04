import { FaUser } from "react-icons/fa";

function TopNavbar() {
    return (
        
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#eee' }}>
            <span>Mi Aplicación de Administrador </span>
            <div className="dropdown">
            <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FaUser size={24} />
                     User 
                </button>
                <ul className="dropdown-menu">
            <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Configuracion</a></li>
                 </ul>
            </div>
        </nav>
    );
}

export default TopNavbar;

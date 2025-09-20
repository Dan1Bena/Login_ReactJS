import { useAuthContext } from "../../context/AuthContext";
import { UseNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import "./Header.css";

export const Header = () => {
    const { user, logout } = useAuthContext();
    const navigate = UseNavigate();

    return (
        <header className="header">
            <div className="header-left">
                <h1 className="header-logo" onClick={() => navigate("/principal")}>
                    Admin Panel 
                </h1>
                <Navbar/>{ /*solo muestra links si es admin*/ }
            </div>
            <div className="header-right">
                <span className="header-user">
                    {user?.nombre} ({user?.rol})
                </span>
                <button onClick={logout} className="logout-btn">Cerrar sesión</button>
            </div>
        </header>
    )
}
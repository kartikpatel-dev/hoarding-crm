import { Link } from "react-router-dom";

export default function Sidebar() {

    return (
        <div className="sidebar">

            <h3>Hoarding CRM</h3>

            <Link to="/dashboard">
                <i className="bi bi-speedometer2"></i> Dashboard
            </Link>

            <Link to="/users">
                <i className="bi bi-people"></i> Users
            </Link>

            <Link to="/routes">
                <i className="bi bi-signpost"></i> Routes
            </Link>

            <Link to="/hoardings">
                <i className="bi bi-image"></i> Hoardings
            </Link>

        </div>
    );
}
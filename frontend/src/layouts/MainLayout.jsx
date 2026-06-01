import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout({ children }) {

    return (
        <div className="crm-layout">

            <Sidebar />

            <div className="main-content">

                <Navbar />

                <div className="page-content">

                    {children}

                </div>

            </div>

        </div>
    );
}
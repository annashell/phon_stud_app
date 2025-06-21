import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({children}) {
    return (
        <div className="app">
            <Navbar/>
            <div className="content">
                <Sidebar/>
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
}

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({children}){

    return(

        <div className="flex">

            <Sidebar/>

            <div className="flex-1">

                <Navbar/>

                <main className="bg-slate-100 min-h-screen p-8">

                    {children}

                </main>

            </div>

        </div>

    )

}

export default Layout;
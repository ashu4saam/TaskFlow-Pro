import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex bg-slate-100 dark:bg-slate-950 transition-colors duration-300">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <main
          className="
            min-h-screen
            p-8
            bg-slate-100
            dark:bg-slate-950
            text-slate-800
            dark:text-white
            transition-colors
            duration-300
          "
        >
          {children}
        </main>

      </div>

    </div>
  );
}

export default Layout;
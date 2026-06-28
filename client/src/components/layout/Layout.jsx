import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div
      className="
        flex
        min-h-screen

        bg-slate-50
        dark:bg-slate-950

        transition-colors
        duration-300
      "
    >
      <Sidebar />

      <div className="flex flex-col flex-1">

        <Navbar />

        <main
          className="
            flex-1

            p-8

            bg-slate-50
            dark:bg-slate-950

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
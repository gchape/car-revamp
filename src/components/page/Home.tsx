import { Outlet, useLocation } from "react-router";
import LiveChat from "../../features/LiveChat";
import Navbar from "../../features/Navbar";
import Footer from "../footer/Footer";
import Main from "../Main";

function Home() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen select-none">
      <Navbar />
      <LiveChat />

      {location.pathname === "/" && (
        <div className="flex-grow flex items-center justify-center">
          <Main />
        </div>
      )}

      <Outlet />

      {location.pathname === "/contact" && <Footer />}
    </div>
  );
}

export default Home;

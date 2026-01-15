import { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Users from "./pages/Users";
import "./index.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar setPage={setPage} />

        <main className="flex-1 p-6 bg-gray-100">
          {page === "home" && <Home />}
          {page === "users" && <Users />}
        </main>
      </div>
test
      <Footer />
    </div>
  );
}

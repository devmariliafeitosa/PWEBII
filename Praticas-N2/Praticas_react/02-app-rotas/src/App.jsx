
import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container">
        <Outlet/>
      </main>

      <Footer />
    </>
  );
}

export default App;

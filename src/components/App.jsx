import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/App.css";

function App() {
  return (
    <>
      <nav>
        <Link to="home">Home</Link>
        <Link to="shop">Shop</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default App;

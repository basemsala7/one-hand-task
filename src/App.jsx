import "./App.css";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Cookies from "js-cookie";

function App() {
  const isAuth = Cookies.get("token");

  return (
    <>
      <Header />
      {isAuth ? <h2>welcome to dashboard </h2> : <Login />}
    </>
  );
}

export default App;

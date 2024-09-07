import styles from "./login.module.css";
import logo from "../../../public/logo.svg";
import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";

function Login() {
  const [userData, setUserData] = useState({
    email: "admin@admin.com",
    password: "12345678",
  });

  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitFunction = async (e) => {
    e.preventDefault();
    try {
      setIsloading(true);
      const response = await axios.post("/login?uid=1231", userData, {
        headers: {
          "X-Secret-Key": "OH2024",
        },
      });
      console.log(response);
      Cookies.set("token", "one-hand1234");
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsloading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <img src={logo} alt="logo " />
      <h3>Log in</h3>

      <form>
        <label htmlFor="email" name="email">
          Email :{" "}
        </label>
        <input placeholder="Email" type="text" id="email" />

        <label htmlFor="password" name="password">
          Password :{" "}
        </label>
        <input placeholder="Password" type="password" id="password" />

        <button type="submit" onClick={submitFunction}>
          Log in {isLoading ? "....." : ""}
        </button>
        {isError && <p>some thing is Wrong try again </p>}
      </form>
    </div>
  );
}

export default Login;

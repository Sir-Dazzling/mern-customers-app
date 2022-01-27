import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "../../styles/styles.css";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:5000/auth/", registerData);
      // await axios.post(
      //   "https://mern-auth-template-tutorial.herokuapp.com/auth/",
      //   registerData
      // );
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div class="grid md:grid-cols-5">
      <img
        src={require("../../images/e.png")}
        alt="BTC"
        className="-mt-5 -ml-7 md:hidden"
      />
      <section className="md:col-span-2 bg-white mx-10 card2 my-20 md:ml-28">
        <div className="text-center p-5 mt-5">
          <h1 className="font-bold text-3xl md:hidden">Prime Investors</h1>
          <h1 className="font-bold text-3xl">Let's Get Started</h1>
          <h2 className="text-gray-600 text-2xl">Signup</h2>
        </div>
        <form onSubmit={register} className="md:ml-10 ml-5 w-full mt-5">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@example.com"
            className="border-l-4 border-blue-600 w-4/5 rounded-md shadow-md p-2 mt-1 mb-3"
          />
          <br />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="border-l-4 border-blue-600 w-4/5 rounded-md shadow-md p-2 mt-1 mb-3"
          />
          <br />

          <input
            value={passwordVerify}
            onChange={(e) => setPasswordVerify(e.target.value)}
            type="text"
            placeholder="Verify Password"
            className="border-l-4 border-blue-600 w-4/5 rounded-md shadow-md p-2 mt-1 mb-3"
          />
          <br />
          <input
            type="submit"
            value="Signup"
            className="p-2 mt-4 ml-16 rounded-sm w-2/5 cursor-pointer text-white bg-blue-600 opacity-75"
          />
        </form>
        <p className="p-2 text-gray-700 text-center">
          Already have an account?{" "}
          <a href="login" className="font-bold">
            Login
          </a>
        </p>
      </section>
      <section className="md:col-span-2 -ml-14 mr-5">
        <img
          src={require("../../images/authbg.png")}
          alt="BTC"
          className="hidden md:block mt-5"
        />
      </section>
    </div>
  );
}

export default Register;

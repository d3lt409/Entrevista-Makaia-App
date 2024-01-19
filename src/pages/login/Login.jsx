/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { startLoginWithEmailPassword } from "../../store/userAuth/thunks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mentor = await dispatch(
      startLoginWithEmailPassword({ correo: email, password })
    );
    if (mentor.status >= 400) {
      Swal.fire({
        title: "Datos incorrectos",
        text: "No autorizado",
        timer: 3000,
        icon: "error",
      });
    } else {
      console.log(mentor);
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white dark:bg-zinc-700 rounded-3xl shadow-md max-w-md ">
        <h1 className="text-3xl font-semibold text-center dark:text-gray-100 underline">
          Sign in
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2  text-purple-700 dark:text-gray-700 bg-white border rounded-md focus:border-zinc-400 focus:ring-zinc-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800 dark:text-white "
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              className="block w-full px-4 py-2 mt-2 text-purple-700 dark:text-gray-700 bg-white border rounded-md focus:border-zinc-400 focus:ring-zinc-300 focus:outline-none focus:ring focus:ring-opacity-40"
              onChange={handlePassword}
            />
          </div>
          <a
            href="#"
            className="text-xs text-purple-600 dark:text-gray-300 hover:underline"
          >
            Forget Password?
          </a>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 flex-col flex text-sm font-light text-center text-zinc-300">
          {" "}
          Don't have an account?{" "}
          <a href="#" className=" font-medium text-purple-600 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

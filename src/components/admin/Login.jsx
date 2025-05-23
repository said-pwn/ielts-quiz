import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ onLogin }) {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (password === "123admin") {
      onLogin(true);
      navigate("/admin");
    } else {
      alert("password is wrong");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow"
    >
      <h2 className="text-xl mb-4">Admin panel authentication</h2>
      <input
        type="password"
        placeholder="enter password"
        className="w-full p-2 border rounded mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className=" bg-gray-600 text-white p-2  hover:bg-blue-700"
      >
        Войти
      </button>
    </form>
  );
}

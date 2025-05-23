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
      alert("Пароль неверный");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 p-6 bg-white rounded shadow"
    >
      <h2 className="text-xl mb-4">🔐 Вход в админ-панель</h2>
      <input
        type="password"
        placeholder="Введите пароль"
        className="w-full p-2 border rounded mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
      >
        Войти
      </button>
    </form>
  );
}

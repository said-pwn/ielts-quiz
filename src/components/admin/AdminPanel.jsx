import { useState } from "react";
import UsersTable from "./UserTable";
import QuestionsManager from "./QuestionManager";

export default function AdminPanel({ onLogout }) {
  const [view, setView] = useState("users"); // users / questions

  return (
    <div className="max-w-5xl mx-auto p-6">
      <nav className="flex justify-between items-center mb-6">
        <div>
          <button
            onClick={() => setView("users")}
            className={`mr-4 ${view === "users" ? "font-bold underline" : ""}`}
          >
            Users
          </button>
          <button
            onClick={() => setView("questions")}
            className={`${view === "questions" ? "font-bold underline" : ""}`}
          >
            Questions
          </button>
        </div>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          Quit
        </button>
      </nav>

      {view === "users" && <UsersTable />}
      {view === "questions" && <QuestionsManager />}
    </div>
  );
}

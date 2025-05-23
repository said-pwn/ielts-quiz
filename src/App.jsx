import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";

import Quiz from "./components/Quiz";
import Result from "./components/Result";
import ComingSoonPage from "./components/ComingSoonPage";
import NotFoundPage from "./components/NotFoundPage";


import AdminPanel from "./components/admin/AdminPanel";
import Login from "./components/admin/Login";
import QuestionManager from "./components/admin/QuestionManager";
import UserTable from "./components/admin/UserTable";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <Router>
    {/* <Link to="/soon" className="fixed top-10 right-4 bg-blue-500 text-white px-4 py-2 rounded"/> */}
    <Link to="/" className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded">Home</Link>
    <Link to="/admin" className="fixed top-5 right-50 bg-blue-500 text-white px-4 py-2 rounded">Admin</Link>
      <div className="p-6">
      <h1 className=" text-2xl pt-10">IELTS QUIZ</h1>
      <h1 className=" text-1xl border-7 bg-black text-white p-3 m-10">The website is under development.</h1>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/soon" element={<ComingSoonPage />} />

    
          <Route path="/admin/login" element={<Login onLogin={() => setIsAdmin(true)} />} />


          <Route
            path="/admin"
            element={isAdmin ? <AdminPanel /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/questions"
            element={isAdmin ? <QuestionManager /> : <Navigate to="/admin/login" />}
          />
          <Route
            path="/admin/users"
            element={isAdmin ? <UserTable /> : <Navigate to="/admin/login" />}
          />


          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

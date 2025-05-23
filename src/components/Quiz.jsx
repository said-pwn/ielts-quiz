import { useState, useEffect } from "react";
import QuestionCard from "./QuestionCard";
import Result from "./Result";
import { Link } from "react-router-dom";
import Login from "./admin/Login";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("https://6830b9356205ab0d6c3a379f.mockapi.io/ielts-quiz") // Заменить на свой URL MockAPI
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((err) => console.error(err));
  }, []);

  const filteredQuestions = questions.filter((q) =>
    selectedCategory === "All" ? true : q.category === selectedCategory
  );

  function handleAnswer(index) {
    if (index === filteredQuestions[current].correctIndex) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < filteredQuestions.length) {
      setCurrent(next);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setScore(0);
    setCurrent(0);
    setFinished(false);
  }

  if (!questions.length)
    return <p className="text-center mt-10 text-lg">Loading questions...</p>;

  if (filteredQuestions.length === 0)
    return (
      <p className="text-center mt-10 text-lg">
        No questions in this category.
      </p>
    );

  if (finished)
    return (
      <Result
        score={score}
        total={filteredQuestions.length}
        onRestart={handleRestart}
      />
    );

  return (
    <div className="max-w-xl mx-auto">
      <select
        className="mb-6 p-2 rounded border border-gray-300 w-full"
        value={selectedCategory}
        onChange={(e) => {
          setSelectedCategory(e.target.value);
          setCurrent(0);
          setScore(0);
          setFinished(false);
        }}
      >
        <option value="All">All</option>
        <option value="Vocabulary">Vocabulary</option>
        <option value="Grammar">Grammar</option>
        <option value="Reading">Reading</option>
        <option value="Listening">Listening</option>
      </select>

      <QuestionCard
        question={filteredQuestions[current]}
        onAnswer={handleAnswer}
        index={current}
        total={filteredQuestions.length}
        
      />
      <h1 className="mt-10"> If you admin   ---     </h1>
      <Link to="admin">Click</Link>
    </div>
  );
}

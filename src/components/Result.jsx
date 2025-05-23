export default function Result({ score, total, onRestart }) {
  const percent = Math.round((score / total) * 100);
  const level =
    percent >= 80 ? "C1" : percent >= 60 ? "B2" : "B1 or lower";

  return (
    <div className="bg-green-100 p-8 rounded-xl text-center max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Quiz Finished!</h2>
      <p className="text-lg mb-2">
        Your Score: <strong>{score} / {total}</strong>
      </p>
      <p className="text-lg mb-6">Estimated Level: <strong>{level}</strong></p>
      <button
        onClick={onRestart}
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded"
      >
        Try Again
      </button>
    </div>
  );
}

export default function QuestionCard({ question, onAnswer, index, total }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
      <h2 className="text-xl font-semibold">
        Question {index + 1} of {total}
      </h2>
      <p className="text-gray-700">{question.question}</p>
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswer(i)}
            className="block w-full text-left px-4 py-3 rounded bg-blue-100 hover:bg-blue-200 transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

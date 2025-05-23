export default function QuestionCard({ question, onAnswer, index, total }) {
  return (
    <div className="bg-black p-6 shadow-md space-y-6 text-white">
      <h2 className="text-xl font-semibold">
        Question {index + 1} of {total}
      </h2>
      <p className="text-black-700">{question.question}</p>
      <div className="space-y-3">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => onAnswer(i)}
            className="block w-full text-left px-4 py-3 text-black  bg-white hover:bg-black hover:text-white transition"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

import { useEffect, useState } from "react";

export default function QuestionsManager() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null);
  const [form, setForm] = useState({
    question: "",
    options: ["", "", "", ""],
    correctIndex: 0,
    category: "Vocabulary"
  });

  const apiUrl = "https://6830b9356205ab0d6c3a379f.mockapi.io/ielts-quiz";

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setQuestions(data);
        setLoading(false);
      });
  }, []);

  function resetForm() {
    setForm({ question: "", options: ["", "", "", ""], correctIndex: 0, category: "Vocabulary" });
    setEditing(null);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleOptionChange(index, value) {
    const newOptions = [...form.options];
    newOptions[index] = value;
    setForm(prev => ({ ...prev, options: newOptions }));
  }

  function handleSave(e) {
    e.preventDefault();
    const method = editing ? "PUT" : "POST";
    const url = editing ? `${apiUrl}/${editing.id}` : apiUrl;

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then(res => res.json())
      .then(data => {
        if (editing) {
          setQuestions((q) => q.map(item => (item.id === data.id ? data : item)));
        } else {
          setQuestions(q => [...q, data]);
        }
        resetForm();
      });
  }

  function handleEdit(q) {
    setEditing(q);
    setForm({
      question: q.question,
      options: q.options,
      correctIndex: q.correctIndex,
      category: q.category,
    });
  }

  function handleDelete(id) {
    if (!confirm("delete question?")) return;
    fetch(`${apiUrl}/${id}`, { method: "DELETE" }).then(() => {
      setQuestions(q => q.filter(item => item.id !== id));
    });
  }

  if (loading) return <p>Loading Questions...</p>;

  return (
    <div>
      <form onSubmit={handleSave} className="mb-6 p-4 bg-white rounded shadow">
        <h3 className="text-xl mb-3">{editing ? "Edit" : "Add"} Question</h3>
        <input
          type="text"
          name="question"
          placeholder="Question"
          className="w-full mb-2 p-2 border rounded"
          value={form.question}
          onChange={handleChange}
          required
        />
        {form.options.map((opt, i) => (
          <input
            key={i}
            type="text"
            placeholder={`Option ${i + 1}`}
            className="w-full mb-2 p-2 border rounded"
            value={opt}
            onChange={e => handleOptionChange(i, e.target.value)}
            required
          />
        ))}
        <label className="block mb-2">
          correct answer:
          <select
            name="correctIndex"
            value={form.correctIndex}
            onChange={handleChange}
            className="ml-2 p-1 border rounded"
          >
            {[0,1,2,3].map(i => (
              <option key={i} value={i}>{i + 1}</option>
            ))}
          </select>
        </label>
        <label className="block mb-4">
          Kategory:
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="ml-2 p-1 border rounded"
          >
            <option value="Vocabulary">Vocabulary</option>
            <option value="Grammar">Grammar</option>
            <option value="Reading">Reading</option>
            <option value="Listening">Listening</option>
          </select>
        </label>
        <button
          type="submit"
          className="bg-green-500 hover:bg-red-600 text-white px-4 py-2 rounded mr-3"
        >
          {editing ? "Сохранить" : "Добавить"}
        </button>
        {editing && (
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
          >
            Отмена
          </button>
        )}
      </form>

      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Вопрос</th>
            <th className="border p-2">Категория</th>
            <th className="border p-2">Правильный ответ</th>
            <th className="border p-2">Действия</th>
          </tr>
        </thead>
        <tbody>
          {questions.map(q => (
            <tr key={q.id} className="odd:bg-white even:bg-gray-50">
              <td className="border p-2">{q.question}</td>
              <td className="border p-2">{q.category}</td>
              <td className="border p-2">{q.options[q.correctIndex]}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => handleEdit(q)}
                  className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500"
>

</button>
<button
onClick={() => handleDelete(q.id)}
className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600"
>

</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}



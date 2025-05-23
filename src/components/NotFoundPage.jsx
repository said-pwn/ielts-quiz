import { Ghost } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center mt-20 text-center">
      <Ghost size={64} className="text-gray-500 mb-4 animate-bounce" />
      <h1 className="text-7xl font-bold mb-5 mt-5">404</h1>
      <h1 className="text-3xl font-bold mb-2">Страница не найдена</h1>
      <p className="text-gray-600">Такой страницы нет. Проверь ссылку или вернись назад.</p><br></br>
      <h1> If you admin       <Link to="/admin">Click</Link></h1>

    </div>
  );
}

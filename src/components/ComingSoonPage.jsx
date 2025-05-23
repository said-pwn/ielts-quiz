import { Hammer } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col items-center mt-20 text-center">
      <Hammer size={64} className="text-yellow-500 mb-4 animate-bounce" />
      <h1 className="text-3xl font-bold mb-2">Страница в разработке</h1>
      <p className="text-gray-600">Мы уже работаем над этим! Загляни позже 😊</p>
    </div>
  );
}

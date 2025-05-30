import { useState } from 'react';
import { Button } from "@/components/ui/button";

const flowers = [
  { name: "Ромашка", reason: "Это цветок для самых близких. Ты мой самый близкий человек." },
  { name: "Сирень", reason: "Ты моя первая и самая сильная любовь." },
  { name: "Розочка белая", reason: "Ты символ искренности и верности." },
  { name: "Розочка красная", reason: "Ты символ моей страсти к тебе." },
  { name: "Розочка розовая", reason: "Ты моя нежность." },
  { name: "Одуванчики", reason: "Ты мой символ радости." }
];

export default function FlowerDateInvite() {
  const [revealed, setRevealed] = useState([]);
  const [showFinal, setShowFinal] = useState(false);

  const handleClick = (name) => {
    if (!revealed.includes(name)) {
      const newRevealed = [...revealed, name];
      setRevealed(newRevealed);
      if (newRevealed.length === flowers.length) {
        setTimeout(() => setShowFinal(true), 600);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-yellow-100 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-pink-700">Собери букетик :3</h1>
      <h2 className="text-xl text-pink-600 mb-6">Эти цветочки мы пойдем с тобой собирать! А когда соберем букет, устром пикник♡</h2>
      <h3 className="text-xl text-pink-600 mb-6">Нажми на каждый цветочек❣</h3>
      <div className="grid grid-cols-2 gap-4">
        {flowers.map((flower) => (
          <div
            key={flower.name}
            onClick={() => handleClick(flower.name)}
            className="cursor-pointer bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform text-center w-40 h-40 flex items-center justify-center"
          >
            {revealed.includes(flower.name) ? (
              <p className="text-pink-700 text-sm">{flower.reason}</p>
            ) : (
              <p className="text-lg font-semibold text-pink-500">{flower.name}</p>
            )}
          </div>
        ))}
      </div>

      {showFinal && (
        <form
          action="https://getform.io/f/amdmklzb"
          method="POST"
          className="mt-10 p-6 bg-white rounded-xl shadow-xl text-center max-w-md"
        >
          <p className="text-xl text-pink-700 font-medium mb-4">
            Пойдешь со мной на свидание? :3
          </p>
          <div className="flex flex-col items-center gap-4">
            <input
              type="hidden"
              name="Nata's response"
              value="Женечка, я тебя так сильно люблю тебя. Я согласна пойти с тобой куда угодно! И отдать свою а. д. ..."
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Введите почту"
              className="p-2 border border-pink-300 rounded-lg w-full"
            />
            <Button type="submit" className="bg-pink-500 hover:bg-pink-600 w-full">
              Отправить ответ
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}


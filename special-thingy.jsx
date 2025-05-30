import { useState } from 'react';
import { Button } from "@/components/ui/button";

const flowers = [
  {
    name: "Rose",
    reason: "Because every love story deserves a rose."
  },
  {
    name: "Tulip",
    reason: "Because like tulips, you're vibrant and full of joy."
  },
  {
    name: "Sunflower",
    reason: "Because you light up my day like the sun."
  },
  {
    name: "Lavender",
    reason: "Because your presence is calming and beautiful."
  }
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
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-pink-700">Pick a Flower</h1>
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
        <div className="mt-10 p-6 bg-white rounded-xl shadow-xl text-center max-w-md">
          <p className="text-xl text-pink-700 font-medium mb-4">
            So... will you pick me?
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-pink-500 hover:bg-pink-600">Yes</Button>
            <Button className="bg-pink-500 hover:bg-pink-600">Definitely</Button>
          </div>
        </div>
      )}
    </div>
  );
}

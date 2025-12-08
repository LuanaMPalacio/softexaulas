import React, { useState } from "react";

export default function ContadorIncremento() {
  const [valor, setValor] = useState(0);
  const [incremento, setIncremento] = useState(1);

  const somar = () => {
    setValor((v) => v + Number(incremento));
  };

  const subtrair = () => {
    setValor((v) => v - Number(incremento));
  };

  const zerar = () => {
    setValor(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6 p-4">
      <h1 className="text-3xl font-bold">Contador Personalizado</h1>

      <div className="flex flex-col gap-2 items-center">
        <label className="font-semibold">Incremento:</label>
        <input
          type="number"
          value={incremento}
          onChange={(e) => setIncremento(e.target.value)}
          className="border p-2 rounded w-32 text-center"
        />
      </div>

      <div className="text-5xl font-mono">{valor}</div>

      <div className="flex gap-4 mt-4">
        <button
          onClick={somar}
          className="px-4 py-2 bg-green-600 text-white rounded-xl shadow"
        >
          Somar
        </button>

        <button
          onClick={subtrair}
          className="px-4 py-2 bg-yellow-500 text-white rounded-xl shadow"
        >
          Subtrair
        </button>

        <button
          onClick={zerar}
          className="px-4 py-2 bg-red-600 text-white rounded-xl shadow"
        >
          Zerar
        </button>
      </div>
    </div>
  );
}

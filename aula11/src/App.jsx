import React, { useState, useRef } from 'react';


export default function Cronometro() {
  const [tempo, setTempo] = useState(0);    
  const intervaloRef = useRef(null);         
  
  const iniciar = () => {
    
    if (intervaloRef.current !== null) return;

    intervaloRef.current = setInterval(() => {
      setTempo((t) => t + 1);
    }, 1000);
  };

  const pausar = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
  };

  const zerar = () => {
    clearInterval(intervaloRef.current);
    intervaloRef.current = null;
    setTempo(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">Cronômetro</h1>

      <div className="text-4xl font-mono">{tempo}s</div>

      <div className="flex gap-4">
        <button onClick={iniciar} className="px-4 py-2 bg-green-600 text-white rounded">
          Iniciar
        </button>

        <button onClick={pausar} className="px-4 py-2 bg-yellow-500 text-white rounded">
          Pausar
        </button>

        <button onClick={zerar} className="px-4 py-2 bg-red-600 text-white rounded">
          Zerar
        </button>
      </div>
    </div>
  );
}

"use client";

import { useCallback, useEffect, useState } from "react";
import moment from "moment";

const frases = [
  "Tudo posso naquele que me fortalece. (Fp 4:13)",
  "O Senhor é meu pastor, nada me faltará. (Sl 23:1)",
  "Entrega o teu caminho ao Senhor. (Sl 37:5)",
  "Sede fortes e corajosos. (Js 1:9)",
  "O amor nunca falha. (1Co 13:8)",
  "Deus é a nossa fortaleza. (Sl 46:1)",
  "Alegrai-vos sempre no Senhor. (Fp 4:4)",
  "O Senhor te guardará de todo mal. (Sl 121:7)",
  "Buscai primeiro o Reino de Deus. (Mt 6:33)",
  "Com Deus, tudo é possível. (Mt 19:26)",
];

export default function Footer() {
  moment.locale("pt-br");
  const [date, setDate] = useState("");
  const [phrase, setPhrase] = useState("");

  const refreshClock = useCallback(() => {
    setDate(moment().format("D MMMM YYYY, HH:mm:ss"));
  }, [setDate]);

  useEffect(() => {
    const timer = setInterval(refreshClock, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [refreshClock]);

  useEffect(() => {
    if (window) {
      setPhrase(frases[Math.floor(Math.random() * frases.length)]);
      setDate(moment().format("D MMMM YYYY, HH:mm:ss"));
    }
  }, []);

  return (
    <footer className="absolute bottom-0 h-12 w-full border-solid border-t-[1px] border-zinc-800">
      <div className="flex justify-between lg:w-1/2 max-w-[920px] lg:mx-auto px-6 py-4 md:px-16 lg:px-0 text-sm text-zinc-500">
        <div>
          <p>{phrase}</p>
        </div>
        <div className="flex gap-4">
          <p>{date}</p>
        </div>
      </div>
    </footer>
  );
}

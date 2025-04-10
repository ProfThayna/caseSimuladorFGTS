import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { calcularSaque } from "../utils/calcularSaque";
import bgImage from "../images/hero.jpg";

export default function Resultado() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state;

  if (!user) {
    navigate("/");
    return null;
  }

  const saque = calcularSaque(Number(user.saldo));
  const valorFormatado = saque.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Faixa azul lateral direita */}
      <div className="absolute top-0 right-0 h-full w-1/4 bg-[#002D74] z-0" />

      <div className="relative z-10 w-full max-w-3xl flex flex-col items-center px-4 text-white">
        <div className="text-center mb-10 max-w-xl">
          <h1 className="text-4xl font-bold">Olá, {user.nome.split(" ")[0]}!</h1>
        </div>

        <div className="bg-white text-black w-full rounded-xl shadow-lg p-8 text-center space-y-4">
          <p className="text-lg font-medium">Você pode receber até:</p>
          <p className="text-4xl font-bold text-blue-700">{valorFormatado}</p>

          <p className="text-sm text-gray-600">
            Esta simulação traz valores aproximados. Para detalhes ou uma oferta real, entre em contato com a Smile Co. 
            <br />Consulte seu saldo no app do FGTS.
          </p>
        </div>
      </div>
    </div>
  );
}

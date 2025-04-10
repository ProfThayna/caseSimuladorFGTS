import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { formSchema } from "../schema/form.schema";
import bgImage from "../images/hero.jpg"; // imagem de fundo escura
import { validarTelefone } from "../services/validatePhone";

const meses = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export default function Home() {
  const navigate = useNavigate();
  const [telefoneInvalido, setTelefoneInvalido] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setTelefoneInvalido(false);

    const validacao = await validarTelefone(data.telefone);
    if (!validacao) {
      setTelefoneInvalido(true);
      return;
    }

    navigate("/resultado", { state: data });
  };


  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Faixa azul lateral */}
      <div className="absolute top-0 right-0 h-full w-1/4 bg-[#002D74] z-0" />

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center text-white px-4">
        {/* Título */}
        <div className="text-center mb-10 max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            Use uma grana que já é sua e <br /> saia do aperto.
          </h1>
          <div className="mt-4 bg-[#007BFF] inline-block px-4 py-1 rounded text-sm font-medium uppercase tracking-wide">
            SAQUE ANIVERSÁRIO
          </div>
          <p className="text-sm mt-2">
            Insira seus dados e verifique o quanto você poderá receber!
          </p>
        </div>

        {/* Card com formulário */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white text-black w-full max-w-2xl rounded-xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Qual seu nome?</label>
            <input
              {...register("nome")}
              placeholder="ex: Guilherme Neves"
              className="border border-gray-300 rounded px-4 py-2"
            />
            {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Qual seu telefone?</label>
            <input
              {...register("telefone")}
              placeholder="ex: (21) 99765-9087"
              className="border border-gray-300 rounded px-4 py-2"
            />
            {/* Validação Zod */}
            {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>}
            {/* Validação API */}
            {telefoneInvalido && (
              <p className="text-red-500 text-sm mt-1">Número de telefone inválido.</p>
            )}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Qual seu saldo?</label>
            <input
              type="number"
              {...register("saldo")}
              placeholder="ex: R$ 5.000,00"
              className="border border-gray-300 rounded px-4 py-2"
            />
            {errors.saldo && <p className="text-red-500 text-sm mt-1">{errors.saldo.message}</p>}
          </div>

          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Qual seu mês de aniversário?</label>
            <select
              {...register("mes")}
              className="border border-gray-300 rounded px-4 py-2"
            >
              <option value="">Selecione...</option>
              {meses.map((mes, i) => (
                <option key={i} value={mes}>{mes}</option>
              ))}
            </select>
            {errors.mes && <p className="text-red-500 text-sm mt-1">{errors.mes.message}</p>}
          </div>

          <div className="col-span-1 md:col-span-2 flex justify-center mt-2">
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded transition"
            >
              Ver Proposta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

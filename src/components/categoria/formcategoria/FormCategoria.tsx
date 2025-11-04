/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: '',
    descricao: '',
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert("Erro ao buscar categoria.");
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) { // Permitindo textarea
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert('A Categoria foi atualizada com sucesso!');
      } catch (error: any) {
        alert('Erro ao atualizar a Categoria.');
      }
    } else {
      try {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert('A Categoria foi cadastrada com sucesso!');
      } catch (error: any) {
        alert('Erro ao cadastrar a Categoria.');
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (

<div className="bg-slate-100 min-h-screen py-16">

      <div className="container max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h1 className="text-4xl text-center font-bold text-[#003865] mb-8">
          {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
        </h1>

        <form className="w-full flex flex-col gap-6" onSubmit={gerarNovaCategoria}>

          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="font-semibold text-gray-700">
              Nome da Categoria
            </label>
            <input
              type="text"
              placeholder="Digite o nome da Categoria"
              name='nome'
              className="border-2 border-gray-300 rounded-lg p-3
                         transition-colors duration-200
                         focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none"
              value={categoria.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="descricao" className="font-semibold text-gray-700">
              Descrição da Categoria
            </label>
            <textarea
              placeholder="Descreva aqui sua Categoria"
              name='descricao'
              className="border-2 border-gray-300 rounded-lg p-3 h-32 resize-none
                         transition-colors duration-200
                         focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none"
              value={categoria.descricao}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => atualizarEstado(e)}
              required
            />
          </div>

          <button
            className="rounded-lg text-white font-bold bg-green-700 hover:bg-green-900
                       w-full py-3 mt-4
                       flex justify-center items-center
                       transition-colors duration-200
                       focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ?
              <ClipLoader color="#ffffff" size={24} /> :
              <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
            }
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;
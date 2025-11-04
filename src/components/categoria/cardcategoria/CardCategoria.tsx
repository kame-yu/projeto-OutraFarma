import { PencilSimpleIcon, TrashSimpleIcon } from '@phosphor-icons/react';
import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (

    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between
                    hover:shadow-lg transition-shadow duration-200">

      <header className="py-3 px-6 bg-[#003865] text-white font-semibold text-xl">
        {categoria.nome}
      </header>

      <p className="p-6 text-gray-700 text-base grow">
        {categoria.descricao}
      </p>

      <div className="flex border-t border-gray-100">

        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full py-3 flex items-center justify-center gap-2
                     text-sky-600 hover:bg-sky-50 transition-colors duration-200"
        >
          <PencilSimpleIcon size={20} weight="bold" />
          <span>Editar</span>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-full py-3 flex items-center justify-center gap-2
                     text-red-600 hover:bg-red-50 transition-colors duration-200 border-l border-gray-100"
        >
          <TrashSimpleIcon size={20} weight="bold" />
          <span>Deletar</span>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border border-gray-200 flex flex-col rounded-2xl overflow-hidden justify-between shadow-lg bg-white">
      
      <header className="py-2 px-6 bg-[#003865] text-white font-bold text-2xl">
        {categoria.nome}
      </header>

      <p className="p-8 text-lg text-gray-700 h-full">
        {categoria.descricao}
      </p>

      <div className="flex">

        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-white bg-sky-700 hover:bg-sky-900
                     flex items-center justify-center py-2
                     transition-colors duration-200"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-full text-white bg-red-600 hover:bg-red-800 
                     flex items-center justify-center
                     transition-colors duration-200"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
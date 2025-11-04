import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4
               bg-[#003865] text-white"
      >

        <div className="container flex justify-between items-center">
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="src\assets\logofarm.png" alt="Logotipo Outra Farma" className="h-10" />
            </div>
            <Link to="/home" className="text-2xl font-bold">
              Outra Farma
            </Link>
          </div>

          <div className="flex items-center gap-6 text-lg font-semibold">
            <Link to='/categorias' className='hover:underline'>Listar Categorias</Link>
            <Link to='/cadastrarcategoria' className='hover:underline'>Criar Categoria</Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;
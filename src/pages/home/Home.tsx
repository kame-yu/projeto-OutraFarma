import ListaCategorias from "../../components/categoria/listacategorias/ListaCategorias"


function Home() {
    return (
        <>
            <div className="bg-gray-300 flex justify-center">
                <div className='container grid grid-cols-2 text-sky-950'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Bem vindos à Outra Farma
                        </h2>
                        <p className='text-xl'>
                            Também tá no coração da gente 💚
                        </p>

                        <div className="flex justify-around gap-4">
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://png.pngtree.com/png-clipart/20230111/original/pngtree-pharmacy-and-selling-drugs-concept-png-image_8901691.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <ListaCategorias />

        </>
    )
}

export default Home
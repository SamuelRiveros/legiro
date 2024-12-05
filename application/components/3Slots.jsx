const Slots = () => {

    const handleRedirect = () => {
        console.log("redireccion")
    }

    const mainslots = [
        {}
    ]

    return(
        <main className="w-[100vw]">

            <section className="flex gap-5 justify-center p-10">

                <div className="relative w-[400px] h-[500px] overflow-hidden group cursor-pointer">
                    {/* Imagen */}
                    <img
                        src="/accesorios.jpg"
                        alt="Imagen de la card"
                        className="w-full h-full object-cover transition-all duration-300 group-hover:blur-sm"
                    />

                    {/* Contenedor del texto */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                        onClick={handleRedirect}
                        className="text-white text-4xl font-bold hover:underline"
                        >
                        Más...
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Slots;
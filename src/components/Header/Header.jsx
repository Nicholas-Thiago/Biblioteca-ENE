export default function Header(){
    return(
        <header className="h-[100px] p-2.5 m-1 flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <h1 className="text-laranja uppercase text-3xl font-extrabold font-titulo">Biblioteca Ene</h1>
                <h2 className="text-xl font-medium font-titulo">Descobrir</h2>
            </div>
            <button className="bg-destaque rounded-[20px] border-none h-[35px] w-[90px] text-fundo font-medium">+ Publicar</button>
        </header>
    )
}
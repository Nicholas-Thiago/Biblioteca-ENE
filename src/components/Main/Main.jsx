import Book from "../Book/Book"
import iconeBusca from "../../assets/barra-busca.png"
import iconeRemover from "../../assets/remover.png"
import Filter_Button from "../Filter_Button/Filter_Button"
import iconeLivro from "../../assets/livro-m.png"

export default function Main(){
    return(
        <main>
            <section className="bg-destaque text-fundo mx-[15px] h-[200px] rounded-[20px] flex flex-col justify-center gap-2 relative overflow-hidden">
                <div className="bg-laranja w-40 h-40 absolute rounded-full -right-8 -top-8"></div>
                <img src={iconeLivro} alt="Icone de um livro laranja" className="absolute w-20 h-20 right-44 top-12" />
                <h3 className="p-4 text-2xl font-extrabold font-titulo font-style: italic">Uma estante que cabe no bolso.</h3>
                <p className="p-4 text-sm font-light">Obras abertas, histórias compartilhadas e uma comunidade que cuida do acesso.</p>
            </section>
            
            <h3 className="text-lg font-medium font-titulo my-4 mx-1 p-2.5">O que você quer ler?</h3>
            <div className="relative mx-1 p-2.5">
                <img src={iconeBusca} alt="Icone de lupa" className="absolute w-5 h-5 left-6 top-1/2 -translate-y-1/2"/>
                <input type="text" className="w-full bg-fundo_claro rounded-full pl-10 pr-20 py-3  border border-destaque"/>
                <img src={iconeRemover} alt="Icone de um X" className="absolute w-5 h-5 right-14 top-1/2 -translate-y-1/2"/>
                <button className="absolute right-7 top-1/2 -translate-y-1/2">→</button>
            </div>
            <div className="flex gap-3 my-4 mx-1 p-2.5">
                <Filter_Button texto={"Todos"}/>
                <Filter_Button texto={"Comunidade"}/>
                <Filter_Button texto={"Open Library"}/>
                <Filter_Button texto={"Google Books"}/>
                <Filter_Button texto={"Gutenberg"}/>
            </div>
            <h3 className="text-lg my-1 font-medium mx-1 p-2.5">Resultados para "Machado de Assis"</h3>
            <ul className="my-4 pb-8">
                <Book />
            </ul>
        </main>
    )
}
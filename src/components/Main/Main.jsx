import Book from "../Book/Book"
import iconeBusca from "../../assets/barra-busca.png"
import iconeRemover from "../../assets/remover.png"
import Filter_Button from "../Filter_Button/Filter_Button"
import iconeLivro from "../../assets/livro-m.png"
import { useState } from "react"
import { buscaLivros } from "../../services/openLibrary"

export default function Main(){
    const [resultado, setResultado] = useState(null)
    const [carregando, setCarregando] = useState(false)
    const [erro, setErro] = useState(null)
    
    async function submitForm(e){
        e.preventDefault()
        const dadosPesquisa = new FormData(e.target).get("pesquisa").trim()
        if (dadosPesquisa.length === 0){
            return null
        } else{
            
            setResultado(null)
            setCarregando(true)
            setErro(null)
        
            try {
                const livros = await buscaLivros(dadosPesquisa)
                setResultado({dadosPesquisa, livros})
            } catch(e){
                setErro(e.message)
            } finally{
                setCarregando(false)
            }
        }
    }
        
    
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
                <form onSubmit={submitForm}>
                    <input type="text" className="w-full bg-fundo_claro rounded-full pl-10 pr-20 py-3 border border-destaque" aria-label="Pesquisa de livros" name="pesquisa" id="pesquisa" />
                    <img src={iconeRemover} alt="Icone de um X" className="absolute w-5 h-5 right-14 top-1/2 -translate-y-1/2"/>
                    <button type="submit" className="absolute right-7 top-1/2 -translate-y-1/2">→</button>
                </form>
                
            </div>
            <div className="flex gap-3 my-4 mx-1 p-2.5">
                <Filter_Button texto={"Todos"}/>
                <Filter_Button texto={"Comunidade"}/>
                <Filter_Button texto={"Open Library"}/>
                <Filter_Button texto={"Google Books"}/>
                <Filter_Button texto={"Gutenberg"}/>
            </div>
            
            {carregando && <p>Buscando livros...</p>}
            {erro && <p role="alert">{erro}</p>}
            {resultado && (
                <>
                    <h3 className="mx-1 p-2.5 font-bold">Resultados para "{resultado.dadosPesquisa}":</h3>
                    {resultado.livros.length === 0 ? <p className="my-4 mx-1 p-2.5">Nenhum livro encontrado.</p> : 
                        (<ul className="my-4 pb-8">
                            {resultado.livros.map(livro => 
                                <Book 
                                    key={livro.id}
                                    {...livro}
                                />
                            )}
                        </ul>
                    )}
                </>
            )}
        </main>
    )
}
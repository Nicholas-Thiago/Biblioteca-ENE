import { useEffect, useState } from "react"
import { buscaSinopse } from "../../services/openLibrary"

export default function Book(props){
    const [sinopse, setSinopse] = useState(null)
    const [carregando, setCarregando] = useState(true)
    useEffect(()=>{
        let cancelado = false
        setCarregando(true)
        buscaSinopse(props.id)
            .then((texto)=> {
                if (!cancelado){
                    setSinopse(texto)
                }
            }).catch(() => {}).finally(() => {
                if (!cancelado){
                    setCarregando(false)
                }})
        return () => {
            cancelado = true
        }
    }, [props.id])
    
    return(
        <li className="mx-1 my-2 p-2.5 group bg-fundo_claro border border-destaque rounded-[20px] flex gap-2 hover:bg-destaque hover:border-fundo hover:text-fundo">
            {props.capa ? (<img src={props.capa} alt={`Imagem do livro ${props.titulo}`} className="w-35 h-55 rounded-[20px]"/>) : <div className="w-35 h-55 bg-fundo rounded-[20px]"></div>}
            <div>
                <h4 className="font-bold my-4 p-2 text-xl">{props.titulo}</h4>
                <h5 className="font-medium my-4 p-2 text-sm text-gray-400 group-hover:text-gray-500">{props.autor} - {props.ano}</h5>
                {carregando && <p>Carregando sinopse...</p>}
                {!carregando && <p className="px-2 my-2 text-base font-light font-style: italic line-clamp-3">{sinopse ?? "Sinopse não disponível."}</p>}
            </div>
        </li>
    )
}
const urlAPI = "https://openlibrary.org/search.json"
    
export async function buscaLivros(busca){
    const params = new URLSearchParams({
        q: busca,
        fields: "key,title,author_name,first_publish_year,cover_i",
        lang: "pt",
        limit: "10"
    })

    const resposta = await fetch(`${urlAPI}?${params}`)

    if (!resposta.ok){
        throw new Error("Não foi possível buscar o livro.")
    }
    const dados = await resposta.json()
    return dados.docs.map((doc) => ({
        id: doc.key,
        titulo: doc.title,
        autor: doc.author_name?.[0] ?? "Autor desconhecido",
        ano: doc.first_publish_year,
        capa: doc.cover_i ? `https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` : null
    }))
}

export async function buscaSinopse(key){
    const resposta = await fetch(`https://openlibrary.org${key}.json`)

    if (!resposta.ok){
        throw new Error("Não foi possível buscar sinopse.")
    }

    const dados = await resposta.json()
    const sinopse = dados.description
    if (!sinopse) {
        return null
    }

    return typeof sinopse === "string" ? sinopse : sinopse.value
}
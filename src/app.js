class app {
    static async requisicao () {
        const response = await fetch(`https://kenzie-news-api.herokuapp.com/api/news`)
        const listaDeNoticias = await response.json()
        
        listaDeNoticias.forEach(noticia => {
            app.template(noticia)
        })
    }

    static async template (noticia) {  
        const ul = document.querySelector("ul")
        
        const li = document.createElement("li")
        const figure = document.createElement("figure")
        const img = document.createElement("img")
        const divContainer = document.createElement("div")
        const spanCategoria = document.createElement("span")
        const h2Titulo = document.createElement("h2")
        const aAncora = document.createElement("a")
        const pResumo = document.createElement("p")
        const spanFonte = document.createElement("span")

        spanFonte.innerText = `Fonte: ${noticia.fonte}`
        spanFonte.classList.add("spanFonte")
        pResumo.innerText = noticia.resumo
        aAncora.href = noticia.noticia_completa
        h2Titulo.innerText = noticia.titulo
        spanCategoria.innerText = noticia.categoria
        spanCategoria.classList.add("spanCategoria")
        divContainer.classList.add("divContainer")
        img.src = noticia.imagem

        aAncora.append(h2Titulo)
        divContainer.append(spanCategoria, aAncora, pResumo, spanFonte)
        figure.append(img)
        li.append(figure, divContainer)

        ul.append(li)
    }
}
app.requisicao()
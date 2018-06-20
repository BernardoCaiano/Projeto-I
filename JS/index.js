
    livrosStorage()
    
    let strHtml = ""
    let strHtml2 = ""

    let arrayMaisPontuados = []

    for (let i = 0; i < comentarios.length; i++) {
        arrayMaisPontuados.push(comentarios[i].pontuacao)  
    }

    arrayMaisPontuados.sort()
    arrayMaisPontuados.reverse()

    console.log(arrayMaisPontuados)

    let maisRecentes = document.getElementById("maisRecentes")

    strHtml2 = ` <div class="col-3"><img src="${livros[livros.length-1].capa}" class="img-thumbnail" alt="" height="240" width="160"></div>
                <div class="col-3"><img src="${livros[livros.length-2].capa}" class="img-thumbnail" alt="" height="240" width="160"></div>
                <div class="col-3"><img src="${livros[livros.length-3].capa}" class="img-thumbnail" alt="" height="240" width="160"></div>
                <div class="col-3"><img src="${livros[livros.length-4].capa}" class="img-thumbnail" alt="" height="240" width="160"></div>`

    maisRecentes.innerHTML = strHtml2
    
    function livrosStorage(){
        if(localStorage.livros) {
            let tempArray2 = JSON.parse(localStorage.getItem("livros"))
            
            for (let i = 0; i < tempArray2.length; i++) {
                
                let novoLivro =  new Livro(tempArray2[i]._id, tempArray2[i]._titulo, tempArray2[i]._capa, tempArray2[i]._descriçao, tempArray2[i]._autor, tempArray2[i]._editora, tempArray2[i]._dataLançamento, tempArray2[i]._numeroPaginas, tempArray2[i]._estado, tempArray2[i]._doador, tempArray2[i]._dataDoaçao)
                livros.push(novoLivro)       
            }
        }
            
    }

    


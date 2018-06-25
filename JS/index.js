
    let arrayMaisPontuados = []
    livrosStorage()
    
    carregarMaisPontuados()
    carregarMaisRecentes()
    
    function carregarMaisPontuados() {

        let strHtml = ""
        let maisPontuados = document.getElementById("maisPontuados")
        
        for (let i = 0; i < arrayMaisPontuados.length-1; i++) {
            for (let j = i+1; j < arrayMaisPontuados.length; j++) {
                if (arrayMaisPontuados[j].mediaPontuacoes > arrayMaisPontuados[i].mediaPontuacoes) {
                    for (let k = 0; k < livros.length; k++) {
                        if (livros[k].id == arrayMaisPontuados[j].id){
                            arrayMaisPontuados[j] = arrayMaisPontuados[i]
                            arrayMaisPontuados[i] = livros[k]  
                        } 
                    }
                }
            }  
        }
        
        strHtml = `<div class="col-3"><img src="${arrayMaisPontuados[0].capa}" class="img-thumbnail" alt="" height="240" width="160"></div>
                <div class="col-3"><img src="${arrayMaisPontuados[1].capa}" class="img-thumbnail" alt="" height="240" width="160"></div>
                <div class="col-3"><img src="${arrayMaisPontuados[2].capa}" class="img-thumbnail" alt="" height="240" width="160"></div>
                <div class="col-3"><img src="${arrayMaisPontuados[3].capa}" class="img-thumbnail" alt="" height="240" width="160"></div>`

        maisPontuados.innerHTML = strHtml
    }
    

    function carregarMaisRecentes() {

        let strHtml2 = ""
        let maisRecentes = document.getElementById("maisRecentes")

        strHtml2 = `<div class="col-3"><img src="${livros[livros.length-1].capa}" class="img-thumbnail" alt="" height="240" width="160"></div>
                <div class="col-3"><img src="${livros[livros.length-2].capa}" class="img-thumbnail" alt="" height="240" width="160"></div>
                <div class="col-3"><img src="${livros[livros.length-3].capa}" class="img-thumbnail" alt="" height="240" width="160"></div>
                <div class="col-3"><img src="${livros[livros.length-4].capa}" class="img-thumbnail" alt="" height="240" width="160"></div>`
        

        maisRecentes.innerHTML = strHtml2
    }

    function livrosStorage(){
        if(localStorage.livros) {
            let tempArray2 = JSON.parse(localStorage.getItem("livros"))
            
            for (var i = 0; i < tempArray2.length; i++) {
                
                let novoLivro =  new Livro(tempArray2[i]._id, tempArray2[i]._titulo, tempArray2[i]._capa, tempArray2[i]._descriçao, tempArray2[i]._autor, tempArray2[i]._editora, tempArray2[i]._dataLançamento, tempArray2[i]._numeroPaginas, tempArray2[i]._estado, tempArray2[i]._doador, tempArray2[i]._dataDoaçao, tempArray2[i]._categoria, tempArray2[i]._tags, tempArray2[i]._biblioteca, tempArray2[i]._requisitado, tempArray2[i]._somaPontuacoes, tempArray2[i]._numeroPontuacoes, tempArray2[i]._mediaPontuacoes)
                livros.push(novoLivro)  
                arrayMaisPontuados.push(novoLivro)     
            }
            
        }
            
    }

    
    

    
    
    


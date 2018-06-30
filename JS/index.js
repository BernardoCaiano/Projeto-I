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
        
        strHtml = `<div class="container-fluid">
                <div class="row">
                <div class="col"><a id="${arrayMaisPontuados[0].id}" class='verLivro' href = "../HTML/livro.html"><img src="${arrayMaisPontuados[0].capa}"  alt="" height="240" width="160"></a></div>
                <div class="col"><a id="${arrayMaisPontuados[1].id}" class='verLivro' href = "../HTML/livro.html"><img src="${arrayMaisPontuados[1].capa}"  alt="" height="240" width="160"></a></div>
                <div class="col"><a id="${arrayMaisPontuados[2].id}" class='verLivro' href = "../HTML/livro.html"><img src="${arrayMaisPontuados[2].capa}"  alt="" height="240" width="160"></a></div>
                <div class="col"><a id="${arrayMaisPontuados[3].id}" class='verLivro' href = "../HTML/livro.html"><img src="${arrayMaisPontuados[3].capa}"  alt="" height="240" width="160"></a></div>
                <div class="col"><a id="${arrayMaisPontuados[4].id}" class='verLivro' href = "../HTML/livro.html"><img src="${arrayMaisPontuados[4].capa}"  alt="" height="240" width="160"></a></div></div></div>`

        maisPontuados.innerHTML = strHtml
    }
    
    function carregarMaisRecentes() {

        let strHtml2 = ""
        let maisRecentes = document.getElementById("maisRecentes")

        strHtml2 = `<div class="container-fluid">
                <div class="row"><div class="col"><a id="${livros[livros.length-1].id}" class='verLivro' href = "../HTML/livro.html"><img src="${livros[livros.length-1].capa}"  alt="" height="240" width="160"></a></div>
                <div class="col"><a id="${livros[livros.length-2].id}" class='verLivro' href = "../HTML/livro.html"><img src="${livros[livros.length-2].capa}"  alt="" height="240" width="160"></a></div>
                <div class="col"><a id="${livros[livros.length-3].id}" class='verLivro' href = "../HTML/livro.html"><img src="${livros[livros.length-3].capa}"  alt="" height="240" width="160"></a></div>
                <div class="col"><a id="${livros[livros.length-4].id}" class='verLivro' href = "../HTML/livro.html"><img src="${livros[livros.length-4].capa}"  alt="" height="240" width="160"></a></div>
                <div class="col"><a id="${livros[livros.length-5].id}" class='verLivro' href = "../HTML/livro.html"><img src="${livros[livros.length-5].capa}"  alt="" height="240" width="160"></a></div></div></div>`
        

        maisRecentes.innerHTML = strHtml2
    }

    verLivro()

    function verLivro() {
        let verLivro = document.getElementsByClassName("verLivro")
        // For each link, add a listener to listen the click event
        for (let i = 0; i < verLivro.length; i++) {
            verLivro[i].addEventListener("click", function(event) {
                if (localStorage.getItem("utilizadorLogado") != null) {
                    // Ao clicar num livro especifico, ve-lo numa pagina
                    let livroId = verLivro[i].getAttribute("id")
                    localStorage.setItem("livroID", livroId)
                }
                else {
                    event.preventDefault()
                    alert("Para aceder a esses conteudos tem que fazer login!")
                }
            })        
        } 
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

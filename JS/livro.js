livroId = JSON.parse(localStorage.getItem("livroID"))
utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))
let array = []

livrosStorage()
carregarLivro(livroId)
carregarComentarios(livroId)

function carregarLivro(id) {

    let detalhesLivro = document.getElementById("detalhesLivro")
    let strHtml = ""
    for (let i = 0; i < livros.length; i++) {
        if (livros[i].id == id) {
            
            strHtml += `<div class="row">
                            <div class="col-3">
                                <img src="${livros[i].capa}" class="img-thumbnail" height="240" width="160" alt="">
                            </div>
                            <div class="col-9">
                                <div class="row">
                                    <div class="col-12">
                                        <h4>${livros[i].titulo}</h4>
                                        <h5>de ${livros[i].autor}</h5>
                                    </div>
                                    <div class="col-4"><p></p></div>
                                    <div class="col-4"><p></p></div>
                                    <div class="col-4"><p></p></div>
                                    <div class="col-4"><h6>Categoria</h6><p>${livros[i].categoria}</p></div>
                                    <div class="col-4"><h6>Tags</h6><p>${livros[i].tags}</p></div>
                                    <div class="col-4"><h6>Biblioteca</h6><p>${livros[i].biblioteca}</p></div>
                                    <div class="col-4"><h6>Editora</h6><p>${livros[i].editora}</p></div>
                                    <div class="col-4"><h6>Data de Lançamento</h6><p>${livros[i].dataLançamento}</p></div>
                                    <div class="col-4"><h6>Nº de Páginas</h6><p>${livros[i].numeroPaginas}</p></div>
                                    <div class="col-4"><h6>Estado do Livro</h6><p>${livros[i].estado}</p></div>
                                    <div class="col-4"><h6>Data de Doação</h6><p>${livros[i].dataDoaçao}</p></div>
                                    <div class="col-4"><h6>Nome do doador</h6><p>${livros[i].doador}</p></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12"><h6>Descrição</h6><p>${livros[i].descriçao}</p></div>
                        </div>`

                        
            livroIdRequisicao = livros[i].id  
                    
            let livroRequisitado = document.getElementById("livroRequisitado")
            if (livros[i].requisitado == true) {
                    btnRequisitar.style.display = "none"
                    livroRequisitado.style.display = "block"
                    
                }
                else {
                    btnRequisitar.style.display = "block"
                    livroRequisitado.style.display = "none"
                    
                }  
            }    
            
            if (utilizadorLogado._tipo == "admin" || utilizadorLogado._tipo == "operador") {
                btnRequisitar.style.display = "none"
                livroRequisitado.style.display = "none"
            }
    }
     
    detalhesLivro.innerHTML = strHtml
      
}

function carregarComentarios(id) {
    
    pontuacao(id)
    
    let carregarComentariosHtml = document.getElementById("carregarComentarios")
    
    let strHtml = ""
    
    let comentar = true
    cont = 0
    for (let i = 0; i < comentarios.length; i++) {
            
            if (comentarios[i].livroID == id) {
               
                if (utilizadores.length == 0) {
                    utilizadoresStorage()
                }
                for (let k = 0; k < utilizadores.length; k++) {
                 
                    if (comentarios[i].utilizadorID == utilizadores[k].id) {
                        if(comentarios[i].utilizadorID == utilizadorLogado._id) {
                            strHtml += `<div class="row align-items-center">
                                        <img src="${utilizadores[k].foto}" class="rounded-circle mr-3 ml-3" alt="" height="50" width="50">
                                       <h6>${utilizadores[k].nome}</h6>
                                       <div class="margem">
                                        <a id="${comentarios[i].id}" href="#"  class="btn btn-danger removerComentario mt-3"><i class="fas fa-trash-alt"></i> </a>
                                       </div>
                                       
                                    </div>
                                    <br>
                                    <div class="ml-2"><div>${array[cont]}</div>
                                    
                                    <p>${comentarios[i].comentario}</p></div>
                                    <br>
                                    <hr style="border-color:white">
                                    <br>`
                                    
                        
                        }
                        else {
                            strHtml += `<div class="row align-items-center">
                                        <img src="${utilizadores[k].foto}" class="rounded-circle mr-3 ml-3" alt="" height="50" width="50">
                                    
                                       <h6>${utilizadores[k].nome}</h6>
                                    </div>
                                    <br>
                                    <div class="ml-2"><div>${array[cont]}</div>
                                    
                                    <p>${comentarios[i].comentario}</p></div>
                                    <br>
                                    <hr style="border-color:white">
                                    <br>`
                        
                        }
                        cont++
                    } 

                }
            } 
              

            if (comentarios[i].utilizadorID == utilizadorLogado._id && comentarios[i].livroID == id) {              
                btnComentar.style.display = "none"
                estrelas.style.display = "none"
                comentario.style.display = "none"
                comentar = false
            }
            else if (comentar) {
                btnComentar.style.display = "block"
                estrelas.style.display = "block"
                comentario.style.display = "block"
            }  
            2
            
    }

    carregarComentariosHtml.innerHTML = strHtml
    
    let btnRemoverComentarios = document.getElementsByClassName("removerComentario")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRemoverComentarios.length; i++) {
        btnRemoverComentarios[i].addEventListener("click", function() {
            // Ao clicar num livro especifico, remover do array
            let comentarioId = btnRemoverComentarios[i].getAttribute("id")
            eliminarComentario(comentarioId)
            carregarComentarios()
            localStorage.setItem("comentarios", JSON.stringify(comentarios))
        })             
    }

}

function pontuacao(id) {
    
    let cont = 0 
    for (let i = 0; i < comentarios.length; i++) {
        if (comentarios[i].livroID == id) {
            
                    if (comentarios[i].pontuacao == 1) {
                        array[cont] = `<div class="poststar-rating">
                        <input id="star-5" type="radio" name="rating" class = "estrela" value="5" disabled>
                        <label for="star-5" title="5 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating"  class = "estrela" value="4" disabled>
                        <label for="star-4" title="4 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating" class = "estrela" value="3" disabled>
                        <label for="star-3" title="3 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating"  class = "estrela" value="2" disabled>
                        <label for="star-2" title="2 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating" class = "estrela" value="1" disabled>
                        <label for="star-1" title="1 star">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        </div>`
                    }
        
                    if (comentarios[i].pontuacao == 2) {
                      
                        array[cont] = `<div class="poststar-rating">
                        <input id="star-5" type="radio" name="rating" class = "estrela" value="5">
                        <label for="star-5" title="5 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating"  class = "estrela" value="4">
                        <label for="star-4" title="4 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating" class = "estrela" value="3">
                        <label for="star-3" title="3 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating"  class = "estrela" value="2">
                        <label for="star-2" title="2 stars">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating" class = "estrela" value="1">
                        <label for="star-1" title="1 star">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        </div>`
                    }
        
                    if (comentarios[i].pontuacao == 3) {

                        array[cont] = `<div class="poststar-rating">
                        <input id="star-5" type="radio" name="rating" class = "estrela" value="5">
                        <label for="star-5" title="5 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating"  class = "estrela" value="4">
                        <label for="star-4" title="4 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating" class = "estrela" value="3">
                        <label for="star-3" title="3 stars">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating"  class = "estrela" value="2">
                        <label for="star-2" title="2 stars">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating" class = "estrela" value="1">
                        <label for="star-1" title="1 star">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        </div>`
                    }
        
                    if (comentarios[i].pontuacao == 4) {

                        array[cont] = `<div class="poststar-rating">
                        <input id="star-5" type="radio" name="rating" class = "estrela" value="5">
                        <label for="star-5" title="5 stars">
                                <i class="active fa fa-star" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating"  class = "estrela" value="4">
                        <label for="star-4" title="4 stars">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating" class = "estrela" value="3">
                        <label for="star-3" title="3 stars">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating"  class = "estrela" value="2">
                        <label for="star-2" title="2 stars">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating" class = "estrela" value="1">
                        <label for="star-1" title="1 star">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        </div>`
                    }
        
                    if (comentarios[i].pontuacao == 5) {

                        array[cont] = `<div class="poststar-rating">
                        <input id="star-5" type="radio" name="rating" class = "estrela" value="5">
                        <label for="star-5" title="5 stars">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        <input id="star-4" type="radio" name="rating"  class = "estrela" value="4">
                        <label for="star-4" title="4 stars">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        <input id="star-3" type="radio" name="rating" class = "estrela" value="3">
                        <label for="star-3" title="3 stars">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        <input id="star-2" type="radio" name="rating"  class = "estrela" value="2">
                        <label for="star-2" title="2 stars">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        <input id="star-1" type="radio" name="rating" class = "estrela" value="1">
                        <label for="star-1" title="1 star">
                                <i class="active fa fa-star checked" aria-hidden="true"></i>
                        </label>
                        </div>`
                    }
                    cont++
        }       
    }   
}

function eliminarComentario(id){
    console.log(id)
    if (confirm("Tem a certeza que quer eliminar o Comentario?")){
        for (let i = 0; i < comentarios.length; i++) {
            if(comentarios[i].id == id) {
                for (let j = 0; j < livros.length; j++) {
                    if (livros[j].id == comentarios[i].livroID){
                        livros[j].somaPontuacoes = livros[j].somaPontuacoes - comentarios[i].pontuacao
                        livros[j].numeroPontuacoes = livros[j].numeroPontuacoes - 1 
                        livros[j].mediaPontuacoes = livros[j].somaPontuacoes / livros[j].numeroPontuacoes
                    }
                
                }
                localStorage.setItem("livros", JSON.stringify(livros))
                comentarios.splice(i, 1)
            }                
        }
    }
    
    location.reload()
}


function livrosStorage(){
    if(localStorage.livros) {
        let tempArray2 = JSON.parse(localStorage.getItem("livros"))
        
        for (let i = 0; i < tempArray2.length; i++) {
            
            let novoLivro =  new Livro(tempArray2[i]._id, tempArray2[i]._titulo, tempArray2[i]._capa, tempArray2[i]._descriçao, tempArray2[i]._autor, tempArray2[i]._editora, tempArray2[i]._dataLançamento, tempArray2[i]._numeroPaginas, tempArray2[i]._estado, tempArray2[i]._doador, tempArray2[i]._dataDoaçao, tempArray2[i]._categoria, tempArray2[i]._tags, tempArray2[i]._biblioteca, tempArray2[i]._requisitado, tempArray2[i]._somaPontuacoes, tempArray2[i]._numeroPontuacoes, tempArray2[i]._mediaPontuacoes)
            livros.push(novoLivro)       
        }
    }
        
}

function utilizadoresStorage(){
    
    if(localStorage.utilizadores) {
        let tempArray = JSON.parse(localStorage.getItem("utilizadores"))
    
        for (var i = 0; i < tempArray.length; i++) {
        
            let novoUtilizador =  new Utilizador(tempArray[i]._id, tempArray[i]._nome, tempArray[i]._email, tempArray[i]._password, tempArray[i]._tipo, tempArray[i]._foto, tempArray[i]._requisiçoes)
            utilizadores.push(novoUtilizador)       
        }
    } 
} 


livroId = JSON.parse(localStorage.getItem("livroID"))
utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))

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
                                    <div class="col-4"><h6>Categoria:</h6><p>Desporto</p></div>
                                    <div class="col-4"><h6>Tags:</h6><p>Futebol, FCPorto</p></div>
                                    <div class="col-4"><h6>Biblioteca:</h6><p>Vila do Conde</p></div>
                                    <div class="col-4"><h6>Editora:</h6><p>Porto Editora</p></div>
                                    <div class="col-4"><h6>Data de Lançamento:</h6><p>21/06/2018</p></div>
                                    <div class="col-4"><h6>Nº de Páginas:</h6><p>356</p></div>
                                    <div class="col-4"><h6>Estado do Livro:</h6><p>Bom</p></div>
                                    <div class="col-4"><h6>Data de Doação:</h6><p>21/06/2018</p></div>
                                    <div class="col-4"><h6>Nome do doador:</h6><p>Manuel Silva</p></div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12"<h6>Descrição:</h6><p>Depois de uma investigação rigorosa ao mundo dos bancos portugueses, Helena Garrido regressa para, num livro sobre a Caixa Geral de Depósitos, mostrar como o banco público serviu para negócios e operações duvidosas - sempre a mando do poder e sempre a perder dinheiro que pertence aos contribuintes. </p></div>
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
         
    }
     
    detalhesLivro.innerHTML = strHtml
      
}

function carregarComentarios(id) {
    console.log(id)

    let carregarComentarios = document.getElementById("carregarComentarios")
    
    let strHtml = ""
    
    let comentar = true
    
    for (let i = 0; i < comentarios.length; i++) {
      
            if (comentarios[i].livroID == id) {
               
                if (utilizadores.length == 0) {
                    utilizadoresStorage()
                }
                for (let k = 0; k < utilizadores.length; k++) {
                 
                    if (comentarios[i].utilizadorID == utilizadores[k].id) {
                        
                        strHtml += `<div class="row align-items-center">
                                        <img src="${utilizadores[k].foto}" class="rounded-circle mr-3 ml-3" alt="" height="50" width="50">
                                    
                                       <h6>${utilizadores[k].nome}</h6>
                                    </div>
                                    <br>
                                    <div class="ml-2"><h6>Pontuacao: ${comentarios[i].pontuacao} </h6><br>
                                    <h6>Comentario: </h6>
                                    <p>${comentarios[i].comentario}</p></div><br>`
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
                          
    }
    
    
    carregarComentarios.innerHTML = strHtml
        
}



function livrosStorage(){
    if(localStorage.livros) {
        let tempArray2 = JSON.parse(localStorage.getItem("livros"))
        
        for (let i = 0; i < tempArray2.length; i++) {
            
            let novoLivro =  new Livro(tempArray2[i]._id, tempArray2[i]._titulo, tempArray2[i]._capa, tempArray2[i]._descriçao, tempArray2[i]._autor, tempArray2[i]._editora, tempArray2[i]._dataLançamento, tempArray2[i]._numeroPaginas, tempArray2[i]._estado, tempArray2[i]._doador, tempArray2[i]._dataDoaçao, tempArray2[i]._categorias, tempArray2[i]._tags, tempArray2[i]._biblioteca, tempArray2[i]._requisitado)
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


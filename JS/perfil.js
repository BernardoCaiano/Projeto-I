let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))
let multa = JSON.parse(localStorage.getItem("multa"))
requisiçoesStorage()
comentariosStorage()
livrosStorage()
carregarPerfil()
carregarRequisicoes()
carregarHistoricoRequisicoes()
carregarHistoricoComentarios()
calcularMulta()

let naoMostrar = document.getElementById("naoMostrar")
if (utilizadorLogado._tipo == "admin" || utilizadorLogado._tipo == "operador") {
    naoMostrar.style.display = "none"
}

function carregarPerfil() {
    
      
    let perfil = document.getElementById("perfil")
    let strHtml = ""
    
         strHtml = `<div class="row">
        <div class="col-4">
            <img src="${utilizadorLogado._foto}" class="img-thumbnail" height="250" width="250" alt=""> 
        </div>
        <div class="col-8">
            
            <h4>Nome de Utilizador</h4>
            <p>${utilizadorLogado._nome}</p>
            <h4>Email</h4>
            <p>${utilizadorLogado._email}</p>
            
            <a name="editar" id="editar" href="#" data-toggle='modal' data-target='#editarPerfilModal' class="btn btn-dark "><i class="fas fa-edit"></i> Editar perfil</a>
        </div>
    </div> `
    
    
    
    perfil.innerHTML = strHtml

    let editar = document.getElementById("editar")
        
            editar.addEventListener("click", function() {
            
                        
            editarPerfilPorId(utilizadorLogado._id) 
            carregarPerfil(utilizadorLogado._id)
                                            
        })        
}

function editarPerfilPorId(id) {
    console.log(id)
    
    let frmEditarPerfil = document.getElementById("frmEditarPerfil")
    let inputNomeEditar = document.getElementById("inputNomeEditar")
    let inputEmailEditar = document.getElementById("inputEmailEditar")
    let inputNovaPassword1 = document.getElementById("inputNovaPassword1")
    let inputNovaPassword2 = document.getElementById("inputNovaPassword2")
    let inputAntigaPassword = document.getElementById("inputAntigaPassword")
    let inputFoto = document.getElementById("inputFoto")

    console.log(utilizadorLogado._nome)
    inputNomeEditar.value = utilizadorLogado._nome
    inputEmailEditar.value = utilizadorLogado._email
    inputFoto.value = utilizadorLogado._foto

    frmEditarPerfil.addEventListener("submit", function(event) {
        
            for (let i = 0; i < utilizadores.length; i++) {
                
                if(utilizadores[i].id == id) {
                    
                    utilizadores[i].nome = inputNomeEditar.value
                    utilizadores[i].email = inputEmailEditar.value
                    if (inputFoto.value != "") {
                        utilizadores[i].foto = inputFoto.value
                    }
                    
                    if (inputAntigaPassword.value != "" && inputNovaPassword1.value != "" && inputNovaPassword2.value != "" ) {
                        if (inputAntigaPassword.value == utilizadores[i].password) {
                            if (inputNovaPassword1.value == inputNovaPassword2.value) {
                                utilizadores[i].password = inputNovaPassword1.value
                            }
                            else {
                                alert("As passwords têm de ser iguais!" )
                            }
                        }
                        else {
                            alert("Password antiga invalida!")
                        }
                    }
                    
                    // Fechar a modal
                    $('#editarPerfilModal').modal('hide')
                    utilizadorLogado = utilizadores[i]
                    event.preventDefault()
                     
                }                             
            }
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
            localStorage.setItem("utilizadorLogado", JSON.stringify(utilizadorLogado))
            location.reload()   
    })   
}

function carregarRequisicoes() {
    
    let requisicoes = document.getElementById("requisicoes")
    let strHtml = ""
    let contRequisicoes = 0
    for (let i = 0; i < requisiçoes.length; i++) {
    
        if ((requisiçoes[i].utilizadorID == utilizadorLogado._id) && (requisiçoes[i].dataEntrega == "") ) {
            contRequisicoes ++
            for (let j = 0 ; j < livros.length; j++) {
                if (livros[j].id == requisiçoes[i].livroID) {
                
                        strHtml += `
                                <div class="row">
                    
                                <div class="col-3">
                                    <center><a id="${livros[j].id}" class='verLivro' href = "../HTML/livro.html"><img src="${livros[j].capa}" class="img-thumbnail" height="240" width="160" alt=""></a> 
                                    <a id = "${requisiçoes[i].id}" class="btn btn-dark entregar">Entregar</a></center>
                                    
                                </div>
                                <div class="col-9">
                                    <h4>${livros[j].titulo}</h4>
                                    <h5>de ${livros[j].autor}</h5>
                                    <br>
                                    
                                    <p><b>Data de Requisição:</b> ${requisiçoes[i].dataRequisiçao.toLocaleString()}</p>
                                    <p><b>Dias para entregar após data de requisição:</b> ${multa._diasRequisicao}</p>
                                    <p><b>Valor de multa diária após final do prazo de requisição:</b> ${multa._valorMulta}€</p>
                                    <p><b>Valor limite da multa:</b> ${multa._limiteValorMulta}€</p>
                                    <p><b>Multa:</b> ${requisiçoes[i].multa}€</p>
                                </div>
                                </div>
                                <br>`             
                }
            }
        }
    }
    if (contRequisicoes == 0) {
        strHtml += `<p>De momento nao tem livros requisitados.</p>` 
    }
            
    requisicoes.innerHTML = strHtml
    
}

verLivro()

function verLivro() {
    let verLivro = document.getElementsByClassName("verLivro")
    // For each link, add a listener to listen the click event
    for (let i = 0; i < verLivro.length; i++) {
        verLivro[i].addEventListener("click", function() {
            // Ao clicar num livro especifico, ve-lo numa pagina
            let livroId = verLivro[i].getAttribute("id")
            localStorage.setItem("livroID", livroId)
        })        
    }
}

let entregar = document.getElementsByClassName("entregar") 


for (let i = 0; i < entregar.length; i++) {
    entregar[i].addEventListener("click", function() {
        
        let requisitacaoID = entregar[i].getAttribute("id")
        for (let j = 0; j < requisiçoes.length; j++) {
            if (requisitacaoID == requisiçoes[j].id) {
                requisiçoes[j].dataEntrega = new Date().toLocaleString()
                for (let k = 0; k < utilizadores.length; k++) {
                    if (utilizadores[k].id == utilizadorLogado._id){
                        utilizadores[k].requisiçoes = utilizadores[k].requisiçoes - 1
                        utilizadorLogado._requisiçoes = utilizadorLogado._requisiçoes -1
                         
                    }
                }
                for (let l = 0; l < livros.length; l++) {
                    if (livros[l].id == requisiçoes[j].livroID) {
                        livros[l].requisitado = false
                    }
                }
                localStorage.setItem("livros", JSON.stringify(livros))
                localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
                localStorage.setItem("utilizadorLogado", JSON.stringify(utilizadorLogado))
                localStorage.setItem("requisiçoes", JSON.stringify(requisiçoes))
                location.reload()
            }   
        }
                     
    })        
}

//Codigo nao funciona a 100%
function calcularMulta(){
    let dataAtual = new Date()
 
    let diaDataAtual = dataAtual.getDate()
    
    console.log(diaDataAtual)
    for (let i = 0; i < requisiçoes.length; i++) {
        let diaDataRequisicao = requisiçoes[i].dataRequisiçao.getDate()
       
        let diferencaDias = diaDataAtual - diaDataRequisicao
        
        if (diferencaDias > multa._diasRequisicao ) {
            requisiçoes[i].multa = (diferencaDias - multa._diasRequisicao) * multa._valorMulta
        }
        console.log(requisiçoes[i].multa)
    }
    
}

function carregarHistoricoRequisicoes() {
    let historicoRequisicoes = document.getElementById("historicoRequisicoes")
    let strHtml = ""
    strHtml = "<thead class=' tabela'><tr>" +
                    "<th>Titulo</th>" +
                    "<th>Autor</th>" +
                    "<th>Data de Requisição</th>"+  
                    "<th>Data de Entrega</th>" +              
                    "</tr>" + 
                    "</thead><tbody>"
    for (let i = 0; i < requisiçoes.length; i++) {
        if ((requisiçoes[i].utilizadorID == utilizadorLogado._id) && (requisiçoes[i].dataEntrega != "") ) {
            
            for (let j = 0 ; j < livros.length; j++) {
                if (livros[j].id == requisiçoes[i].livroID) {
                    

                    strHtml += `<tr><td>${livros[j].titulo}</td>
                    <td>${livros[j].autor}</td>
                    <td>${requisiçoes[i].dataRequisiçao.toLocaleString()}</td>
                    <td>${requisiçoes[i].dataEntrega}</td></tr>`
                }
            }
        }
    }
    historicoRequisicoes.innerHTML = strHtml
}

function carregarHistoricoComentarios() {
    let historicoComentarios = document.getElementById("historicoComentarios")
    let strHtml = ""
    strHtml = "<thead class=' tabela'><tr>" +
                    "<th>Livro</th>" +
                    "<th>Pontuação</th>" +
                    "<th>Comentário</th>"+              
                    "</tr>" + 
                    "</thead><tbody>"
    for (let i = 0; i < comentarios.length; i++) {
        if (comentarios[i].utilizadorID == utilizadorLogado._id)  {
            
            for (let j = 0 ; j < livros.length; j++) {
                if (livros[j].id == comentarios[i].livroID) {
                    
                    strHtml += `<tr><td>${livros[j].titulo}</td>
                    <td>${comentarios[i].pontuacao}</td>
                    <td>${comentarios[i].comentario}</td></tr>`
                }
            }
        }
    }
    historicoComentarios.innerHTML = strHtml
}

function requisiçoesStorage() {
    if(localStorage.requisiçoes) {
        let tempArrayReq = JSON.parse(localStorage.getItem("requisiçoes"))
        
        for (var i = 0; i < tempArrayReq.length; i++) {
            
            let novaRequisiçao =  new Requisiçao(tempArrayReq[i]._utilizadorID, tempArrayReq[i]._livroID, new Date(tempArrayReq[i]._dataRequisiçao), tempArrayReq[i]._dataEntrega, tempArrayReq[i]._multa)
            requisiçoes.push(novaRequisiçao)       
        }
    }
}

function comentariosStorage() {
    if(localStorage.comentarios) {
        let tempArrayCom = JSON.parse(localStorage.getItem("comentarios"))

        for (let i = 0; i < tempArrayCom.length; i++) {
                
            let novoComentario =  new Comentario(tempArrayCom[i]._id, tempArrayCom[i]._utilizadorID, tempArrayCom[i]._livroID, tempArrayCom[i]._comentario, tempArrayCom[i]._pontuacao)
            comentarios.push(novoComentario)       
        }
    }
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

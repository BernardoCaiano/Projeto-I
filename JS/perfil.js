requisiçoesStorage()
livrosStorage()
carregarPerfil()
carregarRequisicoes()


function carregarPerfil() {
    let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))
      
    let perfil = document.getElementById("perfil")
    let strHtml = ""
    if (utilizadorLogado._foto == "") {
         strHtml = `<div class="row">
                    <div class="col-3">
                        <img src="../imagens/perfil.jpg" class="img-thumbnail" height="250" width="250" alt=""> 
                    </div>
                    <div class="col-9">
                        
                        <h4>Nome de Utilizador</h4>
                        <p>${utilizadorLogado._nome}</p>
                        <h4>Email</h4>
                        <p>${utilizadorLogado._email}</p>
                        
                        <a name="editar" id="editar" href="#" data-toggle='modal' data-target='#editarPerfilModal' class="btn btn-dark "><i class="fas fa-edit"></i> Editar perfil</a>
                    </div>
                </div> `
    }
    else {
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
    }
    
    
    perfil.innerHTML = strHtml

    let editar = document.getElementById("editar")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        
            editar.addEventListener("click", function() {
            // Ao clicar num livro especifico, editar no form
            //utilizadorId = editar.getAttribute("id")
                        
            editarPerfilPorId(utilizadorLogado._id) 
            carregarPerfil(utilizadorLogado._id)
                                            
        })        
}

function editarPerfilPorId(id) {
    console.log(id)
    let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))
    
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
    let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))
    
    let requisicoes = document.getElementById("requisicoes")
    let strHtml = ""

    for (let i = 0; i < requisiçoes.length; i++) {
        
        if (requisiçoes[i].utilizadorID == utilizadorLogado._id ) {
            
            for (let j = 0, cont = 0; j < livros.length; j++) {
                if (livros[j].id == requisiçoes[i].livroID) {
                    if(cont % 6 == 0) {
                        strHtml += `<div class="row">`    
                    }

                    strHtml += `
                    <div class="col-2"><a id="${livros[j].id}" border="5" class='verModal' data-toggle='modal' data-target='#livroModal'><img src="${livros[j].capa}" class="img-thumbnail" alt="" height="240" width="160"></a> <br>
                    <center><a id="${livros[j].id}" class='verModal' data-toggle='modal' data-target='#livroModal'><p><b>${livros[j].titulo}</b></a> <br>
                             de ${livros[j].autor}</p>  </center>
                    </div>`

                    if(cont % 6 == 5) {
                        strHtml += `</div>`    
                    } 
                    cont++
                }
            }
        }
        
    }
            
        
    requisicoes.innerHTML = strHtml
    
}

function requisiçoesStorage() {
    if(localStorage.requisiçoes) {
        let tempArrayReq = JSON.parse(localStorage.getItem("requisiçoes"))
        
        for (var i = 0; i < tempArrayReq.length; i++) {
            
            let novaRequisiçao =  new Requisiçao(tempArrayReq[i]._utilizadorID, tempArrayReq[i]._livroID, tempArrayReq[i]._dataRequisiçao, tempArrayReq[i]._dataEntrega)
            requisiçoes.push(novaRequisiçao)       
        }
    }
}

function livrosStorage(){
    if(localStorage.livros) {
        let tempArray2 = JSON.parse(localStorage.getItem("livros"))
        
        for (let i = 0; i < tempArray2.length; i++) {
            
            let novoLivro =  new Livro(tempArray2[i]._titulo, tempArray2[i]._capa, tempArray2[i]._descriçao, tempArray2[i]._autor, tempArray2[i]._editora, tempArray2[i]._dataLançamento, tempArray2[i]._numeroPaginas, tempArray2[i]._estado, tempArray2[i]._doador, tempArray2[i]._dataDoaçao, tempArray2[i]._categorias, tempArray2[i]._tags, tempArray2[i]._biblioteca, tempArray2[i]._requisitado)
            livros.push(novoLivro)       
        }
    }
        
}

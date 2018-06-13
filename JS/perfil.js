
carregarPerfil()

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


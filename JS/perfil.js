utilizadoresStorage()
carregarPerfil()

function carregarPerfil() {
    let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))
      
    let perfil = document.getElementById("perfil")
    
    
    let strHtml = `<div class="row">
                    <div class="col-4">
                        <img src="../imagens/perfil.jpg" height="300" width="300" alt=""> 
                    </div>
                    <div class="col-8">
                        <br>
                        <h4>Nome de Utilizador</h4>
                        <p>${utilizadorLogado._nome}</p>
                        <h4>Email</h4>
                        <p>${utilizadorLogado._email}</p>
                        <br>
                        <a name="editar" id="${utilizadorLogado._id}" href="#" data-toggle='modal' data-target='#editarPerfilModal' class="btn btn-dark "><i class="fas fa-edit"></i> Editar perfil</a>
                    </div>
                    </div> `
    
    
    perfil.innerHTML = strHtml

    let editar = document.getElementsByName("editar")
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

    let inputNome = document.getElementById("inputNome")
    let inputEmail = document.getElementById("inputEmail").value
    let inputNovaPassword1 = document.getElementById("inputNovaPassword1").value
    let inputNovaPassword2 = document.getElementById("inputNovaPassword2").value
    console.log(utilizadorLogado._nome)
    inputNome.value = utilizadorLogado._nome


    frmEditarPerfil.addEventListener("submit", function(event) {
        
         
        if (inputNovaPassword1 == inputNovaPassword2) {
            
            for (let i = 0; i < utilizadores.length; i++) {
                
                if(utilizadores[i].id == id) {
                
                    utilizadores[i].nome = inputNome.value
                    utilizadores[i].email = inputEmail
                    utilizadores[i].password = inputNovaPassword1
                    
                        
                    // Fechar a modal
                    $('#editarPerfilModal').modal('hide')
                    
                    event.preventDefault()
                        
                }                             
            }
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
            location.reload()   
                   
        }
        else {
            alert("As passwords têm de ser iguais!" )
        }
        
        
        
    })
    
}

function utilizadoresStorage(){
    
    if(localStorage.utilizadores) {
        let tempArray = JSON.parse(localStorage.getItem("utilizadores"))
    
        for (var i = 0; i < tempArray.length; i++) {
        
            let novoUtilizador =  new Utilizador(tempArray[i]._nome, tempArray[i]._email, tempArray[i]._password, tempArray[i]._tipo, tempArray[i]._foto)
            utilizadores.push(novoUtilizador)       
        }
    } 
} 

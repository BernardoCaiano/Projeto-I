utilizadoresStorage()
carregarUtilizadores()


function carregarUtilizadores() {
    let gerirUtilizadores = document.getElementById("gerirUtilizadores")
    let strHtml = ""
    strHtml = "<thead class=' thead-dark'><tr>" +
                    "<th>Nome</th>" +
                    "<th>Email</th>" +
                    "<th>Password</th>"+  
                    "<th>Tipo</th>" +
                    "<th>Foto</th>" +
                    "<th>Ações</th>" +              
                    "</tr>" + 
                    "</thead><tbody>"

    for (let i = 0; i < utilizadores.length; i++) {   
        strHtml += `<tr><td>${utilizadores[i].nome}</td>
        <td>${utilizadores[i].email}</td>
        <td>${utilizadores[i].password}</td>
        <td>${utilizadores[i].tipo}</td>
        <td>${utilizadores[i].foto}</td>
        <td><a id="${utilizadores[i].id}" href="#"  class="btn btn-danger remove"><i class="fas fa-trash-alt"></i></a>
        <a id="${utilizadores[i].id}" href="#" id="admin" class="btn btn-dark admin">Tornar Admin</a>  
        <a id="${utilizadores[i].id}" href="#" id="operador" class="btn btn-dark operador">Tornar Operador</td></tr>`
        
        
    }

    
    
    gerirUtilizadores.innerHTML = strHtml

    let btnRemover = document.getElementsByClassName("remove")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRemover.length; i++) {
        btnRemover[i].addEventListener("click", function() {
            // Ao clicar num utilizador especifico, remover do array
            let utilizadorId = btnRemover[i].getAttribute("id")
            eliminarUtilizador(utilizadorId)
            carregarUtilizadores(utilizadorId)
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
        })        
            
    }

    let btnAdmin = document.getElementsByClassName("admin")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnAdmin.length; i++) {
        btnAdmin[i].addEventListener("click", function() {
            
            let utilizadorId = btnRemover[i].getAttribute("id")
            tornarAdmin(utilizadorId)
            carregarUtilizadores(utilizadorId)
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
        })        
            
    }

}
let admin = document.getElementById("admin")
for (let i = 0; i < utilizadores.length; i++) {
    if (utilizadores[i].tipo == "admin") {
        
        admin.style.display = "disabled"
    }
}


function eliminarUtilizador(id){
    if (confirm("Tem a certeza que quer eliminar o utilizador?")){
        for (let i = 0; i < utilizadores.length; i++) {
            if(utilizadores[i].id == id) {
                utilizadores.splice(i, 1)
            }    
                        
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
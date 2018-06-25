
utilizadoresStorage()
carregarUtilizadores()


function carregarUtilizadores() {
    let gerirUtilizadores = document.getElementById("gerirUtilizadores")
    let strHtml = ""
    strHtml = "<thead class=' thead-dark'><tr>" +
                    "<th>ID</th>" +
                    "<th>Nome</th>" +
                    "<th>Email</th>" +
                    "<th>Password</th>"+  
                    "<th>Tipo</th>" +
                    "<th>Foto</th>" +
                    "<th>Ações</th>" +              
                    "</tr>" + 
                    "</thead><tbody>"

    for (let i = 0; i < utilizadores.length; i++) {   
        strHtml += `<tr><td>${utilizadores[i].id}</td>
        <td>${utilizadores[i].nome}</td>
        <td>${utilizadores[i].email}</td>
        <td>${utilizadores[i].password}</td>
        <td>${utilizadores[i].tipo}</td>
        <td>${utilizadores[i].foto}</td>
        <td><a id="${utilizadores[i].id}" href="#" class="btn btn-danger remove"><i class="fas fa-trash-alt"></i></a>
        <a id="${utilizadores[i].id}" href="#" class="btn btn-dark tornarAdmin">Tornar Admin</a>
        <a id="${utilizadores[i].id}" href="#" class="btn btn-dark retirarAdmin">Retirar Admin</a>  
        <a id="${utilizadores[i].id}" href="#" class="btn btn-dark tornarOperador">Tornar Operador</a>
        <a id="${utilizadores[i].id}" href="#" class="btn btn-dark retirarOperador">Retirar Operador</a></td></tr>`
        
        
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

    let btnTornarAdmin = document.getElementsByClassName("tornarAdmin")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnTornarAdmin.length; i++) {
        btnTornarAdmin[i].addEventListener("click", function() {
            // Ao clicar num utilizador especifico, remover do array
            let utilizadorId = btnTornarAdmin[i].getAttribute("id")
            
            tornarAdmin(utilizadorId)
            carregarUtilizadores(utilizadorId)
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
        })        

    }

    let btnRetirarAdmin = document.getElementsByClassName("retirarAdmin")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRetirarAdmin.length; i++) {
        btnRetirarAdmin[i].addEventListener("click", function() {
            // Ao clicar num utilizador especifico, remover do array
            let utilizadorId = btnRetirarAdmin[i].getAttribute("id")
            
            retirarAdmin(utilizadorId)
            carregarUtilizadores(utilizadorId)
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
        })        

    }

    let btnTornarOperador = document.getElementsByClassName("tornarOperador")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnTornarOperador.length; i++) {
        btnTornarOperador[i].addEventListener("click", function() {
            // Ao clicar num utilizador especifico, remover do array
            let utilizadorId = btnTornarOperador[i].getAttribute("id")
            
            tornarOperador(utilizadorId)
            carregarUtilizadores(utilizadorId)
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
        })        

    }

    let btnRetirarOperador = document.getElementsByClassName("retirarOperador")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRetirarOperador.length; i++) {
        btnRetirarOperador[i].addEventListener("click", function() {
            // Ao clicar num utilizador especifico, remover do array
            let utilizadorId = btnRetirarOperador[i].getAttribute("id")
            
            retirarOperador(utilizadorId)
            carregarUtilizadores(utilizadorId)
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
        })        

    }

    for (let i = 0; i < btnTornarAdmin.length; i++) {
        let utilizadorId = btnTornarAdmin[i].getAttribute("id")
        for (let j = 0; j < utilizadores.length; j++){
            if (utilizadores[j].id == utilizadorId) {
                if (utilizadores[j].tipo == "admin") {
                    btnTornarAdmin[i].style.display = "none"
                }
                
            }
        } 
    }

    for (let i = 0; i < btnRetirarOperador.length; i++) {
        let utilizadorId = btnRetirarOperador[i].getAttribute("id")
        for (let j = 0; j < utilizadores.length; j++){
            if (utilizadores[j].id == utilizadorId) {
                if (utilizadores[j].tipo == "admin") {
                    btnRetirarOperador[i].style.display = "none"
                }
                
            }
        } 
    }
    
    for (let i = 0; i < btnRetirarAdmin.length; i++) {
        let utilizadorId = btnRetirarAdmin[i].getAttribute("id")
        for (let j = 0; j < utilizadores.length; j++){
            if (utilizadores[j].id == utilizadorId) {
                if (utilizadores[j].tipo == "operador") {
                    btnRetirarAdmin[i].style.display = "none"
                }
                
            }
        } 
    }

    for (let i = 0; i < btnTornarOperador.length; i++) {
        let utilizadorId = btnTornarOperador[i].getAttribute("id")
        for (let j = 0; j < utilizadores.length; j++){
            if (utilizadores[j].id == utilizadorId) {
                if (utilizadores[j].tipo == "operador") {
                    btnTornarOperador[i].style.display = "none"
                }
                
            }
        } 
    }

    for (let i = 0; i < btnRetirarAdmin.length; i++) {
        let utilizadorId = btnRetirarAdmin[i].getAttribute("id")
        for (let j = 0; j < utilizadores.length; j++){
            if (utilizadores[j].id == utilizadorId) {
                if (utilizadores[j].tipo == "utilizador") {
                    btnRetirarAdmin[i].style.display = "none"
                }
                
            }
        }  
    }

    for (let i = 0; i < btnRetirarOperador.length; i++) {
        let utilizadorId = btnRetirarOperador[i].getAttribute("id")
        for (let j = 0; j < utilizadores.length; j++){
            if (utilizadores[j].id == utilizadorId) {
                if (utilizadores[j].tipo == "utilizador") {
                    btnRetirarOperador[i].style.display = "none"
                }
                
            }
        } 
    }

}

function tornarAdmin(id) {
    for (let i = 0; i < utilizadores.length; i++) {
        if (utilizadores[i].id == id) {
            utilizadores[i].tipo = "admin"
        }
    }
}

function retirarAdmin(id) {
    for (let i = 0; i < utilizadores.length; i++) {
        if (utilizadores[i].id == id) {
            utilizadores[i].tipo = "utilizador"
        }
    }
}

function tornarOperador(id) {
    for (let i = 0; i < utilizadores.length; i++) {
        if (utilizadores[i].id == id) {
            utilizadores[i].tipo = "operador"
        }
    }
}

function retirarOperador(id) {
    for (let i = 0; i < utilizadores.length; i++) {
        if (utilizadores[i].id == id) {
            utilizadores[i].tipo = "utilizador"
        }
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


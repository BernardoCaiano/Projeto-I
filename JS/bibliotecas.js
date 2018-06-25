bibliotecasStorage()
carregarBibliotecas()

let inputFreguesia = document.getElementById("inputFreguesia")
let inputMorada = document.getElementById("inputMorada")
let inputLatitude = document.getElementById("inputLatitude")
let inputLongitude = document.getElementById("inputLongitude")
let frmBibliotecas = document.getElementById("frmBibliotecas")

frmBibliotecas.addEventListener("submit", function(){
    let novaBiblioteca = new Biblioteca (getLastIdBibliotecas() + 1, inputFreguesia.value, inputMorada.value, inputLatitude.value, inputLongitude.value)
    bibliotecas.push(novaBiblioteca)
    localStorage.setItem("bibliotecas", JSON.stringify(bibliotecas))
    carregarBibliotecas()
})

function carregarBibliotecas() {
    let gerirBibliotecas = document.getElementById("gerirBibliotecas")
    let strHtml = ""
    strHtml = "<thead class='thead-dark'><tr>" +
                    "<th>ID</th>" +
                    "<th>Freguesia</th>" +
                    "<th>Morada</th>" +
                    "<th>Latitude</th>" +
                    "<th>Longitude</th>" +
                    "<th>Ações</th>" +
                    "</thead><tbody>"

    for (let i = 0; i < bibliotecas.length; i++) {  

        strHtml += `<tr><td>${bibliotecas[i].id}</td>
        <td>${bibliotecas[i].freguesia}</td>
        <td>${bibliotecas[i].morada}</td>
        <td>${bibliotecas[i].latitude}</td>
        <td>${bibliotecas[i].longitude}</td>
        <td><a id="${bibliotecas[i].id}" href="#"  class="btn btn-danger removerBibliotecas"><i class="fas fa-trash-alt"></i></a>
            <a id="${bibliotecas[i].id}" href="#" data-toggle='modal'  data-target='#bibliotecaModal' class="btn btn-dark editarBibliotecas"><i class="fas fa-edit"></i></a></td>
        </tr>`
 
    }
    gerirBibliotecas.innerHTML = strHtml

    let btnRemoverBibliotecas = document.getElementsByClassName("removerBibliotecas")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRemoverBibliotecas.length; i++) {
        btnRemoverBibliotecas[i].addEventListener("click", function() {
            // Ao clicar num livro especifico, remover do array
            let bibliotecaId = btnRemoverBibliotecas[i].getAttribute("id")
            eliminarBiblioteca(bibliotecaId)
            carregarBibliotecas(bibliotecaId)
            localStorage.setItem("bibliotecas", JSON.stringify(bibliotecas))
        })             
    }

    let btnEditarBibliotecass = document.getElementsByClassName("editarBibliotecas")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnEditarBibliotecass.length; i++) {
        btnEditarBibliotecass[i].addEventListener("click", function(event) {
            // Ao clicar num livro especifico, editar no form
            let bibliotecaId = btnEditarBibliotecass[i].getAttribute("id")

            editarBibliotecaPorId(bibliotecaId)
            carregarTags(bibliotecaId)
            event.preventDefault()
                         
        })        
    }  

}

function eliminarBiblioteca(id){
    if (confirm("Tem a certeza que quer eliminar a Biblioteca?")){
        for (let i = 0; i < bibliotecas.length; i++) {
            if(bibliotecas[i].id == id) {
                bibliotecas.splice(i, 1)
            }    
                        
        }
    }
}

function editarBibliotecaPorId(id) {
  
    let inputFreguesiaEditar = document.getElementById("inputFreguesiaEditar")
    let inputMoradaEditar = document.getElementById("inputMoradaEditar")
    let inputLatitudeEditar = document.getElementById("inputLatitudeEditar")
    let inputLongitudeEditar = document.getElementById("inputLongitudeEditar")
    let frmEditarBibliotecas = document.getElementById("frmEditarBibliotecas")
    
    //Preencher o formulario de edicao da biblioteca
    for (let j = 0; j < bibliotecas.length; j++) {
        if(bibliotecas[j].id == id) {

            inputFreguesiaEditar.value = bibliotecas[j].freguesia
            inputMoradaEditar.value = bibliotecas[j].morada
            inputLatitudeEditar.value = bibliotecas[j].latitude
            inputLongitudeEditar.value = bibliotecas[j].longitude
        }
    }

    frmEditarBibliotecas.addEventListener("submit", function(event) {
        for (let i = 0; i < bibliotecas.length; i++) {
            if(bibliotecas[i].id == id) {
                
                bibliotecas[i].freguesia = inputFreguesiaEditar.value
                bibliotecas[i].morada = inputMoradaEditar.value
                bibliotecas[i].latitude = inputLatitudeEditar.value
                bibliotecas[i].longitude = inputLongitudeEditar.value
                
                // Fechar a modal
                $('#bibliotecaModal').modal('hide')
                
                event.preventDefault()
            }                                    
        }
        localStorage.setItem("bibliotecas", JSON.stringify(bibliotecas))
        location.reload()
    })
    
}

function bibliotecasStorage(){
    
    if(localStorage.bibliotecas) {
        let tempArray = JSON.parse(localStorage.getItem("bibliotecas"))
    
        for (let i = 0; i < tempArray.length; i++) {
        
            let novaBiblioteca =  new Biblioteca (tempArray[i]._id, tempArray[i]._freguesia,  tempArray[i]._morada, tempArray[i]._latitude, tempArray[i]._longitude)
            bibliotecas.push(novaBiblioteca)       
        }
    } 
} 

function getLastIdBibliotecas() {
    let lastIdBibliotecas = 0
    if (bibliotecas.length > 0) {
        lastIdBibliotecas = bibliotecas[bibliotecas.length-1].id
    }        
    return lastIdBibliotecas
}
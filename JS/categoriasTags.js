categoriasStorage()
tagsStorage()
carregarCategorias()
carregarTags()

let inputTag = document.getElementById("inputTag")
let inputCategoria = document.getElementById("inputCategoria")
let btnCategoria = document.getElementById("btnCategoria")
let btnTag = document.getElementById("btnTag")

btnCategoria.addEventListener("click", function(){
    let novaCategoria = new Categoria (getLastIdCategorias() + 1, inputCategoria.value)
    categorias.push(novaCategoria)
    localStorage.setItem("categorias", JSON.stringify(categorias))
    carregarCategorias()
})

btnTag.addEventListener("click", function(){
    let novaTag = new Tag (getLastIdTags() + 1, inputTag.value)
    tags.push(novaTag)
    localStorage.setItem("tags", JSON.stringify(tags))
    carregarTags()
    
})

function carregarCategorias() {
    let gerirCategorias = document.getElementById("gerirCategorias")
    let strHtml = ""
    strHtml = "<thead class='thead-dark'><tr>" +
                    "<th>ID</th>" +
                    "<th>Categoria</th>" +
                    "<th>Ações</th>" +
                    "</thead><tbody>"

    for (let i = 0; i < categorias.length; i++) {  

        strHtml += `<tr><td>${categorias[i].id}</td>
        <td>${categorias[i].categoria}</td>
        <td><a id="${categorias[i].id}" href="#"  class="btn btn-danger removerCategorias"><i class="fas fa-trash-alt"></i></a>
            <a id="${categorias[i].id}" href="#" data-toggle='modal'  data-target='#categoriaModal' class="btn btn-dark editarCategorias"><i class="fas fa-edit"></i></a></td>
        </tr>`
 
    }
    gerirCategorias.innerHTML = strHtml

    let btnRemoverCategorias = document.getElementsByClassName("removerCategorias")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRemoverCategorias.length; i++) {
        btnRemoverCategorias[i].addEventListener("click", function() {
            // Ao clicar num livro especifico, remover do array
            let categoriaId = btnRemoverCategorias[i].getAttribute("id")
            eliminarCategoria(categoriaId)
            carregarCategorias(categoriaId)
            localStorage.setItem("categorias", JSON.stringify(categorias))
        })             
    }

    let btnEditarCategorias = document.getElementsByClassName("editarCategorias")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnEditarCategorias.length; i++) {
        btnEditarCategorias[i].addEventListener("click", function(event) {
            console.log(btnEditarCategorias.length)
            // Ao clicar num livro especifico, editar no form
            let categoriaId = btnEditarCategorias[i].getAttribute("id")

            editarCategoriaPorId(categoriaId)
            carregarCategorias(categoriaId)
            event.preventDefault()
                         
        })        
    }  

}

function carregarTags() {
    let gerirTags = document.getElementById("gerirTags")
    let strHtml = ""
    strHtml = "<thead class=' thead-dark'><tr>" +
                    "<th>ID</th>" +
                    "<th>Tags</th>" +
                    "<th>Ações</th>" +
                    "</thead><tbody>"

    for (let i = 0; i < tags.length; i++) {  

        strHtml += `<tr><td>${tags[i].id}</td>
        <td>${tags[i].tag}</td>
        <td><a id="${tags[i].id}" href="#"  class="btn btn-danger removerTags"><i class="fas fa-trash-alt"></i></a>
            <a id="${tags[i].id}" href="#" data-toggle='modal'  data-target='#tagModal' class="btn btn-dark editarTags"><i class="fas fa-edit"></i></a></td>
        </tr>`
 
    }
    gerirTags.innerHTML = strHtml

    let btnRemoverTags = document.getElementsByClassName("removerTags")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnRemoverTags.length; i++) {
        btnRemoverTags[i].addEventListener("click", function() {
            // Ao clicar num livro especifico, remover do array
            let tagId = btnRemoverTags[i].getAttribute("id")
            eliminarTag(tagId)
            carregarTags(tagId)
            localStorage.setItem("tags", JSON.stringify(tags))
        })             
    }

    let btnEditarTags = document.getElementsByClassName("editarTags")
    // Para cada botão, adicionar um listener para escutar pelo evento clique
    for (let i = 0; i < btnEditarTags.length; i++) {
        btnEditarTags[i].addEventListener("click", function(event) {
            // Ao clicar num livro especifico, editar no form
            let tagId = btnEditarTags[i].getAttribute("id")

            editarTagPorId(tagId)
            carregarTags(tagId)
            event.preventDefault()
                         
        })        
    }  
}

function eliminarCategoria(id){
    console.log(id)
    if (confirm("Tem a certeza que quer eliminar a Categoria?")){
        for (let i = 0; i < categorias.length; i++) {
            if(categorias[i].id == id) {
                categorias.splice(i, 1)
            }    
                        
        }
    }
}

function eliminarTag(id){
    if (confirm("Tem a certeza que quer eliminar o livro?")){
        for (let i = 0; i < tags.length; i++) {
            if(tags[i].id == id) {
                tags.splice(i, 1)
            }    
                        
        }
    }
}

function editarCategoriaPorId(id) {
    console.log(id)
  
    let frmEditarCategoria = document.getElementById("frmEditarCategoria")
    let inputCategoriaEditar = document.getElementById("inputCategoriaEditar")
    
    //Preencher o formulario de edicao da categoria
    for (let j = 0; j < categorias.length; j++) {
        if(categorias[j].id == id) {
            inputCategoriaEditar.value = categorias[j].categoria
        }
    }

    frmEditarCategoria.addEventListener("submit", function(event) {
        for (let i = 0; i < categorias.length; i++) {
            if(categorias[i].id == id) {
                
                categorias[i].categoria = inputCategoriaEditar.value
                
                // Fechar a modal
                $('#categoriaModal').modal('hide')
                
                event.preventDefault()
            }                                    
        }
        localStorage.setItem("categorias", JSON.stringify(categorias))
        location.reload()
    })
    
}

function editarTagPorId(id) {
  
    let frmEditarTag = document.getElementById("frmEditarTag")
    let inputTagEditar = document.getElementById("inputTagEditar")
    
    //Preencher o formulario de edicao da categoria
    for (let j = 0; j < tags.length; j++) {
        if(tags[j].id == id) {
            inputTagEditar.value = tags[j].tag
        }
    }

    frmEditarTag.addEventListener("submit", function(event) {
        for (let i = 0; i < tags.length; i++) {
            if(tags[i].id == id) {
                
                tags[i].tag = inputTagEditar.value
                
                // Fechar a modal
                $('#tagModal').modal('hide')
                
                event.preventDefault()
            }                                    
        }
        localStorage.setItem("tags", JSON.stringify(tags))
        location.reload()
    })
    
}

function categoriasStorage(){
    
    if(localStorage.categorias) {
        let tempArray = JSON.parse(localStorage.getItem("categorias"))
    
        for (let i = 0; i < tempArray.length; i++) {
        
            let novaCategoria =  new Categoria (tempArray[i]._id, tempArray[i]._categoria)
            categorias.push(novaCategoria)       
        }
    } 
} 

function tagsStorage(){
    
    if(localStorage.tags) {
        let tempArray = JSON.parse(localStorage.getItem("tags"))
    
        for (let i = 0; i < tempArray.length; i++) {
        
            let novaTag =  new Tag (tempArray[i]._id, tempArray[i]._tag)
            tags.push(novaTag)       
        }
    } 
} 

function getLastIdCategorias() {
    let lastIdCategorias = 0
    if (categorias.length > 0) {
        lastIdCategorias = categorias[categorias.length-1].id
    }        
    return lastIdCategorias
}

function getLastIdTags() {
    let lastIdTags = 0
    if (tags.length > 0) {
        lastIdTags = tags[tags.length-1].id
    }        
    return lastIdTags
}
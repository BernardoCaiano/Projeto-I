let categorias = []

class Categoria {
    constructor(id, categoria) {
        this.id = id
        this.categoria = categoria
    }

    // Propriedade id
    get id() {
        return this._id
    }

    set id(novoID) {
        this._id = novoID        
    }

    // Propriedade categoria
    get categoria() {
        return this._categoria
    }

    set categoria(novaCategoria) {
        this._categoria = novaCategoria       
    }
    
}

let tags = []

class Tag {
    constructor(id, tag) {
        this.id = id
        this.tag = tag
        
    }

    // Propriedade id
    get id() {
        return this._id
    }

    set id(novoID) {
        this._id = novoID        
    }

    // Propriedade tag
    get tag() {
        return this._tag
    }

    set tag(novaTag) {
        this._tag = novaTag       
    }
    
}

let inputTag = document.getElementById("inputTag")
let inputCategoria = document.getElementById("inputCategoria")
let btnCategoria = document.getElementById("btnCategoria")
let btnTag = document.getElementById("btnTag")

btnCategoria.addEventListener("click", function(){
    let novaCategoria = new Categoria (getLastIdCategorias() + 1, inputCategoria.value)
    localStorage.setItem("categorias", JSON.stringify(categorias))
})

btnCategoria.addEventListener("click", function(){
    let novaTag = new Tag (getLastIdCategorias() + 1, inputTag.value)
    localStorage.setItem("tags", JSON.stringify(tags))
})


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

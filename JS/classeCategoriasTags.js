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
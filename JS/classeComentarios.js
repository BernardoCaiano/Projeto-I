let comentarios = []
let comentarioID = 0

class Comentario {
    constructor(id, utilizadorID, livroID, comentario, pontuacao) {
        this.id = id
        this.utilizadorID = utilizadorID
        this.livroID = livroID
        this.comentario = comentario 
        this.pontuacao = pontuacao
        
    }
    // Propriedade id
    get id() {
        return this._id
    }

    set id(novoID) {
        this._id = novoID        
    }

    // Propriedade utilizadorID
    get utilizadorID() {
        return this._utilizadorID
    }

    set utilizadorID(novoUtilizadorID) {
        this._utilizadorID = novoUtilizadorID       
    }

    // Propriedade livroID
    get livroID() {
        return this._livroID
    }
    set livroID(novoLivroID) {
        this._livroID = novoLivroID
    }

    // Propriedade _comentario
    get comentario() {
        return this._comentario
    }
    set comentario(novoComentario) {
        this._comentario = novoComentario
    }

    // Propriedade pontuacao
    get pontuacao() {
        return this._pontuacao
    }
    set pontuacao(novaPontuacao) {
        this._pontuacao = novaPontuacao
    }

    
}
let comentarios = []
let comentarioID = 0

class Comentario {
    constructor(utilizadorID, livroID, comentario) {
        this._id = Requisiçao.getLastId() + 1
        this.utilizadorID = utilizadorID
        this.livroID = livroID
        this.comentario = comentario 
        
    }
    get id() {
        return this._id
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

    // Propriedade dataRequisiçao
    get comentario() {
        return this._comentario
    }
    set comentario(novoComentario) {
        this._comentario = novoComentario
    }

    // Get the last ID
    static getLastId() {
        let lastId = 0
        if (comentarios.length > 0) {
            lastId = comentarios[comentarios.length-1].id
        }        
        return lastId
    }
}

requisiçoesStorage()

let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))

        

let novoComentario = new Comentario (utilizadorLogado._id, livroIdRequisicao, comentario)
  
requisiçoes.push(novaRequisiçao)
localStorage.setItem("requisiçoes", JSON.stringify(requisiçoes))


       
    
function comentariosStorage() {
    if(localStorage.requisiçoes) {
        let tempArray = JSON.parse(localStorage.getItem("requisiçoes"))

        for (var i = 0; i < tempArray.length; i++) {
                
            let novaRequisiçao =  new Livro(tempArray[i]._utilizadorID, tempArray[i]._livroID, tempArray[i]._dataRequisiçao, tempArray[i]._dataEntrega)
            livros.push(novaRequisiçao)       
        }
    }
}

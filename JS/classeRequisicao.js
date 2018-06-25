let requisiçoes = []
let requisitacaorID = 0

class Requisiçao {
    constructor(utilizadorID, livroID, dataRequisiçao, dataEntrega, multa) {
        this._id = Requisiçao.getLastId() + 1
        this.utilizadorID = utilizadorID
        this.livroID = livroID
        this.dataRequisiçao = dataRequisiçao 
        this.dataEntrega = dataEntrega
        this.multa = multa
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
    get dataRequisiçao() {
        return this._dataRequisiçao
    }
    set dataRequisiçao(novaDataRequisiçao) {
        this._dataRequisiçao = novaDataRequisiçao
    }

    // Propriedade dataEntrega
    get dataEntrega() {
        return this._dataEntrega
    }
    set dataEntrega(novaDataEntrega) {
        this._dataEntrega = novaDataEntrega
    }

    // Propriedade multa
    get multa() {
        return this._multa
    }
    set multa(novaMulta) {
        this._multa = novaMulta
    }

    // Get the last ID
    static getLastId() {
        let lastId = 0
        if (requisiçoes.length > 0) {
            lastId = requisiçoes[requisiçoes.length-1].id
        }        
        return lastId
    }
}
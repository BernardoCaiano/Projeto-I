let requisiçoes = []
let requisitarID = 0

class Requisiçao {
    constructor(nome, email, password, tipo) {
        this._id = Requisiçao.getLastId() + 1
        this.utilizadorID = utilizadorID
        this.livroID = livroID
        this.dataRequisiçao = dataRequisiçao 
        this.dataEntrega = dataEntrega
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

    // Get the last ID
    static getLastId() {
        let lastId = 0
        if (requisiçoes.length > 0) {
            lastId = requisiçoes[requisiçoes.length-1].id
        }        
        return lastId
    }
}



    let btnRequisitar = document.getElementById("btnRequisitar")

    btnRequisitar.addEventListener("click", function(event){
        let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))
        let novaRequisiçao = new Requisiçao (utilizadorLogado._id)
        console.log(novaRequisiçao)
    })


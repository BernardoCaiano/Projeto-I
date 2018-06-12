let requisiçoes = []
let requisitarID = 0

class Requisiçao {
    constructor(utilizadorID, livroID, dataRequisiçao, dataEntrega) {
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

requisiçoesStorage()

    let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))

    let cont = 0

    let btnRequisitar = document.getElementById("btnRequisitar")

    btnRequisitar.addEventListener("click", function(event){
        
        if (cont < 2) {
            let novaRequisiçao = new Requisiçao (utilizadorLogado._id, livroIdRequisicao, new Date().toLocaleString(), "")
            cont++
            requisiçoes.push(novaRequisiçao)
            localStorage.setItem("requisiçoes", JSON.stringify(requisiçoes))
            console.log(requisiçoes)
        }
        else {
            alert("Nao pode requisitar mais que 2 livros!")
        }
        
    })

    function requisiçoesStorage() {
        if(localStorage.requisiçoes) {
            let tempArray = JSON.parse(localStorage.getItem("requisiçoes"))
            
            for (var i = 0; i < tempArray.length; i++) {
                
                let novaRequisiçao =  new Livro(tempArray[i]._utilizadorID, tempArray[i]._livroID, tempArray[i]._dataRequisiçao, tempArray[i]._dataEntrega)
                livros.push(novaRequisiçao)       
            }
        }
    }


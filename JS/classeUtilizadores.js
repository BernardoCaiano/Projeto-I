let utilizadores = []
let utilizadorId = 0

class Utilizador {
    constructor(id, nome, email, password, tipo, foto, requisiçoes) {
        this.id = id
        this.nome = nome
        this.email = email
        this.password = password 
        this.tipo = tipo
        this.foto = foto
        this.requisiçoes = requisiçoes
    }

    // Propriedade id
    get id() {
        return this._id
    }

    set id(novoID) {
        this._id = novoID        
    }

    // Propriedade nome
    get nome() {
        return this._nome
    }

    set nome(novoNome) {
        this._nome = novoNome        
    }

    // Propriedade email
    get email() {
        return this._email
    }
    set email(novoEmail) {
        this._email = novoEmail
    }

    // Propriedade password
    get password() {
        return this._password
    }
    set password(novaPassword) {
        this._password = novaPassword
    }

    // Propriedade tipo
    get tipo() {
        return this._tipo
    }
    set tipo(novoTipo) {
        this._tipo = novoTipo
    }

    // Propriedade foto
    get foto() {
        return this._foto
    }
    set foto(novaFoto) {
        this._foto = novaFoto
    }

    // Propriedade requisiçoes
    get requisiçoes() {
        return this._requisiçoes
    }
    set requisiçoes(novasRequisiçoes) {
        this._requisiçoes = novasRequisiçoes
    }

    
}
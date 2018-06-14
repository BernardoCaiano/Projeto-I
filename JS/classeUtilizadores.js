let utilizadores = []
let utilizadorId = 0

class Utilizador {
    constructor(nome, email, password, tipo, foto) {
        this._id = Utilizador.getLastId() + 1
        this.nome = nome
        this.email = email
        this.password = password 
        this.tipo = tipo
        this.foto = foto
    }
    get id() {
        return this._id
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

    // Get the last ID
    static getLastId() {
        let lastId = 0
        if (utilizadores.length > 0) {
            lastId = utilizadores[utilizadores.length-1].id
        }        
        return lastId
    }
}
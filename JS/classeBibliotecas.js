let bibliotecas = []

class Biblioteca {
    constructor(id, freguesia, morada, latitude, longitude) {
        this.id = id
        this.freguesia = freguesia
        this.morada = morada
        this.latitude = latitude
        this.longitude = longitude
    }

    // Propriedade id
    get id() {
        return this._id
    }

    set id(novoID) {
        this._id = novoID        
    }

    // Propriedade freguesia
    get freguesia() {
        return this._freguesia
    }

    set freguesia(novaFreguesia) {
        this._freguesia = novaFreguesia       
    }

    // Propriedade morada
    get morada() {
        return this._morada
    }

    set morada(novaMorada) {
        this._morada = novaMorada       
    }

    // Propriedade latitude
    get latitude() {
        return this._latitude
    }

    set latitude(novaLatitude) {
        this._latitude = novaLatitude       
    }

    // Propriedade longitude
    get longitude() {
        return this._longitude
    }

    set longitude(novaLongitude) {
        this._longitude = novaLongitude       
    }
}


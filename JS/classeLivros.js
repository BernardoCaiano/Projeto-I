let livros = []
let livroId = 0

class Livro {
    constructor(titulo, capa, descriçao, autor, editora, dataLançamento, numeroPaginas, estado, doador, dataDoaçao, categoria, tags, biblioteca) {
        this._id = Livro.getLastId() + 1
        this.titulo = titulo
        this.capa = capa
        this.descriçao = descriçao
        this.autor = autor
        this.editora = editora
        this.dataLançamento = dataLançamento
        this.numeroPaginas = numeroPaginas
        this.estado = estado
        this.doador = doador
        this.dataDoaçao = dataDoaçao
        this.categoria = categoria
        this.tags = tags
        this.biblioteca = biblioteca

    }
    
    get id() {
        return this._id
    }

    // Propriedade titulo
    get titulo() {
        return this._titulo
    }

    set titulo(novoTitulo) {
        this._titulo = novoTitulo        
    }

    // Propriedade capa
    get capa() {
        return this._capa
    }
    set capa(novaCapa) {
        this._capa = novaCapa
    }

    // Propriedade descriçao
    get descriçao() {
        return this._descriçao
    }
    set descriçao(novaDescriçao) {
        this._descriçao = novaDescriçao
    }

    // Propriedade autor
    get autor() {
        return this._autor
    }
    set autor(novoAutor) {
        this._autor = novoAutor
    }
    
    // Propriedade editora
    get editora() {
        return this._editora
    }
    set editora(novaEditora) {
        this._editora = novaEditora
    }

    // Propriedade data de lançamento
    get dataLançamento() {
        return this._dataLançamento
    }
    set dataLançamento(novaDataLançamento) {
        this._dataLançamento = novaDataLançamento
    }

    // Propriedade numero de paginas
    get numeroPaginas() {
        return this._numeroPaginas
    }
    set numeroPaginas(novoNumeroPaginas) {
        this._numeroPaginas = novoNumeroPaginas
    }

    // Propriedade estado
    get estado() {
        return this._estado
    }
    set estado(novoEstado) {
        this._estado = novoEstado
    }

    // Propriedade nome do doador
    get doador() {
        return this._doador
    }
    set doador(novoDoador) {
        this._doador = novoDoador
    }

    // Propriedade data de doaçao
    get dataDoaçao() {
        return this._dataDoaçao
    }
    set dataDoaçao(novaDataDoaçao) {
        this._dataDoaçao = novaDataDoaçao
    }

    // Propriedade categoria
    get categoria() {
        return this._categoria
    }
    set categoria(novaCategoria) {
        this._categoria = novaCategoria
    }

    // Propriedade tags
    get tags() {
        return this._tags
    }
    set tags(novasTags) {
        this._tags = novasTags
    }

    // Propriedade biblioteca
    get biblioteca() {
        return this._biblioteca
    }
    set biblioteca(novaBiblioteca) {
        this._biblioteca = novaBiblioteca
    }

    // Get the last ID
    static getLastId() {
        let lastId = 0
        if (livros.length > 0) {
            lastId = livros[livros.length-1].id
        }        
        return lastId
    }

}


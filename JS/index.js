let livros = []
let livroId = 0

let utilizadores = []
let utilizadorId = 0

class Utilizador {
    constructor(nome, email, password, tipo) {
        this._id = Utilizador.getLastId() + 1
        this.nome = nome
        this.email = email
        this.password = password 
        this.tipo = tipo
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

    // Get the last ID
    static getLastId() {
        let lastId = 0
        if (utilizadores.length > 0) {
            lastId = utilizadores[utilizadores.length-1].id
        }        
        return lastId
    }
}

class Livro {
    constructor(titulo, capa, descriçao, autor, editora, dataLançamento, numeroPaginas, estado, doador, dataDoaçao) {
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


    // Get the last ID
    static getLastId() {
        let lastId = 0
        if (livros.length > 0) {
            lastId = livros[livros.length-1].id
        }        
        return lastId
    }

}

window.onload = function() {
    
    utilizadoresStorage()
    livrosStorage()
    

    console.log(utilizadores)
    //LOGIN
    // Referências para elementos HTML
    let optLogin = document.getElementById("optLogin")
    let optLogout = document.getElementById("optLogout")
    let optNome = document.getElementById("optNome")
    let optRegister = document.getElementById("optRegister")

    optLogout.style.display = 'none'
    optNome.style.display = 'none'

    let frmLogin = document.getElementById("frmLogin")
 // SUBMISSÃO DE AUTENTICAÇÃO
 frmLogin.addEventListener("submit", function(event) { 

    // Obter as referências para as caixas de texto
    let inputLoginEmail = document.getElementById("inputLoginEmail")

    let inputLoginPassword = document.getElementById("inputLoginPassword")

    // Iterar sobre o array e verificar se o utilizador já existe
    let utilizadorExiste = false
    let nomeUtilizador = ""
    for (var i = 0; i < utilizadores.length; i++) {
        if (utilizadores[i].email == inputLoginEmail.value && utilizadores[i].password == inputLoginPassword.value) {
            utilizadorExiste = true
            utilizadorId = utilizadores[i].id
            nomeUtilizador = utilizadores[i].nome
        }        
    }   

    // Se sim, autenticar utilizador
    if(utilizadorExiste == true) {
        alert("Autenticação efetuado com sucesso!!")
        // Fechar a modal
        $('#loginModal').modal('hide')
        // Alterar navbar 
        optLogin.style.display = 'none'
        optRegister.style.display = 'none'
        optLogout.style.display = 'block'
        optNome.innerHTML = `<a class="nav-link" href="#" style="color:white">Olá, ${nomeUtilizador}</a>`
        optNome.style.display = 'block'

    } else {
        // Se não, exibir mensagem a indicar a inexistência do utilizador no array
        alert("Dados de autenticação inválidos!!")
    }
    event.preventDefault()

 })

 //REGISTO
 let frmRegister = document.getElementById("frmRegister")
 frmRegister.addEventListener("submit", function() { 
    // Validar pass iguais
    let inputPassword1 = document.getElementById("inputPassword1")
    let inputPassword2 = document.getElementById("inputPassword2")
    let strError= ""

    if (inputPassword1.value != inputPassword2.value) {
        strError = "As passwords têm de ser iguais" 
    }

    //  Validar se já existe um user com o mesmo email
    let inputEmail = document.getElementById("inputEmail")
    let utilizadorExiste = false
    //if (localStorage.getItem("utilizador")){
        for (var i = 0; i < utilizadores.length; i++) {
            if (utilizadores[i].email == inputEmail.value) {
                utilizadorExiste = true
            } 
        }
    //}
    

    if(utilizadorExiste == true) {
        strError += "\nEmail já existente!"
    }

    // Criar o utilizador
    if (strError=="") {
        let inputNome = document.getElementById("inputNome").value
        event.preventDefault()
        let novoUtilizador = new Utilizador(inputNome, inputEmail.value, inputPassword1.value)
        // Adicionar ao array
        utilizadores.push(novoUtilizador)
        localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
        
    
        utilizadorId = novoUtilizador.id

        // Alerta de sucesso!
        alert("Registo efetuado com sucesso!!")
        // Fechar a modal
        $('#registoModal').modal('hide')
        // ALterar navbar 
 
        optLogin.style.display = 'none'
        optRegister.style.display = 'none'
        optLogout.style.display = 'block'
        optNome.innerHTML = `<a class="nav-link" href="#" style="color:white">Olá, ${inputNome}</a>`
        optNome.style.display = 'block'

    }

    else {
        alert(strError) 
        frmRegister.reset()
        inputNome.focus()
    }
 event.preventDefault()
 })

 // LOGOUT
optLogout.addEventListener("click", function () {
    utilizadorId = 0
    optLogin.style.display = 'block'
    optRegister.style.display = 'block'
    optLogout.style.display = 'none'
    optNome.style.display = 'none'
    alert("Logout efetuado com sucesso!!")
    
})

//-----------------------------------------------------------------
let modalTituloLivro = document.getElementById("modalTituloLivro")
let modalAutorLivro = document.getElementById("modalAutorLivro")
let modalDescriçaoLivro = document.getElementById("modalDescriçaoLivro")
let modalCapaLivro = document.getElementById("modalCapaLivro")

filtrarAutores()
carregarCatalogo()
let frmLivros = document.getElementById("frmLivros")
    
frmLivros.addEventListener("submit", function(event) {
    
    let titulo = document.getElementById("inputTitulo").value
    let capa = document.getElementById("inputCapa").value
    let descriçao = document.getElementById("inputDescriçao").value
    let autor = document.getElementById("inputAutor").value
    let editora = document.getElementById("inputEditora").value
    let dataLançamento = document.getElementById("inputDataLançamento").value
    let numeroPaginas = document.getElementById("inputNpaginas").value
    let estado = document.getElementById("inputEstado").value
    let dataDoaçao = document.getElementById("inputDataDoaçao").value
    let doador = document.getElementById("inputDoador").value
        
       
    let novoLivro = new Livro(titulo, capa, descriçao , autor, editora, dataLançamento, numeroPaginas, estado, doador, dataDoaçao )
    livros.push(novoLivro)
    localStorage.setItem("livros", JSON.stringify(livros))
    event.preventDefault();
    filtrarAutores()
    carregarCatalogo()
    event.preventDefault();

})
    
function carregarCatalogo() {
        
    let catalogo = document.getElementById("catalogo")

    let strHtml = ""
        
    for (let i = 0; i < livros.length; i++) {
        if(i % 6 == 0) {
             strHtml += `<div class="row">`    
        }
            
        strHtml += `
            <div class="col-2"><a id="${livros[i].id}" class='verModal' data-toggle='modal' data-target='#livroModal'><img class="img-thumbnail" src="${livros[i].capa}" alt="" height="240" width="160"></a>
                <a id="${livros[i].id}" class='verModal' data-toggle='modal' data-target='#livroModal'><p><b>${livros[i].titulo}</b></p></a>
                    <p> de ${livros[i].autor}</p>  
                <a id="${livros[i].id}" href="#" class="btn btn-danger remove">REMOVER</a> <br>
            </div>`
                      
            if(i % 6 == 5) {
                strHtml += `</div>`    
            } 
        }

        catalogo.innerHTML = strHtml
       
        let verModal = document.getElementsByClassName("verModal")
            // For each link, add a listener to listen the click event
            for (let i = 0; i < verModal.length; i++) {
                verModal[i].addEventListener("click", function() {
                // Ao clicar num livro especifico, ve-lo numa modal
                let livroId = verModal[i].getAttribute("id")
                verLivroPorId(livroId )                
                })        
             }
        let btnRemover = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
            for (let i = 0; i < btnRemover.length; i++) {
                btnRemover[i].addEventListener("click", function() {
                    // By clicking in a specific game, remove it from the array
                    let livroId = btnRemover[i].getAttribute("id")
                    eliminarLivro(livroId)
                    carregarCatalogo(livroId)
                    localStorage.setItem("livros", JSON.stringify(livros))
                })        
            }
}

function verLivroPorId(id) { 
    for (let i = 0; i < livros.length; i++) {
        if(livros[i].id == id) {
            modalTituloLivro.innerHTML= livros[i].titulo                
            modalAutorLivro.innerHTML = livros[i].autor
            modalDescriçaoLivro.innerHTML = livros[i].descriçao
            modalCapaLivro.setAttribute("src", livros[i].capa)         
        }                  
    }
}

function utilizadoresStorage(){
    if(localStorage.utilizadores) {
        let tempArray = JSON.parse(localStorage.getItem("utilizadores"))
        
        for (var i = 0; i < tempArray.length; i++) {
            
            let novoUtilizador =  new Utilizador(tempArray[i]._nome, tempArray[i]._email, tempArray[i]._password, tempArray[i]._tipo)
            utilizadores.push(novoUtilizador)       
        }
    }  
}

function livrosStorage(){
    if(localStorage.livros) {
        let tempArray2 = JSON.parse(localStorage.getItem("livros"))
        
        for (var i = 0; i < tempArray2.length; i++) {
            
            let novoLivro =  new Livro(tempArray2[i]._titulo, tempArray2[i]._capa, tempArray2[i]._descriçao, tempArray2[i]._autor, tempArray2[i]._editora, tempArray2[i]._dataLançamento, tempArray2[i]._numeroPaginas, tempArray2[i]._estado, tempArray2[i]._doador, tempArray2[i]._dataDoaçao)
            livros.push(novoLivro)       
        }
    }
        
}
    

function filtrarAutores() {
    let tempAutores = []
    // 1. Iterar sobre o array livros
    for (let i = 0; i < livros.length; i++) {
        if (tempAutores.indexOf(livros[i].autor) == -1) {
            // 2. Guardar todos os autores não duplicados
            tempAutores.push(livros[i].autor)    
        }
    }   
    console.log(tempAutores)
    // 3. Criar o HTML (option) para todos os users encontrados
    let strHtml = "<option value=''>Todos</option>"
    for (let i = 0; i < tempAutores.length; i++) {
        // Obter o nome do autor no array users
        
            strHtml += `<option value='${tempAutores[i]}'>${tempAutores[i]}</option>` 
                        
    }

    let autores = document.getElementById("autores")
    autores.innerHTML = strHtml
}

function eliminarLivro(id){
    if (confirm("Tem a certeza que quer eliminar o livro?")){
        for (let i = 0; i < livros.length; i++) {
            if(livros[i].id == id) {
                livros.splice(i, 1)
            }    
                        
        }
    }
}
}

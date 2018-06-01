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

window.onload = function() {

    utilizadoresStorage()
    //LOGIN
    // Referências para elementos HTML
    let optLogin = document.getElementById("optLogin")
    let optLogout = document.getElementById("optLogout")
    let optNome = document.getElementById("optNome")
    let optRegister = document.getElementById("optRegister")

    let novoUtilizador01 = new Utilizador("operador", "operador@email.com", "11111", "operador" ) 
    utilizadores.push(novoUtilizador01)
    let novoUtilizador02 = new Utilizador("admin", "admin@email.com", "11111", "admin" )
    utilizadores.push(novoUtilizador02)
    localStorage.setItem("utilizadores", JSON.stringify(utilizadores))

    
    console.log(utilizadores)
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

function utilizadoresStorage(){
    if(localStorage.utilizadores) {
        let tempArray = JSON.parse(localStorage.getItem("utilizadores"))
        
        for (var i = 0; i < tempArray.length; i++) {
            
            let novoUtilizador =  new Utilizador(tempArray[i]._nome, tempArray[i]._email, tempArray[i]._password, tempArray[i]._tipo)
            utilizadores.push(novoUtilizador)       
        }
    }  
}
}
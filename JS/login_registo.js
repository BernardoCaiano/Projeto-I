let logado = false

window.onload = function() {

    //localStorage.removeItem("utilizadores")
    utilizadoresStorage()
    utilizadorLogadoStorage()

    //LOGIN
    // Referências para elementos HTML
    
    let linkCatalogo = document.getElementById("linkCatalogo")
    let linkDoarLivro = document.getElementById("linkDoarLivro")

    linkCatalogo.addEventListener("click", function(event) {
        if (logado == false) {
            event.preventDefault()
            alert("Para aceder a esses conteudos tem que fazer login!")
            
        }
    })

    linkDoarLivro.addEventListener("click", function(event) {
        if (logado == false) {
            event.preventDefault()
            alert("Para aceder a esses conteudos tem que fazer login!")
        }
    })

    let novoUtilizador01 = new Utilizador("operador", "operador@email.com", "11111", "operador" ) 
    let novoUtilizador02 = new Utilizador("admin", "admin@email.com", "11111", "admin" )
    let utilizadorLogado = new Utilizador()

    let utilizadorExiste01 = false
    let utilizadorExiste02 = false

    for (var i = 0; i < utilizadores.length; i++) {

        if (utilizadores[i].nome == novoUtilizador01.nome) {
            utilizadorExiste01 = true
        }

        if (utilizadores[i].nome == novoUtilizador02.nome) {
            utilizadorExiste02 = true
        }
    }

    if (utilizadorExiste01 == false) {
        utilizadores.push(novoUtilizador01)
    }

    if (utilizadorExiste02 == false) {
        utilizadores.push(novoUtilizador02)
    }

    if (utilizadorExiste01 == false || utilizadorExiste02 == false) {
        localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
    }
    
    console.log(utilizadores)
    

    if (logado) {

        optLogin.style.display = 'none'
        optRegister.style.display = 'none'
        optLogout.style.display = 'block'
        optNome.innerHTML = `<a class="nav-link" href="#" style="color:white">Olá, ${nomeUtilizador}</a>`
        optNome.style.display = 'block'
 
    }
    else {
        optLogout.style.display = 'none'
        optNome.style.display = 'none'
    }

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
                let utilizadorLogadoID = utilizadores[i].id
                let utilizadorLogado = utilizadores[i]
                localStorage.setItem("utilizadorID", utilizadorLogadoID)
                localStorage.setItem("utilizadorLogado", JSON.stringify(utilizadorLogado))

            }        
        }   

        // Se sim, autenticar utilizador
        if(utilizadorExiste == true) {
            
            alert("Autenticação efetuado com sucesso!!")
            logado = true
            
            // Fechar a modal
            $('#loginModal').modal('hide')
            // Alterar navbar 
            optLogin.style.display = 'none'
            optRegister.style.display = 'none'
            optLogout.style.display = 'block'
            optNome.innerHTML = `<a class="nav-link" href="#" style="color:white">Olá, ${nomeUtilizador}</a>`
            optNome.style.display = 'block'

        } 
        else {
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

        if (localStorage.getItem("utilizadores")){

            for (var i = 0; i < utilizadores.length; i++) {
                if (utilizadores[i].email == inputEmail.value) {
                    utilizadorExiste = true
                } 
            }
        }
    
        if(utilizadorExiste == true) {
            strError += "\nEmail já existente!"
        }

        // Criar o utilizador
        if (strError=="") {
            
            let inputNome = document.getElementById("inputNome").value
            event.preventDefault()
            let novoUtilizador = new Utilizador(inputNome, inputEmail.value, inputPassword1.value, "utilizador")
            // Adicionar ao array
            utilizadores.push(novoUtilizador)

            //localStorage.removeItem("utilizadores")
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
        
            utilizadorId = novoUtilizador.id

            // Alerta de sucesso!
            alert("Registo efetuado com sucesso!!")
            // Fechar a modal
            $('#registoModal').modal('hide')
        
            

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
        localStorage.removeItem("utilizadorLogado")
        localStorage.removeItem("utilizadorID")    
        
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

    function utilizadorLogadoStorage() {
        
        if(localStorage.utilizadorLogado) {
            let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))
            console.log(utilizadorLogado._nome)
            nomeUtilizador = utilizadorLogado._nome
            logado = true        
        } 
        else {
            logado = false
        }
    }

}
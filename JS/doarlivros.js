    livrosStorage()
    categoriasStorage()
    tagsStorage()
    bibliotecasStorage()
    completarFiltroCategorias()
    completarFiltroTags()
    completarFiltroBibliotecas()

    let modalTituloLivro = document.getElementById("modalTituloLivro")
    let modalAutorLivro = document.getElementById("modalAutorLivro")
    let modalDescriçaoLivro = document.getElementById("modalDescriçaoLivro")
    let modalCapaLivro = document.getElementById("modalCapaLivro")

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
        let inputCategoria = document.getElementById("inputCategoria").value
        let inputTags = document.getElementById("inputTags").value
        let inputBiblioteca = document.getElementById("inputBiblioteca").value

        let novoLivro = new Livro(getLastId() + 1, titulo, capa, descriçao , autor, editora, dataLançamento, numeroPaginas, estado, doador, dataDoaçao, inputCategoria, inputTags, inputBiblioteca, false, 0, 0, 0)
        livros.push(novoLivro)
        localStorage.setItem("livros", JSON.stringify(livros))
        alert("Livro adicionado com sucesso!")
        event.preventDefault();

    })

    function completarFiltroCategorias() {

        let tempCategorias = []
        // 1. Iterar sobre o array categorias
        for (let i = 0; i < categorias.length; i++) {
            if (tempCategorias.indexOf(categorias[i].categoria) == -1) {
                // 2. Guardar todos os autores não duplicados
                tempCategorias.push(categorias[i].categoria)    
            }
        }   
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = ""
        for (let i = 0; i < tempCategorias.length; i++) {
            // Obter o nome do autor no array users
            
                    strHtml += `<option value='${tempCategorias[i]}'>${tempCategorias[i]}</option>` 
                            
        }
    
        
        inputCategoria.innerHTML = strHtml
    }

    function completarFiltroTags() {

        let tempTags = []
        // 1. Iterar sobre o array categorias
        for (let i = 0; i < tags.length; i++) {
            if (tempTags.indexOf(tags[i].tag) == -1) {
                // 2. Guardar todos os autores não duplicados
                tempTags.push(tags[i].tag)    
            }
        }   
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = ""
        for (let i = 0; i < tempTags.length; i++) {
            // Obter o nome do autor no array users
            
                    strHtml += `<option value='${tempTags[i]}'>${tempTags[i]}</option>` 
                            
        }
    
        
        inputTags.innerHTML = strHtml
    }

    function completarFiltroBibliotecas() {
        console.log(bibliotecas)
        let tempBibliotecas = []
        // 1. Iterar sobre o array categorias
        for (let i = 0; i < bibliotecas.length; i++) {
            if (tempBibliotecas.indexOf(bibliotecas[i].freguesia) == -1) {
                // 2. Guardar todos os autores não duplicados
                tempBibliotecas.push(bibliotecas[i].freguesia)    
            }
        }   
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = ""
        for (let i = 0; i < tempBibliotecas.length; i++) {
            // Obter o nome do autor no array users
            
                    strHtml += `<option value='${tempBibliotecas[i]}'>${tempBibliotecas[i]}</option>` 
                            
        }
    
        inputBiblioteca.innerHTML = strHtml
    }

    function livrosStorage(){
        if(localStorage.livros) {
            let tempArray2 = JSON.parse(localStorage.getItem("livros"))
            
            for (var i = 0; i < tempArray2.length; i++) {
                
                let novoLivro =  new Livro(tempArray2[i]._id, tempArray2[i]._titulo, tempArray2[i]._capa, tempArray2[i]._descriçao, tempArray2[i]._autor, tempArray2[i]._editora, tempArray2[i]._dataLançamento, tempArray2[i]._numeroPaginas, tempArray2[i]._estado, tempArray2[i]._doador, tempArray2[i]._dataDoaçao, tempArray2[i]._categoria, tempArray2[i]._tags, tempArray2[i]._biblioteca, tempArray2[i]._requisitado, tempArray2[i]._somaPontuacoes, tempArray2[i]._numeroPontuacoes, tempArray2[i]._mediaPontuacoes)
                livros.push(novoLivro)       
            }
            console.log(livros)
        }
            
    }

    function categoriasStorage(){
    
        if(localStorage.categorias) {
            let tempArray = JSON.parse(localStorage.getItem("categorias"))
        
            for (let i = 0; i < tempArray.length; i++) {
            
                let novaCategoria =  new Categoria (tempArray[i]._id, tempArray[i]._categoria)
                categorias.push(novaCategoria)       
            }
        } 
    } 

    function tagsStorage(){
    
        if(localStorage.tags) {
            let tempArray = JSON.parse(localStorage.getItem("tags"))
        
            for (let i = 0; i < tempArray.length; i++) {
            
                let novaTag =  new Tag (tempArray[i]._id, tempArray[i]._tag)
                tags.push(novaTag)       
            }
        } 
    }

    function bibliotecasStorage(){
    
        if(localStorage.bibliotecas) {
            let tempArray = JSON.parse(localStorage.getItem("bibliotecas"))
        
            for (let i = 0; i < tempArray.length; i++) {
            
                let novaBiblioteca =  new Biblioteca (tempArray[i]._id, tempArray[i]._freguesia,  tempArray[i]._morada, tempArray[i]._latitude, tempArray[i]._longitude)
                bibliotecas.push(novaBiblioteca)       
            }
        } 
    } 

    // Get the last ID
    function getLastId() {
        let lastId = 0
        if (livros.length > 0) {
            lastId = livros[livros.length-1].id
        }        
        return lastId
    }
        
    
   
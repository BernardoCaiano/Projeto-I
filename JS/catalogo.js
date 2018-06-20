    
    livrosStorage()
    completarFiltroAutores()
    completarFiltroEstadoLivro()
    completarFiltroEditoras()
    carregarCatalogo()

    let livroIdRequisicao = 0
    
    let novoLivro01 = new Livro(1, "Quem Meteu a Mão na Caixa", "https://img.wook.pt/images/quem-meteu-a-mao-na-caixa-helena-garrido/MXwxOTc0MTgzNHwxNTU3NTEyM3wxNTI1MjE1NjAwMDAw/502x", "", "Helena Garrido" ) 
    let novoLivro02 = new Livro(2, "Deixar Ir", "https://img.wook.pt/images/deixar-ir-david-r-hawkins/MXwyMTgxMzU4OXwxNzY2NDg2NHwxNTIzODMzMjAwMDAw/502x", "", "David R. Hawkins" )
    let novoLivro03 = new Livro(3, "O Tatuador de Auschwitz", "https://img.wook.pt/images/o-tatuador-de-auschwitz-heather-morris/MXwyMTM3MDQwNnwxNzI1MjkwM3wxNTE2NzUyMDAwMDAw/502x", "", "Heather Morris" )
    let novoLivro04 = new Livro(4, "Cebola Crua com Sal e Broa", "https://img.wook.pt/images/cebola-crua-com-sal-e-broa-miguel-sousa-tavares/MXwyMTkwOTA1N3wxNzc2ODk3NHwxNTI2MzM4ODAwMDAw/502x", "", "Miguel Sousa Tavares" )
    let novoLivro05 = new Livro(5, "Propósito", "https://img.wook.pt/images/proposito-sri-prem-baba/MXwyMTUyMTI5NnwxNzM2ODUyN3wxNTI2MjUyNDAwMDAw/502x", "", "Sri Prem Baba" )
    let novoLivro06 = new Livro(6, "O Homem Que Sou", "https://img.wook.pt/images/tony-carreira---o-homem-que-sou-tony-carreira/MXwyMTE4ODM3NXwxNzA1NDY1NXwxNTI2MzM4ODAwMDAw/502x", "", "Tony Carreira" )
    let novoLivro07 = new Livro(7, "Hippie", "https://img.wook.pt/images/hippie-paulo-coelho/MXwyMTYwMjc3MnwxNzQ1MzQ4NHwxNTI2MjUyNDAwMDAw/502x", "", "Paulo Coelho" )
    let novoLivro08 = new Livro(8, "A Guerra dos Tronos", "https://img.wook.pt/images/a-guerra-dos-tronos-george-r-r-martin/MXwxOTY1MTF8MjQ3OTIzfDEzODM1MjMyMDAwMDA=/502x", "", "George R. R. Martin" )
    let novoLivro09 = new Livro(9, "A Guerra dos Tronos", "https://img.wook.pt/images/o-mundo-de-a-guerra-dos-tronos-george-r-r-martin/MXwxNjM3NDc0OHwxMTk1ODU1MXwxNDI4NDQ3NjAwMDAw/502x", "", "George R. R. Martin" )
    let novoLivro10 = new Livro(10, "Sonho Febril", "https://img.wook.pt/images/sonho-febril-george-r-r-martin/MXwyMTM5NDQ2MHwxNzI2OTk5NnwxNTE3MzU2ODAwMDAw/502x", "", "George R. R. Martin" )
    let novoLivro11 = new Livro(11, "Não Respire", "https://img.wook.pt/images/nao-respire-pedro-rolo-duarte/MXwyMTg3Njc5MXwxNzczMjk2NXwxNTI1MzAyMDAwMDAw/502x", "", "Pedro Rolo Duarte " )
    let novoLivro12 = new Livro(12, "A Rapariga de Auschwitz", "https://img.wook.pt/images/a-rapariga-de-auschwitz-eva-schloss/MXwyMTYwODkwMnwxNzQ2MDE4MnwxNTIyMTkxNjAwMDAw/502x", "", "Eva Schloss" )
    let novoLivro13 = new Livro(13, "Do Sonho à Vitória", "https://img.wook.pt/images/do-sonho-a-vitoria-antonio-tadeia/MXwyMTkxMjU5OHwxNzc3MjgxMnwxNTI2NDI1MjAwMDAw/502x", "", "António Tadeia" )
    let novoLivro14 = new Livro(14, "Almanaque da Seleção", "https://img.wook.pt/images/almanaque-da-selecao-rui-miguel-tovar/MXwyMTk0Mjk3OXwxNzgwNTA0MXwxNTI3MTE2NDAwMDAw/502x", "", "Rui Miguel Tovar " )

    if (localStorage.getItem("livros") == null){
        livros.push(novoLivro01)
        livros.push(novoLivro02)
        livros.push(novoLivro03)
        livros.push(novoLivro04)
        livros.push(novoLivro05)
        livros.push(novoLivro06)
        livros.push(novoLivro07)
        livros.push(novoLivro08)
        livros.push(novoLivro09)
        livros.push(novoLivro10)
        livros.push(novoLivro11)
        livros.push(novoLivro12)
        livros.push(novoLivro13)
        livros.push(novoLivro14)
        localStorage.setItem("livros", JSON.stringify(livros))
    }
    
    //Filtros
    let btnFiltrar = document.getElementById("btnFiltrar")
   
    btnFiltrar.addEventListener("click", function(){
        carregarCatalogo()
        filtrarOrdemAlfabetica()
    })
    

    function carregarCatalogo() {

        let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))
        
        let catalogo = document.getElementById("catalogo")
        
        
        let strHtml = ""
       
        for (let i = 0, cont = 0; i < livros.length ; i++) {
            if ((autores.value == livros[i].autor || autores.value == "") && 
                (estadoLivro.value == livros[i].estado || estadoLivro.value == "") && 
                (editora.value == livros[i].editora || editora.value == "")  ) {
                
                if(cont % 6 == 0) {
                    strHtml += `<div class="row">`    
                }

                if (utilizadorLogado._tipo == "operador"){
                    strHtml += `
                    <div class="col-2"><a id="${livros[i].id}" class='verModal' data-toggle='modal' data-target='#livroModal'><img src="${livros[i].capa}" class="img-thumbnail" alt="" height="240" width="160" ></a> <br>
                    <center><a id="${livros[i].id}" class='verModal' data-toggle='modal' data-target='#livroModal'><p><b>${livros[i].titulo}</b></a> <br>
                             de ${livros[i].autor}</p>  </center>
                             <center><a id="${livros[i].id}" href="#"  class="btn btn-danger remove"><i class="fas fa-trash-alt"></i> </a>
                    <a id="${livros[i].id}" href="#" data-toggle='modal'  data-target='#editarLivroModal' class="btn btn-dark editar "><i class="fas fa-edit"></i> </a></center> <br>
                             
                    </div>`
                }
                else {
                    strHtml += `
                    <div class="col-2"><a id="${livros[i].id}" border="5" class='verModal' data-toggle='modal' data-target='#livroModal'><img src="${livros[i].capa}" class="img-thumbnail" alt="" height="240" width="160"></a> <br>
                    <center><a id="${livros[i].id}" class='verModal' data-toggle='modal' data-target='#livroModal'><p><b>${livros[i].titulo}</b></a> <br>
                             de ${livros[i].autor}</p>  </center>
                    </div>`
                }
            
                if(cont % 6 == 5) {
                   strHtml += `</div>`    
                } 
                cont++
            }
                
            
        }
            
        catalogo.innerHTML = strHtml
        
        let verModal = document.getElementsByClassName("verModal")
        // For each link, add a listener to listen the click event
        for (let i = 0; i < verModal.length; i++) {
            verModal[i].addEventListener("click", function() {
                // Ao clicar num livro especifico, ve-lo numa modal
                let livroId = verModal[i].getAttribute("id")
                verLivroPorId(livroId)                
            })        
         }
         
    
        let btnRemover = document.getElementsByClassName("remove")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < btnRemover.length; i++) {
            btnRemover[i].addEventListener("click", function() {
                // Ao clicar num livro especifico, remover do array
                let livroId = btnRemover[i].getAttribute("id")
                eliminarLivro(livroId)
                carregarCatalogo(livroId)
                localStorage.setItem("livros", JSON.stringify(livros))
            })        
            
        }

        
        let editar = document.getElementsByClassName("editar")
        // Para cada botão, adicionar um listener para escutar pelo evento clique
        for (let i = 0; i < editar.length; i++) {
            editar[i].addEventListener("click", function() {
                // Ao clicar num livro especifico, editar no form
                let livroId = editar[i].getAttribute("id")
                
                editarLivroPorId(livroId) 
                carregarCatalogo(livroId)
                
                         
            })        
        }  
            
    }
      
    function completarFiltroAutores() {

        let tempAutores = []
        // 1. Iterar sobre o array livros
        for (let i = 0; i < livros.length; i++) {
            if (tempAutores.indexOf(livros[i].autor) == -1) {
                // 2. Guardar todos os autores não duplicados
                tempAutores.push(livros[i].autor)    
            }
        }   
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = "<option value=''>Todos</option>"
        for (let i = 0; i < tempAutores.length; i++) {
            // Obter o nome do autor no array users
            
                    strHtml += `<option value='${tempAutores[i]}'>${tempAutores[i]}</option>` 
                            
        }
    
        let autores = document.getElementById("autores")
        autores.innerHTML = strHtml
    }

    function completarFiltroEstadoLivro() {

        let tempAutores = []
        // 1. Iterar sobre o array livros
        for (let i = 0; i < livros.length; i++) {
            if (tempAutores.indexOf(livros[i].estado) == -1) {
                // 2. Guardar todos os autores não duplicados
                tempAutores.push(livros[i].estado)    
            }
        }   
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = "<option value=''>Todos</option>"
        for (let i = 0; i < tempAutores.length; i++) {
            // Obter o nome do autor no array users
            
                    strHtml += `<option value='${tempAutores[i]}'>${tempAutores[i]}</option>` 
                            
        }
    
        let estadoLivro = document.getElementById("estadoLivro")
        estadoLivro.innerHTML = strHtml
    }
    
    function completarFiltroEditoras() {

        let tempAutores = []
        // 1. Iterar sobre o array livros
        for (let i = 0; i < livros.length; i++) {
            if (tempAutores.indexOf(livros[i].editora) == -1) {
                // 2. Guardar todos os autores não duplicados
                tempAutores.push(livros[i].editora)    
            }
        }   
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = "<option value=''>Todos</option>"
        for (let i = 0; i < tempAutores.length; i++) {
            // Obter o nome do autor no array users
            
                    strHtml += `<option value='${tempAutores[i]}'>${tempAutores[i]}</option>` 
                            
        }
    
        let editora = document.getElementById("editora")
        editora.innerHTML = strHtml
    }

    function filtrarOrdemAlfabetica() {
        let ordem = document.getElementById("ordem")
        if(ordem.value == "alfabetica") {
            let tempArray = []
            for (let i = 0; i < livros.length; i++) {
                tempArray.push(livros[i].titulo)
                tempArray.sort() 
            }
        }
        
    }

    function verLivroPorId(id) { 
    
        let strHtml = ""
        livroId = id
        for (let i = 0; i < livros.length; i++) {
            if(livros[i].id == id) {
                modalTituloLivro.innerHTML= livros[i].titulo                
                modalAutorLivro.innerHTML = livros[i].autor
                modalDescriçaoLivro.innerHTML = livros[i].descriçao
                modalCapaLivro.setAttribute("src", livros[i].capa)
                
                
                livroIdRequisicao = livros[i].id  
                
                let livroRequisitado = document.getElementById("livroRequisitado")
                if (livros[i].requisitado == true) {
                    btnRequisitar.style.display = "none"
                    livroRequisitado.style.display = "block"

                }
                else {
                    btnRequisitar.style.display = "block"
                    livroRequisitado.style.display = "none"

                }
                let comentar = true
                for (let j = 0; j < comentarios.length; j++){

                    if (comentarios[j].utilizadorID == utilizadorLogado._id && comentarios[j].livroID == id) {
                        
                        btnComentar.style.display = "none"
                        estrelas.style.display = "none"
                        comentario.style.display = "none"
                        comentar = false
                    }
                    else if (comentar) {
                        btnComentar.style.display = "block"
                        estrelas.style.display = "block"
                        comentario.style.display = "block"
                    }
                        

                    
                }
                       
            }                  
        }
        carregarComentarios(livroId)
        
           
    }

    function carregarComentarios(id) {

        let carregarComentarios = document.getElementById("carregarComentarios")
        
        let strHtml = ""
        
        
        for (let i = 0; i < comentarios.length; i++) {
                if (comentarios[i].livroID == id) {
                    for (let k = 0; k < utilizadores.length; k++) {
                        if (comentarios[i].utilizadorID == utilizadores[k].id) {
                            
                            strHtml += `<h6>${utilizadores[k].nome}</h6>
                                        <p>Pontuacao: ${comentarios[i].pontuacao}</p>
                                        <p>Comentario: </p>
                                        <p>${comentarios[i].comentario}</p>`
                        }   
                    }
                }   
        }
        
        carregarComentarios.innerHTML = strHtml
            
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

    function editarLivroPorId(id) {
        console.log(id)
        
        //livroId = id

        let frmEditarLivros = document.getElementById("frmEditarLivros")

        let titulo = document.getElementById("inputTitulo")
        let capa = document.getElementById("inputCapa")
        let descriçao = document.getElementById("inputDescriçao")
        let autor = document.getElementById("inputAutor")
        let editora = document.getElementById("inputEditora")
        let dataLançamento = document.getElementById("inputDataLançamento")
        let numeroPaginas = document.getElementById("inputNpaginas")
        let estado = document.getElementById("inputEstado")
        let dataDoaçao = document.getElementById("inputDataDoaçao")
        let doador = document.getElementById("inputDoador")

        
        //Preencher o formulario de edicao do livro
        for (let j = 0; j < livros.length; j++) {
            if(livros[j].id == id) {
                titulo.value = livros[j].titulo
                capa.value = livros[j].capa
                descriçao.value = livros[j].descriçao 
                autor.value =  livros[j].autor
                editora.value = livros[j].editora
                dataLançamento.value = livros[j].dataLançamento
                numeroPaginas.value = livros[j].numeroPaginas
                estado.value = livros[j].estado
                dataDoaçao.value = livros[j].dataDoaçao
                doador.value = livros[j].doador
            }
            

        }

        frmEditarLivros.addEventListener("submit", function(event) {
            
            for (let i = 0; i < livros.length; i++) {
                
                if(livros[i].id == id) {
                    
                    livros[i].titulo = titulo.value
                    livros[i].capa = capa.value
                    livros[i].descriçao = descriçao.value
                    livros[i].autor = autor.value
                    livros[i].editora = editora.value
                    livros[i].dataLançamento = dataLançamento.value
                    livros[i].numeroPaginas = numeroPaginas.value
                    livros[i].estado = estado.value
                    livros[i].dataDoaçao = dataDoaçao.value
                    livros[i].doador = doador.value
                
                    // Fechar a modal
                    $('#editarLivroModal').modal('hide')
                    
                    event.preventDefault()
                    
                }                                    
            }
            localStorage.setItem("livros", JSON.stringify(livros))
            location.reload()
        })
        
    }
    
    function livrosStorage(){
        if(localStorage.livros) {
            let tempArray2 = JSON.parse(localStorage.getItem("livros"))
            
            for (let i = 0; i < tempArray2.length; i++) {
                
                let novoLivro =  new Livro(tempArray2[i]._id, tempArray2[i]._titulo, tempArray2[i]._capa, tempArray2[i]._descriçao, tempArray2[i]._autor, tempArray2[i]._editora, tempArray2[i]._dataLançamento, tempArray2[i]._numeroPaginas, tempArray2[i]._estado, tempArray2[i]._doador, tempArray2[i]._dataDoaçao, tempArray2[i]._categorias, tempArray2[i]._tags, tempArray2[i]._biblioteca, tempArray2[i]._requisitado)
                livros.push(novoLivro)       
            }
        }
            
    }






   
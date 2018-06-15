    livrosStorage()
    completarFiltroAutores()
    completarFiltroEstadoLivro()
    completarFiltroEditoras()
    carregarCatalogo()

    let livroIdRequisicao = 0

    //Filtros

    let btnFiltrar = document.getElementById("btnFiltrar")
   
    

    btnFiltrar.addEventListener("click", function(){
        carregarCatalogo()
    })
    

    function carregarCatalogo() {
        let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))
        
        let catalogo = document.getElementById("catalogo")
        
        let strHtml = ""
       
        for (let i = 0, cont = 0; i < livros.length ; i++) {
            if ((autores.value == livros[i].autor || autores.value == "") && 
                (estadoLivro.value == livros[i].estado || estadoLivro.value == "") && 
                (editora.value == livros[i].editora || editora.value == ""))  {
                
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
                verLivroPorId(livroId )                
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

    function verLivroPorId(id) { 
        for (let i = 0; i < livros.length; i++) {
            if(livros[i].id == id) {
                modalTituloLivro.innerHTML= livros[i].titulo                
                modalAutorLivro.innerHTML = livros[i].autor
                modalDescriçaoLivro.innerHTML = livros[i].descriçao
                modalCapaLivro.setAttribute("src", livros[i].capa)
                livroIdRequisicao = livros[i].id          
            }                  
        }
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
                
                let novoLivro =  new Livro(tempArray2[i]._titulo, tempArray2[i]._capa, tempArray2[i]._descriçao, tempArray2[i]._autor, tempArray2[i]._editora, tempArray2[i]._dataLançamento, tempArray2[i]._numeroPaginas, tempArray2[i]._estado, tempArray2[i]._doador, tempArray2[i]._dataDoaçao)
                livros.push(novoLivro)       
            }
        }
            
    }





   
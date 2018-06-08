
    
    livrosStorage()
    filtrarAutores()
    carregarCatalogo()
    
    function carregarCatalogo() {
        let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))
        console.log(utilizadorLogado)
        console.log(utilizadorLogado._tipo)
        
        let catalogo = document.getElementById("catalogo")
    
        let strHtml = ""
       
        for (let i = 0; i < livros.length; i++) {
            
            if(i % 6 == 0) {
                 strHtml += `<div class="row">`    
            }

            if (utilizadorLogado._tipo == "operador"){
                strHtml += `
                <div class="col-2"><a id="${livros[i].id}" class='verModal' data-toggle='modal' data-target='#livroModal'><img src="${livros[i].capa}" alt="" height="240" width="160"></a> <br>
                <center><a id="${livros[i].id}" class='verModal' data-toggle='modal' data-target='#livroModal'><p><b>${livros[i].titulo}</b></a> <br>
                         de ${livros[i].autor}</p>  </center>
                         <center><a id="${livros[i].id}" href="#" class="btn btn-danger remove"><i class="fas fa-trash-alt"></i> </a>
                <a id="${livros[i].id}" href="#" data-toggle='modal' data-target='#editarLivroModal' class="btn btn-dark editar "><i class="fas fa-edit"></i> </a></center> <br>
                         
                </div>`
            }
            else {
                strHtml += `
                <div class="col-2"><a id="${livros[i].id}" class='verModal' data-toggle='modal' data-target='#livroModal'><img src="${livros[i].capa}" alt="" height="240" width="160"></a> <br>
                <center><a id="${livros[i].id}" class='verModal' data-toggle='modal' data-target='#livroModal'><p><b>${livros[i].titulo}</b></a> <br>
                         de ${livros[i].autor}</p>  </center>
                        
                         
                </div>`
            }
            
            
                               
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

                
                let editar = document.getElementsByClassName("editar")
                // For each link, add a listener to listen the click event
                for (let i = 0; i < editar.length; i++) {
                    editar[i].addEventListener("click", function() {
                        // Ao clicar num livro especifico, editar no form
                        let livroId = editar[i].getAttribute("id")
                        
                        editarLivroPorId(livroId) 
                                       
                    })        
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
    
        // 3. Criar o HTML (option) para todos os users encontrados
        let strHtml = "<option value=''>Todos</option>"
        for (let i = 0; i < tempAutores.length; i++) {
            // Obter o nome do autor no array users
            
                    strHtml += `<option value='${tempAutores[i]}'>${tempAutores[i]}</option>` 
                            
            
        }
    
        let autores = document.getElementById("autores")
        autores.innerHTML = strHtml
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
        
        livroId = id

        let frmEditarLivros = document.getElementById("frmEditarLivros")
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

        frmEditarLivros.addEventListener("submit", function(event) {
            for (let i = 0; i < livros.length; i++) {
                if(livros[i].id == id) {
                    
                    livros[i].titulo = titulo
                    livros[i].capa = capa
                    livros[i].descriçao = descriçao
                    livros[i].autor = autor
                    livros[i].editora = editora
                    livros[i].dataLançamento = dataLançamento
                    livros[i].numeroPaginas = numeroPaginas
                    livros[i].estado = estado
                    livros[i].dataDoaçao = dataDoaçao
                    livros[i].doador = doador
                    localStorage.setItem("livros", JSON.stringify(livros))
                    // Fechar a modal
                    $('#editarLivroModal').modal('hide')
                    carregarCatalogo()
                    event.preventDefault()
                    
                }                                    
            }
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

   
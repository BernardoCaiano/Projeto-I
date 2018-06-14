

    livrosStorage()
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
        
       
        let novoLivro = new Livro(titulo, capa, descriçao , autor, editora, dataLançamento, numeroPaginas, estado, doador, dataDoaçao )
        livros.push(novoLivro)
        localStorage.setItem("livros", JSON.stringify(livros))
        alert("Livro adicionado com sucesso!")
        event.preventDefault();

    })

    function livrosStorage(){
        if(localStorage.livros) {
            let tempArray2 = JSON.parse(localStorage.getItem("livros"))
            
            for (var i = 0; i < tempArray2.length; i++) {
                
                let novoLivro =  new Livro(tempArray2[i]._titulo, tempArray2[i]._capa, tempArray2[i]._descriçao, tempArray2[i]._autor, tempArray2[i]._editora, tempArray2[i]._dataLançamento, tempArray2[i]._numeroPaginas, tempArray2[i]._estado, tempArray2[i]._doador, tempArray2[i]._dataDoaçao)
                livros.push(novoLivro)       
            }
        }
            
    }
        
    
   
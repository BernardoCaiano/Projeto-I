
comentariosStorage()

let valorPontuacao = 0

let btnComentar = document.getElementById("btnComentar") 
let estrela = document.getElementsByClassName("estrela")
let inputComentario = document.getElementById("inputComentario")

let comentario = document.getElementById("comentario")



btnComentar.addEventListener("click", function(event){
     
    for (let i = 0; i < estrela.length; i++) {
        if (estrela[i].checked == true) {
            valorPontuacao = estrela[i].value
        }
    }
    
    let novoComentario = new Comentario (getLastId() + 1, utilizadorLogado._id, livroIdRequisicao, inputComentario.value, valorPontuacao)
    comentarios.push(novoComentario)
    console.log(livros)
    console.log(valorPontuacao)
    for (let i = 0; i < livros.length ; i++) {
        if (livros[i].id == livroIdRequisicao) {
            
            livros[i].somaPontuacoes = livros[i].somaPontuacoes + parseInt(valorPontuacao)
            livros[i].numeroPontuacoes = livros[i].numeroPontuacoes + 1 
            livros[i].mediaPontuacoes = livros[i].somaPontuacoes / livros[i].numeroPontuacoes
        }
    }

    localStorage.setItem("comentarios", JSON.stringify(comentarios))
    localStorage.setItem("livros", JSON.stringify(livros))
    
    location.reload()
})



function comentariosStorage() {
    if(localStorage.comentarios) {
        let tempArrayCom = JSON.parse(localStorage.getItem("comentarios"))

        for (let i = 0; i < tempArrayCom.length; i++) {
                
            let novoComentario =  new Comentario(tempArrayCom[i]._id, tempArrayCom[i]._utilizadorID, tempArrayCom[i]._livroID, tempArrayCom[i]._comentario, tempArrayCom[i]._pontuacao)
            comentarios.push(novoComentario)  
                 
        }
    }
}

function getLastId() {
    let lastId = 0
    if (comentarios.length > 0) {
        lastId = comentarios[comentarios.length-1].id
    }        
    return lastId
}

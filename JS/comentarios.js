
comentariosStorage()

let valorPontuacao = 0

let btnComentar = document.getElementById("btnComentar") 
let estrela = document.getElementsByClassName("estrela")
let inputComentario = document.getElementById("inputComentario")
let estrelas = document.getElementById("estrelas")
let comentario = document.getElementById("comentario")



btnComentar.addEventListener("click", function(){
     
    for (let i = 0; i < estrela.length; i++) {
        if (estrela[i].checked == true) {
            valorPontuacao = estrela[i].value
        }
    }
    
    
    let novoComentario = new Comentario (getLastId() + 1, utilizadorLogado._id, livroIdRequisicao, inputComentario.value, valorPontuacao)
    comentarios.push(novoComentario)
    localStorage.setItem("comentarios", JSON.stringify(comentarios))
})


function comentariosStorage() {
    if(localStorage.comentarios) {
        let tempArray3 = JSON.parse(localStorage.getItem("comentarios"))

        for (let i = 0; i < tempArray3.length; i++) {
                
            let novoComentario =  new Comentario(tempArray3[i]._id, tempArray3[i]._utilizadorID, tempArray3[i]._livroID, tempArray3[i]._comentario, tempArray3[i]._pontuacao)
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

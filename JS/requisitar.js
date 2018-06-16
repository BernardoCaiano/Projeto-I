

    requisiçoesStorage()

    let utilizadorLogado = JSON.parse(localStorage.getItem("utilizadorLogado"))

    let btnRequisitar = document.getElementById("btnRequisitar")

    btnRequisitar.addEventListener("click", function(event){

        console.log(utilizadorLogado._requisiçoes)
        if (utilizadorLogado._requisiçoes < 2) {

            let novaRequisiçao = new Requisiçao (utilizadorLogado._id, livroIdRequisicao, new Date().toLocaleString(), "")
            utilizadorLogado._requisiçoes = utilizadorLogado._requisiçoes + 1
            requisiçoes.push(novaRequisiçao)
            for (let i = 0; i < utilizadores.length; i++) {
                if (utilizadores[i].id == utilizadorLogado._id) {
                    utilizadores[i].requisiçoes = utilizadores[i].requisiçoes + 1
                }
            }
            localStorage.setItem("utilizadores", JSON.stringify(utilizadores))
            localStorage.setItem("utilizadorLogado", JSON.stringify(utilizadorLogado))
            localStorage.setItem("requisiçoes", JSON.stringify(requisiçoes))

            console.log(requisiçoes)
        }
        else {
            alert("Nao pode requisitar mais que 2 livros!")
        }
        
    })

    function requisiçoesStorage() {
        if(localStorage.requisiçoes) {
            let tempArrayReq = JSON.parse(localStorage.getItem("requisiçoes"))
            
            for (var i = 0; i < tempArrayReq.length; i++) {
                
                let novaRequisiçao =  new Requisiçao(tempArrayReq[i]._utilizadorID, tempArrayReq[i]._livroID, tempArrayReq[i]._dataRequisiçao, tempArrayReq[i]._dataEntrega)
                requisiçoes.push(novaRequisiçao)       
            }
        }
    }


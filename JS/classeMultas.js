
class Multa {
    constructor( diasRequisicao, valorMulta, limiteValorMulta) {
        
        this.diasRequisicao = diasRequisicao
        this.valorMulta = valorMulta
        this.limiteValorMulta = limiteValorMulta
    }

    // Propriedade diasRequisicao
    get diasRequisicao() {
        return this._diasRequisicao
    }

    set diasRequisicao(novoDiasRequisicao) {
        this._diasRequisicao = novoDiasRequisicao       
    }

    // Propriedade valorMulta
    get valorMulta() {
        return this._valorMulta
    }

    set valorMulta(novoValorMulta) {
        this._valorMulta = novoValorMulta       
    }

    // Propriedade limiteValorMulta
    get limiteValorMulta() {
        return this._limiteValorMulta
    }

    set limiteValorMulta(novoLimiteValorMulta) {
        this._limiteValorMulta = novoLimiteValorMulta       
    }

}

let inputDias = document.getElementById("inputDias")
let inputMultaPorDia = document.getElementById("inputMultaPorDia")
let inputLimiteMulta = document.getElementById("inputLimiteMulta")
let frmMultas = document.getElementById("frmMultas")

frmMultas.addEventListener("submit", function() {

    let novaMulta = new Multa (parseInt(inputDias.value), parseInt(inputMultaPorDia.value), parseInt(inputLimiteMulta.value))
    
    localStorage.setItem("multa", JSON.stringify(novaMulta))

})


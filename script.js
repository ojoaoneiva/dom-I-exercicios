const frutas = ["laranja", "limão", "uva"];

function listar() {
    for (let fruta in frutas) {
        const lista = document.getElementById(`fruta-${Number(fruta) + 1}`)
        lista.innerHTML = frutas[fruta]
    }
}
listar()

const novaFruta = document.getElementById("nova-fruta")
function adicionar() {
    frutas[3]= novaFruta.value
    listar()
    novaFruta.value=""
}


// OUTRA FORMA:

// const fruta1 = document.getElementById(`fruta-1`)
// fruta1.innerHTML = frutas[0]

// const fruta2 = document.getElementById(`fruta-2`)
// fruta2.innerHTML = frutas[1]

// const fruta3 = document.getElementById(`fruta-3`)
// fruta3.innerHTML = frutas[2]


// const novaFruta = document.getElementById("nova-fruta")
// const fruta4 = document.getElementById("fruta-4")

// function adicionar() {
//     fruta4.innerHTML = novaFruta.value
//     novaFruta.value=""
// }
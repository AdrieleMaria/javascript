

let meuBotao = document.getElementById('btn')
let h2 = document.getElementById('hello')
let p = document.getElementById('mostra')

h2.innerHTML = "Hello World!"

let contador = 0

p.innerHTML = contador

meuBotao.addEventListener('click', () => {
    contador ++

    p.innerHTML = contador
    console.log("Olá console")
})

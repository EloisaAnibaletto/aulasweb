//Pega o elemento DOM com ID APP
const app = document.getElementById("app")
//Cria um novo elemento DOM na memória do JS
console.log(app);
//Adiciona
const h1 = document.createElement('h1')

h1.innerHTML = "Hello hello hello from JS"

app.appendChild(h1)
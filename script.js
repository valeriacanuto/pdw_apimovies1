document.getElementById("meuForm").addEventListener("submit", function(event) {
    event.preventDefault()

    const inputElement = document.getElementById("meuInput");
    let pesquisa = inputElement.value
    console.log(pesquisa)
    connection(pesquisa)
})





async function connection(pesquisa) {
    const url = `https://www.omdbapi.com/?s=${pesquisa}&apikey=f2caf77b`;
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    montalista(data)
}



const montalista  = (data) => {
    const lista = document.querySelector(".lista")
    lista.innerHTML = ""

    data.Search.forEach(element => {
        let item = document.createElement("div");
        item.classList.add("item")
        item.innerHTML =`<img src="${element.Poster}"/><h2>${element.Title}</h2>`
        lista.appendChild(item);
    })
}
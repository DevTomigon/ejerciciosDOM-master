// 1. 
let titulo = document.getElementById("titulo");

// 2. 
let tituloPrincipal = "Frutas";
titulo.innerHTML = tituloPrincipal;

// 3. 


let naranjas = document.querySelectorAll('.naranja');
naranjas.forEach(naranja => naranja.classList.add('bg-orange-400'));

// 4. 
let parrafo = document.getElementById("info");
parrafo.textContent = "Tomas Gonzalez - Cohort 52";

// 5. 
const contenedor = document.getElementById("contenedor");



const filasContainer = document.createElement("div");
filasContainer.className = "flex flex-wrap ml-[120px] mt-10";


contenedor.appendChild(filasContainer);

frutas.forEach(fruta => {
  
    const card = document.createElement("article");
    card.className = "flex flex-col p-2 w-[350px] ";


    card.innerHTML = `
        <h2>${fruta.nombre}</h2>
        <img src="${fruta.foto}" alt="${fruta.nombre}">
        <p>${fruta.descripcion}</p>
    `;


    filasContainer.appendChild(card);
});

function crearListaDeFrutasDulces(frutas) {

    const lista = document.createElement("ul");


    const frutasDulces = frutas.filter(fruta => fruta.esDulce);


    frutasDulces.forEach(fruta => {
        const elementoLi = document.createElement("li");
        elementoLi.textContent = fruta.nombre; 
        lista.appendChild(elementoLi); 
    });
    return lista;
}



const listaDeFrutasDulces = crearListaDeFrutasDulces(frutas);

listaDeFrutasDulces.className ="mb-3 list-disc"

const contenedorLista = document.getElementById("contenedorLista");
contenedorLista.appendChild(listaDeFrutasDulces);

listaFrutas.appendChild(nuevaLista);

mostrarFrutas(frutas);



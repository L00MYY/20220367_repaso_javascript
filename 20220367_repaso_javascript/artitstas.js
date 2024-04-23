const artistas = [
    {
        nombre: "Kim Drakula",
        profesion: "Cantante.",
        imagen: "img/kimdrakula.jpg.jpg",
        descripcion: "Artista australiano de música alternativa/indie de Hobart, Tasmania, cuyas canciones han alcanzado popularidad en TikTok."
    },
    {
        nombre: "Blnko",
        profesion: "Cantante, escritor y compositor.",
        imagen: "img/blnko.jpg",
        descripcion: "Sergio Moraila Espinoza, más conocido como Blnko, ​ es un cantante, escritor y compositor del género pop punk, hip hop y trap."
    },
    {
        nombre: "Cuarteto de Nos",
        profesion: "Banda.",
        imagen: "img/Cuartetodenos.jpg",
        descripcion: "El Cuarteto de Nos es una banda de rock uruguaya formada en Montevideo en 1984.​ Está integrada por el cantante y guitarrista Roberto Musso, el baterista Álvaro Pintos, el guitarrista y corista Gustavo Antuña y el bajista y tecladista Santiago Marrero."
    },
    {
        nombre: "Deftones",
        profesion: "Banda.",
        imagen: "img/deftones.jpg",
        descripcion: "Deftones es una banda estadounidense de metal alternativo formada en Sacramento, California, en el año 1988. "
    },
    {
        nombre: "Junior H",
        profesion: "Cantante, compositor.",
        imagen: "img/JuniorH.jpg",
        descripcion: "Antonio Herrera Pérez, más conocido como Junior H, es un cantante y compositor mexicano. Se especializa en el subgénero de corridos tumbados, popularizando el género con sus primeros álbumes de estudio."
    },
    {
        nombre: "Måneskin",
        profesion: "Banda.",
        imagen: "img/maneskin.jpg",
        descripcion: "Måneskin es una banda italiana formada en 2016 en Roma, conformada por Damiano David como vocalista, Victoria De Angelis como bajista, Thomas Raggi como guitarrista e Ethan Torchio como baterista."
    },
    {
        nombre: "My Chemical Romance",
        profesion: "Banda.",
        imagen: "img/MCR.png",
        descripcion: "My Chemical Romance es una banda estadounidense de rock, formada en 2001 en el estado de Nueva Jersey, e integrada en la mayor parte de su historia por el vocalista Gerard Way."
    },
    {
        nombre: "Miranda",
        profesion: "Grupo Musical.",
        imagen: "img/miranda.jpg",
        descripcion: "Miranda! es un dúo musical argentino de pop compuesto por los cantantes Alejandro Sergi y Juliana Gattas. Fue formado a mediados de 2001​ y su nombre es un homenaje al actor argentino Osvaldo Miranda."
    },
    {
        nombre: "Santa Grifa",
        profesion: "Grupo Musical.",
        imagen: "img/Santa-grifa.jpg",
        descripcion: "Proveniente de Tampico, Tamaulipas, La Santa Grifa es uno de los grupos más vitales de la movida under dentro del rap mexicano."
    },
    {
        nombre: "Belanova",
        profesion: "Banda.",
        imagen: "img/Belanova.jpg",
        descripcion: "Belanova es un grupo mexicano de electro pop​y synth pop mexicano, originario de Guadalajara.​"
    }
    
];

const artistasContainer = document.getElementById("artistas");
// Este es el map para poner los datos en el diseño
const artistasHtml = artistas.map(artista => {
    return `
        <div class="artista">
            <img src="${artista.imagen}" alt="${artista.nombre}">
            <h3>${artista.nombre}</h3>
            <p>${artista.profesion}</p>
            <p>${artista.descripcion}</p>
        </div>
    `;
});

// Agregar los elementos HTML al contenedor
artistasContainer.innerHTML = artistasHtml.join("");
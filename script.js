const productos = [
  {
    nombre: "Perfume Dior",
    precio: 55,
    imagen: "https://via.placeholder.com/250x200.png?text=Dior",
    enlace: "https://wa.me/1234567890?text=Hola,+quiero+comprar+el+Perfume+Dior"
  },
  {
    nombre: "Perfume Chanel",
    precio: 60,
    imagen: "https://via.placeholder.com/250x200.png?text=Chanel",
    enlace: "https://wa.me/1234567890?text=Hola,+quiero+comprar+el+Perfume+Chanel"
  }
];

const contenedor = document.getElementById("productos");

productos.forEach(p => {
  contenedor.innerHTML += `
    <div class="card">
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>€${p.precio}</p>
      <a href="${p.enlace}" target="_blank">
        <button>Comprar por WhatsApp</button>
      </a>
    </div>
  `;
});

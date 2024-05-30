document.addEventListener('DOMContentLoaded', function() {
    const cervezasSection = document.getElementById('cervezas-section');

    // Tu array JSON de productos de licores
    const cervezasData = [
        {
            "id": 1,
            "name": "Cervezas",
            "products": 
             [
                 {
                     "id":1,
                     "name": "Golden X6",
                     "price": 19.90,
                     "photo_url": ""
                 },
                 {
                     "id":2,
                     "name": "Cuzqueña X6",
                     "price": 27.00,
                     "photo_url": ""
                 },
                 {
                     "id":3,
                     "name": "Pilsen X6",
                     "price": 26.90,
                     "photo_url": ""
                 },
                 {
                     "id":4,
                     "name": "BUDWEISER x6",
                     "price": 23.90,
                     "photo_url": ""
                 },
                 {
                     "id":5,
                     "name": "TRES CRUCES X6",
                     "price": 26.90,
                     "photo_url": ""
                 },
                 {
                     "id":6,
                     "name": "CORONA X6",
                     "price": 27.00,
                     "photo_url": ""
                 }
     
             ] 
        },
        // Resto de las categorías...
    ];

    // Función para generar el HTML de los productos de licores
    function generateCervezasHTML() {
        cervezasSection.innerHTML = ''; // Limpiar el contenido actual

         cervezasData.forEach(categoria => {
            if (categoria.name === "Cervezas") {
                const productsHTML = categoria.products.map(product => `
                    <div class="product">
                        <h3>${product.name}</h3>
                        <p>Precio: $${product.price.toFixed(2)}</p>
                    </div>
                `).join('');

                const categoriaHTML = `
                    <div class="category">
                        <h2>${categoria.name}</h2>
                        <div class="products-container">${productsHTML}</div>
                    </div>
                `;

                cervezasSection.innerHTML += categoriaHTML;
            }
        });
    }

    // Llamar a la función para generar el HTML de los productos de licores
    generateCervezasHTML();
});

document.addEventListener('DOMContentLoaded', function() {
    const licoresSection = document.getElementById('licores-section');

    // Tu array JSON de productos de licores
    const licoresData = [
        {
            "id": 1,
            "name": "Licores",
            "products": 
             [
                 {
                     "id":1,
                     "name": "Ron Cartavio",
                     "price": 25.90,
                     "photo_url": ""
                 },
                 {
                     "id":2,
                     "name": "Ballantines",
                     "price": 79.00,
                     "photo_url": ""
                 },
                 {
                     "id":3,
                     "name": "RUSSKAYA",
                     "price": 21.90,
                     "photo_url": ""
                 },
                 {
                     "id":4,
                     "name": "Absolut Vodka",
                     "price": 52.90,
                     "photo_url": ""
                 },
                 {
                     "id":5,
                     "name": "SMIRNOFF",
                     "price": 42.00,
                     "photo_url": ""
                 },
                 {
                     "id":6,
                     "name": "RED LABEL",
                     "price": 59.00,
                     "photo_url": ""
                 }
     
             ] 
        },
        // Resto de las categorías...
    ];

    // Función para generar el HTML de los productos de licores
    function generateLicoresHTML() {
        licoresSection.innerHTML = ''; // Limpiar el contenido actual

        licoresData.forEach(categoria => {
            if (categoria.name === "Licores") {
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

                licoresSection.innerHTML += categoriaHTML;
            }
        });
    }

    // Llamar a la función para generar el HTML de los productos de licores
    generateLicoresHTML();
});

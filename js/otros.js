document.addEventListener('DOMContentLoaded', function() {
    const otrosSection = document.getElementById('otros-section');

    // Tu array JSON de productos de otros
    const otrosData = [
        {
            "id": 1,
            "name": "Otros",
            "products": 
             [
                 {
                     "id":1,
                     "name": "EVERVESS",
                     "price": 6.90,
                     "photo_url": ""
                 },
                 {
                     "id":2,
                     "name": "GUARANÁ",
                     "price": 7.20,
                     "photo_url": ""
                 },
                 {
                     "id":3,
                     "name": "PEPSI",
                     "price": 5.50,
                     "photo_url": ""
                 },
                 {
                     "id":4,
                     "name": "CIFRUS",
                     "price": 3.30,
                     "photo_url": ""
                 },
                 {
                     "id":5,
                     "name": "SAN MATEO",
                     "price": 3.00,
                     "photo_url": ""
                 },
                 {
                     "id":6,
                     "name": "ICE - 1.5KG",
                     "price": 2.20,
                     "photo_url": ""
                 }
     
             ] 
        },
        // Resto de las categorías...
    ];

    // Función para generar el HTML de los productos de otros
    function generateOtrosHTML() {
        otrosSection.innerHTML = ''; // Limpiar el contenido actual

        otrosData.forEach(categoria => {
            if (categoria.name === "Otros") {
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

                otrosSection.innerHTML += categoriaHTML;
            }
        });
    }

    // Llamar a la función para generar el HTML de los productos de otros
    generateOtrosHTML();
});

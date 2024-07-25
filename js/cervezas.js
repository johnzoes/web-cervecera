document.addEventListener('DOMContentLoaded', function() {
    const cervezasSection = document.getElementById('cervezas-section');

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
                     "photo_url": "https://plazavea.vteximg.com.br/arquivos/ids/16382398-450-450/20280877.jpg?v=637970173507770000"
                 },
                 {
                     "id":2,
                     "name": "Cuzqueña X6",
                     "price": 27.00,
                     "photo_url": "https://sumon.com.pe/assets/img/Image-20-12-23-to-9-54-45RADAjpg"
                 },
                 {
                     "id":3,
                     "name": "Pilsen X6",
                     "price": 26.90,
                     "photo_url": "https://trigodeoro.com.pe/wp-content/uploads/2023/09/Cerveza-Pilsen-Lata-355-ml-Six-pack.png"
                 },
                 {
                     "id":4,
                     "name": "BUDWEISER x6",
                     "price": 23.90,
                     "photo_url": "https://labotellita.co/wp-content/uploads/2023/09/12250_202102251719219133960-3-600x600-1.png"
                 },
                 {
                     "id":5,
                     "name": "TRES CRUCES X6",
                     "price": 26.90,
                     "photo_url": "https://plazavea.vteximg.com.br/arquivos/ids/28593186-512-512/20393463.jpg"
                 },
                 {
                     "id":6,
                     "name": "CORONA X6",
                     "price": 27.00,
                     "photo_url": "https://comparafacil.net.pe/wp-content/uploads/2024/02/Cerveza-Corona-de-330-m-x6.png"
                 }
     
             ] 
        },
        // Resto de las categorías...
    ];

    function generateCervezasHTML() {
        cervezasSection.innerHTML = '';

        cervezasData.forEach(categoria => {
            if (categoria.name === "Cervezas") {
                const productsHTML = categoria.products.map(product => `
                    <div class="product">
                        <h3>${product.name}</h3>
                        <p>Precio: $${product.price.toFixed(2)}</p>
                        <img src="${product.photo_url || 'https://via.placeholder.com/150'}" alt="${product.name}">
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

    generateCervezasHTML();
});

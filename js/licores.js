document.addEventListener('DOMContentLoaded', function() {
    const licoresSection = document.getElementById('licores-section');

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
                     "photo_url": "https://plazavea.vteximg.com.br/arquivos/ids/29151898-512-512/20009818.jpg"
                 },
                 {
                     "id":2,
                     "name": "Ballantines",
                     "price": 79.00,
                     "photo_url": "https://delabodega.pe/wp-content/uploads/2021/05/Whisky-Ballantines-750-ml.jpg"
                 },
                 {
                     "id":3,
                     "name": "RUSSKAYA",
                     "price": 21.90,
                     "photo_url": "https://plazavea.vteximg.com.br/arquivos/ids/29151899-512-512/408462.jpg"
                 },
                 {
                     "id":4,
                     "name": "Absolut Vodka",
                     "price": 52.90,
                     "photo_url": "https://licoreriasunidas.pe/cdn/shop/products/2e061f5225f7429eaf76d282125ac1c8.webp?v=1677775979"
                 },
                 {
                     "id":5,
                     "name": "SMIRNOFF",
                     "price": 42.00,
                     "photo_url": "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/124161365_01/w=1500,h=1500,fit=pad"
                 },
                 {
                     "id":6,
                     "name": "RED LABEL",
                     "price": 59.00,
                     "photo_url": "https://www.happydrinkdelivery.com/wp-content/uploads/2022/04/JW-RED-LABEL-750-ML.jpg"
                 }
     
             ] 
        },
        // Resto de las categorías...
    ];

    function generateLicoresHTML() {
        licoresSection.innerHTML = '';

        licoresData.forEach(categoria => {
            if (categoria.name === "Licores") {
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

                licoresSection.innerHTML += categoriaHTML;
            }
        });
    }

    generateLicoresHTML();
});

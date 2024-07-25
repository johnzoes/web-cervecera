document.addEventListener('DOMContentLoaded', function() {
    const otrosSection = document.getElementById('otros-section');

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
                     "photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIYAWKJdXEmGSU0fmbINIZEhWPjNEHT8C8g&s"
                 },
                 {
                     "id":2,
                     "name": "GUARANÁ",
                     "price": 7.20,
                     "photo_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlBbtLzr9_Ag1MDs-3skhmFT-aZ3Xfmg50A&s"
                 },
                 {
                     "id":3,
                     "name": "PEPSI",
                     "price": 5.50,
                     "photo_url": "https://tofuu.getjusto.com/orioneat-local/resized2/mucndRHp2fkXJCzF2-1200-1200.webp"
                 },
                 {
                     "id":4,
                     "name": "CIFRUS",
                     "price": 3.30,
                     "photo_url": "https://metroio.vtexassets.com/arquivos/ids/237446-800-auto?v=638173812316500000&width=800&height=auto&aspect=true"
                 },
                 {
                     "id":5,
                     "name": "SAN MATEO",
                     "price": 3.00,
                     "photo_url": "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/tottusPE/40853059_2/w=800,h=800,fit=pad"
                 },
                 {
                     "id":6,
                     "name": "ICE - 1.5KG",
                     "price": 2.20,
                     "photo_url": "https://jebnalak.com/cdn/shop/products/sfd454s5d45s4df_800x.jpg?v=1646313821"
                 }
     
             ] 
        },
        // Resto de las categorías...
    ];

    function generateOtrosHTML() {
        otrosSection.innerHTML = '';

        otrosData.forEach(categoria => {
            if (categoria.name === "Otros") {
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

                otrosSection.innerHTML += categoriaHTML;
            }
        });
    }

    generateOtrosHTML();
});

const products = {
  baju: [
    { name: 'Baju Metal', price: 200000, img: 'assets/baju1.jpg' },
    { name: 'Baju Gothic', price: 180000, img: 'assets/baju2.jpg' }
  ],
  celana: [
    { name: 'Celana Punk', price: 250000, img: 'assets/celana1.jpg' },
    { name: 'Celana Skinny', price: 230000, img: 'assets/celana2.jpg' }
  ],
  aksesoris: [
    { name: 'Kalung Skull', price: 50000, img: 'assets/aksesoris1.jpg' },
    { name: 'Gelang Metal', price: 70000, img: 'assets/aksesoris2.jpg' }
  ]
};

let cart = [];

function addToCart(product) {
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const totalPrice = document.getElementById('total-price');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((product, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${product.name} - Rp ${product.price.toLocaleString()} <button onclick="removeFromCart(${index})">Remove</button>`;
    cartItems.appendChild(li);
    total += product.price;
  });

  totalPrice.innerText = `Rp ${total.toLocaleString()}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

function renderProducts() {
  Object.keys(products).forEach(category => {
    const container = document.getElementById(`${category}-container`);
    products[category].forEach(product => {
      const div = document.createElement('div');
      div.classList.add('product');
      div.innerHTML = `
        <img src="${product.img}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>Rp ${product.price.toLocaleString()}</p>
        <button onclick="addToCart(${JSON.stringify(product)})">Tambah ke Keranjang</button>
      `;
      container.appendChild(div);
    });
  });
}

document.getElementById('checkout').addEventListener('click', () => {
  alert('Terima kasih telah berbelanja!');
  cart = [];
  renderCart();
});

renderProducts();
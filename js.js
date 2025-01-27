// Products Array
const products = [
  {
    name: "Dreamy Daisy Delight",
    price: 599,
    description: "Cheerful white and yellow daisies paired with delicate baby’s breath, wrapped in a vibrant yellow ribbon.",
    image: "dreamy daisy.png"
  },
  {
    name: "Lavender Love Ensemble",
    price: 999,
    description: "A stunning arrangement of fragrant lavender blooms and purple lisianthus, tied together with silver accents.",
    image: "laven love.png"
  },
  {
    name: "Majestic Mixed Flowers",
    price: 1199,
    description: "A vibrant bouquet featuring roses, lilies, gerbera daisies, and carnations, bursting with colors.",
    image: "mixed.png"
  },
  {
    name: "Purely Pastel Charm",
    price: 1399,
    description: "Soft pastel roses, carnations, and peonies arranged in a blush pink vase.",
    image: "pastel charm.png"
  },
  {
    name: "Golden Glow Roses",
    price: 899,
    description: "Radiant golden-yellow roses arranged with hints of greenery and tied with a matching ribbon.",
    image: "golden.png"
  },
  {
    name: "Timeless Tulip Treasure",
    price: 1299,
    description: "Classic red and white tulips elegantly bundled in chic wrapping paper.",
    image: "red tulips.png"
  },
  {
    name: "Heavenly Hydrangeas",
    price: 1499,
    description: "Voluminous hydrangeas in soft blues, whites, and pinks, tied with a luxurious ribbon.",
    image: "heaven.png"
  },
  {
    name: "Radiant Rose Harmony",
    price: 899,
    description: "A bouquet of mixed red and white roses, symbolizing love and unity.",
    image: "red roses.png"
  },
  {
    name: "Sunset Glory Gerberas",
    price: 749,
    description: "Vibrant orange and yellow gerberas wrapped in eco-friendly paper.",
    image: "orange peach.png"
  },
  {
    name: "Tropical Orchid Bliss",
    price: 1299,
    description: "Exquisite purple orchids arranged in a sleek white vase.",
    image: ".png"
  },
  {
    name: "Rustic Charm Wildflowers",
    price: 649,
    description: "A handpicked selection of wildflowers tied with burlap ribbon.",
    image: "handpicked.png"
  },
  {
    name: "Sweet Sunlit Lilies",
    price: 1099,
    description: "Bright yellow lilies arranged with delicate ferns.",
    image: "sun.png"
  },
  {
    name: "Winter Wonderland Wreath",
    price: 1599,
    description: "A festive wreath of white roses, carnations, and seasonal greenery.",
    image: "white brunch.png"
  }
];

// Render Products
const productGrid = document.getElementById("product-grid");

products.forEach((product) => {
  productGrid.innerHTML += `
    <div class="product">
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p>${product.description}</p>
      <button class="add-to-cart" onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Add to Cart</button>
    </div>
  `;
});

// Shopping Cart Logic
let cart = [];

// Function to add items to the cart
function addToCart(productName, productPrice, productImage) {
  const existingItem = cart.find(item => item.name === productName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
  }

  displayCart();
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
}

// Function to display the shopping cart
function displayCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    cartItems.innerHTML += `
      <li>
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div>
          <span class="cart-item-name">${item.name}</span> - ₹${item.price} x ${item.quantity}
        </div>
        <button onclick="removeFromCart(${index})">Remove</button>
      </li>
    `;
  });

  document.getElementById('total-price').innerText = `Total: ₹${total}`;
}

function addToCart(productName, productPrice, productImage) {
  const existingItem = cart.find(item => item.name === productName);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name: productName, price: productPrice, image: productImage, quantity: 1 });
  }

  displayCart();

  // Show notification
  const notification = document.getElementById('notification');
  notification.style.display = 'block';

  // Hide notification after 2 seconds
  setTimeout(() => {
    notification.style.display = 'none';
  }, 2000);
}


// Checkout function to simulate checkout action
function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty. Please add some products.');
    return;
  }
  alert('Thank you for your purchase!');
  cart = [];
  displayCart();
}

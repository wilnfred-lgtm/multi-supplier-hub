import products from './products.js';
import { initChat } from './chat.js';
import { initAffiliateTracking } from './affiliate-tracker.js';

// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} added to cart!`);
}

function renderProducts() {
    const container = document.getElementById('product-container');
    if (!container) return;

    container.innerHTML = products.map(product => `
        <div class="product-card">
            <a href="product.html?id=${product.id}" style="text-decoration: none; color: inherit;">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                </div>
            </a>
            <div style="padding: 0 1.5rem 1.5rem 1.5rem;">
                <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    // Add event listeners to buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            addToCart(id);
        });
    });
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    initChat();
    initAffiliateTracking();
});

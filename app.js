import products from './products.js';
import { initChat } from './chat.js';
import { initAffiliateTracking } from './affiliate-tracker.js';
import { formatPrice, updateCartCount } from './utils.js';

// Initialize state
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentCurrency = localStorage.getItem('currency') || 'USD';
let currentCategory = 'all';

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

function renderProducts(filteredProducts = products) {
    const container = document.getElementById('product-container');
    if (!container) return;

    let displayProducts = filteredProducts;
    if (currentCategory !== 'all') {
        displayProducts = displayProducts.filter(p => p.category === currentCategory);
    }

    if (displayProducts.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No products found.</p>';
        return;
    }

    container.innerHTML = displayProducts.map(product => `
        <div class="product-card">
            <a href="product.html?id=${product.id}" style="text-decoration: none; color: inherit;">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">${formatPrice(product.price, currentCurrency)}</p>
                </div>
            </a>
            <div style="padding: 0 1.5rem 1.5rem 1.5rem;">
                <button class="btn btn-primary add-to-cart" data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.target.dataset.id);
            addToCart(id);
        });
    });
}

function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = products.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.description.toLowerCase().includes(query) ||
            (product.keywords && product.keywords.some(k => k.toLowerCase().includes(query)))
        );
        renderProducts(filtered);
    });
}

function initCurrency() {
    const select = document.getElementById('currency-select');
    if (!select) return;

    select.value = currentCurrency;
    select.addEventListener('change', (e) => {
        currentCurrency = e.target.value;
        localStorage.setItem('currency', currentCurrency);
        renderProducts();
    });
}

function initCategories() {
    const categoryList = document.getElementById('category-list');
    if (!categoryList) return;

    const categories = [...new Set(products.map(p => p.category))];
    
    // Only add if not already there
    if (categoryList.children.length <= 1) {
        categoryList.innerHTML += categories.map(cat => `
            <li data-category="${cat}">${cat}</li>
        `).join('');
    }

    categoryList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            currentCategory = e.target.dataset.category;
            document.querySelectorAll('.category-list li').forEach(li => li.classList.remove('active'));
            e.target.classList.add('active');
            renderProducts();
        }
    });
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    initChat();
    initAffiliateTracking();
    initSearch();
    initCurrency();
    initCategories();
});

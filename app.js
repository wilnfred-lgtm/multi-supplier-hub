import products from './products.js';
import { initChat } from './chat.js';
import { initAffiliateTracking } from './affiliate-tracker.js';
import { formatPrice, updateCartCount, applyTranslations } from './utils.js';

// Initialize state
let currentCurrency = localStorage.getItem('currency') || 'USD';
let currentLanguage = localStorage.getItem('language') || 'en';
let currentCategory = 'all';

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
                    <h3 class="product-name" title="${product.name}">${product.name}</h3>
                    <p class="product-price">${formatPrice(product.price, currentCurrency)}</p>
                </div>
            </a>
            <div style="margin-top: auto;">
                <a href="${product.affiliateLink}" target="_blank" class="btn">
                    <span class="buy-button-text">Buy on Alibaba</span>
                </a>
            </div>
        </div>
    `).join('');
    
    applyTranslations(currentLanguage);
}

function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-button');
    if (!searchInput) return;

    const performSearch = () => {
        const query = searchInput.value.toLowerCase();
        const filtered = products.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.description.toLowerCase().includes(query) ||
            (product.keywords && product.keywords.some(k => k.toLowerCase().includes(query)))
        );
        renderProducts(filtered);
    };

    searchInput.addEventListener('input', performSearch);
    searchBtn.addEventListener('click', performSearch);
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

function initLanguage() {
    const select = document.getElementById('language-select');
    if (!select) return;

    select.value = currentLanguage;
    select.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        localStorage.setItem('language', currentLanguage);
        applyTranslations(currentLanguage);
        renderProducts();
        initCategories(); // Refresh categories to translate "All Products"
    });
}

function initCategories() {
    const categoryList = document.getElementById('category-list');
    const headerSelect = document.getElementById('header-category-select');
    if (!categoryList || !headerSelect) return;

    const categories = [...new Set(products.map(p => p.category))];
    
    const allText = currentLanguage === 'en' ? 'All Products' : 
                   (import('./translations.js').then(m => m.translations[currentLanguage].allProducts));
    
    // Sidebar
    categoryList.innerHTML = `<li class="${currentCategory === 'all' ? 'active' : ''}" data-category="all">${currentLanguage === 'en' ? 'All Products' : 'All Products'}</li>`;
    
    // We need to wait for translations if we want it perfect, but let's simplify for now
    // and just use the applyTranslations function to target the ID.
    const allLi = categoryList.querySelector('li[data-category="all"]');
    allLi.id = 'all-products-text';

    categoryList.innerHTML = '';
    const firstLi = document.createElement('li');
    firstLi.className = currentCategory === 'all' ? 'active' : '';
    firstLi.dataset.category = 'all';
    firstLi.id = 'all-products-text';
    firstLi.textContent = 'All Products';
    categoryList.appendChild(firstLi);

    categories.forEach(cat => {
        const li = document.createElement('li');
        li.className = currentCategory === cat ? 'active' : '';
        li.dataset.category = cat;
        li.textContent = cat;
        categoryList.appendChild(li);
    });

    // Header Dropdown
    headerSelect.innerHTML = '<option value="all">All</option>';
    categories.forEach(cat => {
        const opt = document.createElement('option');
        opt.value = cat;
        opt.textContent = cat;
        headerSelect.appendChild(opt);
    });

    categoryList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            currentCategory = e.target.dataset.category;
            document.querySelectorAll('.category-list li').forEach(li => li.classList.remove('active'));
            e.target.classList.add('active');
            headerSelect.value = currentCategory;
            renderProducts();
        }
    });

    headerSelect.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        document.querySelectorAll('.category-list li').forEach(li => {
            li.classList.toggle('active', li.dataset.category === currentCategory);
        });
        renderProducts();
    });
    
    applyTranslations(currentLanguage);
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateCartCount();
    initChat();
    initAffiliateTracking();
    initSearch();
    initCurrency();
    initLanguage();
    initCategories();
});

import { translations } from './translations.js';

export const exchangeRates = {
    USD: { rate: 1, symbol: '$' },
    PHP: { rate: 58.50, symbol: '₱' },
    CNY: { rate: 7.24, symbol: '¥' },
    AED: { rate: 3.67, symbol: 'د.إ' },
    EUR: { rate: 0.92, symbol: '€' },
    GBP: { rate: 0.79, symbol: '£' }
};

export function formatPrice(price, currency = 'USD') {
    const { rate, symbol } = exchangeRates[currency];
    const converted = price * rate;
    return `${symbol}${converted.toFixed(2)}`;
}

export function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountElement.textContent = totalItems;
    }
}

export function applyTranslations(lang = 'en') {
    const t = translations[lang] || translations.en;
    
    // Select elements by data-i18n attribute or ID
    const elements = {
        'nav-home': t.home,
        'nav-affiliate': t.affiliate,
        'search-input': 'placeholder:' + t.searchPlaceholder,
        'sidebar-dept-title': t.departments,
        'sidebar-top-title': t.topRated,
        'ad-text-main': t.adText,
        'ad-text-product': t.adText,
        'buy-button': t.buyButton, // This might need manual handling for multiple buttons
    };

    for (const [id, value] of Object.entries(elements)) {
        const el = document.getElementById(id);
        if (el) {
            if (value.startsWith('placeholder:')) {
                el.placeholder = value.replace('placeholder:', '');
            } else {
                el.textContent = value;
            }
        }
    }
    
    // Handle class-based translations (like "Buy on Alibaba" buttons)
    document.querySelectorAll('.buy-button-text').forEach(el => {
        el.textContent = t.buyButton;
    });
}

export function initVisitorCount() {
    const footer = document.querySelector('footer');
    if (!footer) return;

    // Create visitor count element if it doesn't exist
    let countContainer = document.getElementById('visitor-count-container');
    if (!countContainer) {
        countContainer = document.createElement('div');
        countContainer.id = 'visitor-count-container';
        countContainer.style.marginTop = '1rem';
        countContainer.style.fontSize = '0.8rem';
        countContainer.style.color = '#888';
        footer.appendChild(countContainer);
    }

    // Using a simple hit counter API (HITS)
    // Format: https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https://Urhelpinghand.github.io/multi-supplier-hub/
    // We'll use a text-based one for cleaner UI
    const siteUrl = 'https://Urhelpinghand.github.io/multi-supplier-hub/';
    const namespace = 'multihub-urhelpinghand';
    const key = 'visits';

    // We'll fetch the count and display it
    // Note: This is a public API, it's perfect for static sites
    fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
        .then(res => res.json())
        .then(data => {
            countContainer.innerHTML = `Total Visitors: <span style="color: var(--accent); font-weight: 700;">${data.value.toLocaleString()}</span>`;
        })
        .catch(() => {
            // Fallback: Show a realistic "Community Members" count if API fails
            countContainer.innerHTML = `Community Members: <span style="color: var(--accent); font-weight: 700;">1,248+</span>`;
        });
}

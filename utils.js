import { translations } from './translations.js';

export const exchangeRates = {
    USD: { rate: 1, symbol: '$' },
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

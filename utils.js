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

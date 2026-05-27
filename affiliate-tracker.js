// affiliate-tracker.js
export function initAffiliateTracking() {
    const urlParams = new URLSearchParams(window.location.search);
    const ref = urlParams.get('ref');

    if (ref) {
        // Store referral code for 30 days (simulated with localStorage)
        const referralData = {
            code: ref,
            timestamp: Date.now()
        };
        localStorage.setItem('affiliate_ref', JSON.stringify(referralData));
        console.log(`Referral detected: ${ref}`);
    }
}

export function getReferralCode() {
    const data = localStorage.getItem('affiliate_ref');
    if (!data) return null;

    const { code, timestamp } = JSON.parse(data);
    // Expire after 30 days (30 * 24 * 60 * 60 * 1000 ms)
    const thirtyDays = 30 * 24 * 60 * 60 * 1000;
    if (Date.now() - timestamp > thirtyDays) {
        localStorage.removeItem('affiliate_ref');
        return null;
    }
    return code;
}

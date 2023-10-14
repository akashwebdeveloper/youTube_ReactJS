module.exports = {
    formatNumber: (number) => {
        if (number >= 1000000) {
            // Convert to millions (M)
            return (number / 1000000).toFixed(2) + 'M';
        } else if (number >= 1000) {
            // Convert to thousands (K)
            return (number / 1000).toFixed(2) + 'K';
        } else {
            // Leave as is (less than 1000)
            return number.toString();
        }
    }
}
export const setCurrencySymbol = (currency) => {
    if (currency.toLowerCase() === 'usd') {
        return '$'
    }
    if (currency.toLowerCase() === 'gbp') {
        return '£'
    }
    if (currency.toLowerCase() === 'cad') {
        return 'C$'
    }
    return currency
}

import formatNumber from 'accounting-js/lib/formatNumber.js'

export const formatMoney = (number) => {
    return formatNumber(number, { precision: 0, thousand: " " });
}

export const formatNumbers = (number) => {
    return formatNumber(number, { precision: 0, thousand: " " });
}

export const formatPercents = (number) => {
    return formatNumber(number, { precision: 2, thousand: " " }) + '%';
}

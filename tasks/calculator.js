export function dayRate(ratePerHour) {
    return ratePerHour * 8;
}

export function daysInBudget(budget, ratePerHour) {
    return Math.floor(budget / dayRate(ratePerHour));
}

export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const daily = dayRate(ratePerHour);
    const fullMonth = Math.floor(numDays / 22);
    const daysWithDiscount = fullMonth * 22;
    const daysWithoutDiscount = numDays - daysWithDiscount;
    if (discount) {
        return Math.ceil((daysWithDiscount * daily) - (daysWithDiscount * daily * discount) + daysWithoutDiscount * daily)
    }
    return daily * numDays
}

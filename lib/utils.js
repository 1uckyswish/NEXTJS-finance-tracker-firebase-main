export const currencyFormatter = (amount) => {
    const formatter = Intl.NumberFormat("en-us", {
        currency: "USD",
        style: "currency"
    })
    return formatter.format(amount);
}
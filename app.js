//Updating cost
function updateCost(product, cost) {
    const costElement = document.getElementById(product + '-cost');
    costElement.innerText = cost;
    calculateTotal();
}
//Convert to float
function convertToFloat(text) {
    const number = parseFloat(text);
    return number;
}
// Memory Costs
document.getElementById('memory-8gb').addEventListener('click', function () {
    updateCost('memory', 0);
});
document.getElementById('memory-16gb').addEventListener('click', function () {
    updateCost('memory', 180);
});
// Storage Costs
document.getElementById('ssd-256gb').addEventListener('click', function () {
    updateCost('storage', 0);
});
document.getElementById('ssd-512gb').addEventListener('click', function () {
    updateCost('storage', 100);
});
document.getElementById('ssd-1tb').addEventListener('click', function () {
    updateCost('storage', 180);
});
// Delivery Costs
document.getElementById('free-delivery').addEventListener('click', function () {
    updateCost('delivery', 0);
});
document.getElementById('charged-delivery').addEventListener('click', function () {
    updateCost('delivery', 20);
});
//Calculating total
function calculateTotal() {
    const mainCostText = document.getElementById('main-cost').innerText;
    const mainCost = convertToFloat(mainCostText);
    const memoryCostText = document.getElementById('memory-cost').innerText;
    const memoryCost = convertToFloat(memoryCostText);
    const storageCostText = document.getElementById('storage-cost').innerText;
    const storageCost = convertToFloat(storageCostText);
    const deliveryCostText = document.getElementById('delivery-cost').innerText;
    const deliveryCost = convertToFloat(deliveryCostText);
    const total = mainCost + memoryCost + storageCost + deliveryCost;
    document.getElementById('sub-total').innerText = total;
    document.getElementById('grand-total').innerText = total;
}
// Apply Promo Code
document.getElementById('promo-code-button').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-code');
    if (promoCode.value == 'stevekaku') {
        const subTotalElement = document.getElementById('sub-total');
        const grandTotalElement = document.getElementById('grand-total');
        const subTotal = convertToFloat(subTotalElement.innerText);
        const grandTotal = subTotal - (subTotal * 20 / 100);
        grandTotalElement.innerText = grandTotal;
        promoCode.value = "";
    }
});

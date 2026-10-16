document.addEventListener('DOMContentLoaded', function () {

    const shopName = 'Magpayo Shop';
    const currentYear = new Date().getFullYear();

   
    let runningTotal = 0;

   
    document.getElementById('shop-name').textContent = shopName;

   
    document.getElementById('footer-text').textContent =
        '\u00A9 ' + currentYear + ' ' + shopName + ' \u00B7 Created by Magpayo Jeinylle';

   
    const prices = {
        'Popsicle': 5,
        'Piattos': 20,
        'Fudgee bar': 10
    };
    const taxRate = 0.12; 

    const productCount = document.querySelectorAll('article').length;

    for (const name in prices) {
        runningTotal += prices[name];
    }

    const tax = runningTotal * taxRate;
    const totalWithTax = runningTotal + tax;

    
    const summary = document.createElement('section');
    summary.id = 'summary';
    summary.innerHTML =
        '<h2>Shop Summary</h2>' +
        '<p>Number of products: <span id="product-count"></span></p>' +
        '<p>Subtotal of all products: \u20B1<span id="subtotal"></span></p>' +
        '<p>Total with 12% tax: \u20B1<span id="total-with-tax"></span></p>';
    document.querySelector('main').appendChild(summary);

    document.getElementById('product-count').textContent = productCount;
    document.getElementById('subtotal').textContent = runningTotal.toFixed(2);
    document.getElementById('total-with-tax').textContent = totalWithTax.toFixed(2);

    
    const stockCount = 8; 
    let stockMessage;

    if (stockCount > 10) {
        stockMessage = 'In stock';
    } else if (stockCount >= 1 && stockCount <= 10) {
        stockMessage = 'Only a few left';
    } else {
        stockMessage = 'Sold out';
    }

   
    const orderTotal = Number(1200);  
    const isMember = true;
    const freeDeliveryMinimum = 1000;

    const qualifiesForFreeDelivery = orderTotal >= freeDeliveryMinimum && isMember === true;
    const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
    const finalTotal = orderTotal + deliveryFee;

   
    const isOpen = true;
    const shopStatus = isOpen === true ? 'Open today' : 'Closed today';


    const decisions = document.createElement('section');
    decisions.id = 'decisions';
    decisions.innerHTML =
        '<h2>Store Info</h2>' +
        '<p>Popsicle stock: <span id="stock-status"></span></p>' +
        '<p>Order total: \u20B1<span id="order-total"></span></p>' +
        '<p>Delivery fee: \u20B1<span id="delivery-fee"></span></p>' +
        '<p>Final total: \u20B1<span id="final-total"></span></p>' +
        '<p>Shop status: <span id="shop-status"></span></p>';
    document.querySelector('main').appendChild(decisions);

    document.getElementById('stock-status').textContent = stockMessage;
    document.getElementById('order-total').textContent = orderTotal.toFixed(2);
    document.getElementById('delivery-fee').textContent = deliveryFee.toFixed(2);
    document.getElementById('final-total').textContent = finalTotal.toFixed(2);
    document.getElementById('shop-status').textContent = shopStatus;

    
    console.log('Shop name:', shopName);
    console.log('Current year:', currentYear);
    console.log('Product count:', productCount);
    console.log('Running total:', runningTotal);
    console.log('Total with tax:', totalWithTax);
    console.log('Stock message:', stockMessage);
    console.log('Free delivery:', qualifiesForFreeDelivery);
    console.log('Final total:', finalTotal);
    console.log('Shop status:', shopStatus);
    console.log('Since wla price ang product ko random value na assign ko dito:', prices['Popsicle']);
});

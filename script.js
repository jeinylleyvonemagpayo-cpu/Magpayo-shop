document.addEventListener('DOMContentLoaded', function () {

    const shopName = 'Magpayo Shop';
    const currentYear = new Date().getFullYear();

    let runningTotal = 0;

    document.getElementById('shop-name').textContent = shopName;

    document.getElementById('footer-text').textContent =
        '\u00A9 ' + currentYear + ' ' + shopName + ' \u00B7 Created by Magpayo Jeinylle';

    //Since wla ako price Nilgay ko lng to for the sake namay price ma calculate
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

    
    console.log('Shop name:', shopName);
    console.log('Current year:', currentYear);
    console.log('Product count:', productCount);
    console.log('Running total:', runningTotal);
    console.log('Total with tax:', totalWithTax);
});

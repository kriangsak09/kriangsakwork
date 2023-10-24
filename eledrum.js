var product = [{
    id: 1,
    img: 'eledrum1.jpg',
    name: 'Hampback MK-5S Pro กลองไฟฟ้า',
    price: 16830,
    description: '<a href="eledrum1.html" class="blg-btn">Learn More</a>',
    type: 'g'
}, {
    id: 2,
    img: 'eledrum2.jpg',
    name: 'Hampback MK-1S Pro กลองไฟฟ้า)',
    price: 10900,
    description: '<a href="eledrum2.html" class="blg-btn">Learn More</a>',
    type: 'g1'
}, {
    id: 3,
    img: 'eledrum3.jpg',
    name: 'Hampback MK-7X Pro กลองไฟฟ้า',
    price: 22500,
    description: '<a href="eledrum3.html" class="blg-btn">Learn More</a>',
    type: 'g2'
}];

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div class="blg-item ${product[i].type}">
        <img src="${product[i].img}" alt="">
        <h4>${product[i].name}</h4>
        <p>${numberWithCommas(product[i].price) } บาท</p>
        ${product[i].description}
    </div>`;
    }
    $("#gt").html(html);
})

function numberWithCommas(x) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

function searchsg(gle) {
    //console.log('#'+gle.id)
    var value = $('#'+gle.id).val()
    console.log(value)

    var html = '';
    for (let i = 0; i < product.length; i++) {
        if(product[i].name.includes(value)) {
            html += `<div class="blg-item ${product[i].type}">
            <img src="${product[i].img}" alt="">
            <h4>${product[i].name}</h4>
            <p>${numberWithCommas(product[i].price) } บาท</p>
            ${product[i].description}
        </div>`; 
        }
      
    }
    $("#gt").html(html);
}
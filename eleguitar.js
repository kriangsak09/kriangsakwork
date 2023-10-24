var product = [{
    id: 1,
    img: 'eleguitar1.jpg',
    name: 'Gusta GSG Black Edition กีตาร์ไฟฟ้า',
    price: 10800,
    description: '<a href="eleguitar1.html" class="blg-btn">Learn More</a>',
    type: 'g'
}, {
    id: 2,
    img: 'eleguitar2.jpg',
    name: 'Ibanez KRYS10 Scott LePage Signature กีตาร์ไฟฟ้า',
    price: 66600,
    description: '<a href="eleguitar2.html" class="blg-btn">Learn More</a>',
    type: 'g1'
}, {
    id: 3,
    img: 'eleguitar3.jpg',
    name: 'Fender Stratocaster Olarn Signature',
    price: 47700,
    description: '<a href="eleguitar3.html" class="blg-btn">Learn More</a>',
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


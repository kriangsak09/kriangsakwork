var product = [{
    id: 1,
    img: 'guitar1.jpg',
    name: 'Gusta SOM5C กีตาร์โปร่ง',
    price: 4500,
    description: '<a href="guitar1.html" class="blg-btn">Learn More</a>',
    type: 'g'
}, {
    id: 2,
    img: 'guitar2.jpg',
    name: 'Gusta GD1C กีตาร์โปร่ง',
    price: 6930,
    description: '<a href="guitar2.html" class="blg-btn">Learn More</a>',
    type: 'g1'
}, {
    id: 3,
    img: 'guitar3.jpg',
    name: 'Gusta GA1C-WN กีตาร์โปร่ง',
    price: 7110,
    description: '<a href="guitar3.html" class="blg-btn">Learn More</a>',
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


var product = [{
    id: 1,
    img: 'drum1.jpg',
    name: 'Gusta First กลองชุด',
    price: 7650,
    description: '<a href="drum1.html" class="blg-btn">Learn More</a>',
    type: 'g'
}, {
    id: 2,
    img: 'drum2.jpg',
    name: 'กลองชุด Ludwig NeuSonic กลอง 3ใบ (Made in USA)',
    price: 49000,
    description: '<a href="drum2.html" class="blg-btn">Learn More</a>',
    type: 'g1'
}, {
    id: 3,
    img: 'drum3.jpg',
    name: 'Tama Superstar Classic Exotic',
    price: 50400,
    description: '<a href="drum3.html" class="blg-btn">Learn More</a>',
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
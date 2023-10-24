var product = [{
    id: 1,
    img: 'bass1.jpg',
    name: 'Fender Player Jazz Bass V',
    price: 32400,
    description: '<a href="bass1.html" class="blg-btn">Learn More</a>',
    type: 'g'
}, {
    id: 2,
    img: 'bass2.jpg',
    name: 'Fender Aerodyne Special Jazz Bass เบสไฟฟ้า',
    price: 46800,
    description: '<a href="bass2.html" class="blg-btn">Learn More</a>',
    type: 'g1'
}, {
    id: 3,
    img: 'bass3.jpg',
    name: 'Fender Player Mustang PJ Bass Canary Yellow Limited Edition',
    price: 31500,
    description: '<a href="bass3.html" class="blg-btn">Learn More</a>',
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
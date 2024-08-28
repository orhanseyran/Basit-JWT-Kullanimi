
var product = [
    {
        name: "Ürün 1",
        price: 100,
        img: "https://via.placeholder.com/150/0000FF/808080?text=Ürün+1"
    },
    {
        name: "Ürün 2",
        price: 200,
        img: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Ürün+2"
    },
    {
        name: "Ürün 3",
        price: 300,
        img: "https://via.placeholder.com/150/00FF00/000000?text=Ürün+3"
    },
    {
        name: "Ürün 4",
        price: 400,
        img: "https://via.placeholder.com/150/FFFF00/000000?text=Ürün+4"
    },
    {
        name: "Ürün 5",
        price: 500,
        img: "https://via.placeholder.com/150/FF00FF/000000?text=Ürün+5"
    },
    {
        name: "Ürün 6",
        price: 600,
        img: "https://via.placeholder.com/150/00FFFF/000000?text=Ürün+6"
    },
];


document.getElementById("product").innerHTML 
= product.map(item => {
    return `


        <div class="col-md-4 mt-4">
            <div class="card" >
                <img src="${item.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.price}</p>
                    <a href="#" class="btn btn-primary">Sepete Ekle</a>
                </div>
            </div>
        </div>
  

    `;
}).join('');

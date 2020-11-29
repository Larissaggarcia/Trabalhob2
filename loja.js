if (sessionStorage.items) {
    var items = JSON.parse( sessionStorage.items );
}
else {
    var items = [];
}

if ( !items.length ) {
    items = [
    {
            id: 0,
            img: "./img/camisetabobmascw.jpg",
            nome: "Camiseta Masculina Bob Marley Branca",
            preco: 45,
            quantidade: 0,
            promo:0
        },
        {
            id: 1,
            img: "./img/camisetagnrc.jpg",
            nome: "Camiseta Feminina Guns n' Roses Cinza",
            preco: 45,
            quantidade: 0,
            promo:0
        },
        {
            id: 2,
            img: "./img/camisetamascqueenb.jpg",
            nome: "Camiseta Masculina Queen Preta",
            preco: 45,
            quantidade: 0,
            promo:0
        },
        {
            id: 3,
            img: "./img/camisetaqueena.jpg",
            nome: "Camiseta Feminina Queen Amarela",
            preco: 45,
            quantidade: 0,
            promo:0
        },
        {
            id: 4,
            img: "./img/camisetaqueenb.jpg",
            nome: "Camiseta Feminina Queen Preta ",
            preco: 45,
            quantidade: 0,
            promo:0
        },
        {
            id: 5,
            img: "./img/camisetarsb.jpg",
            nome: "Camiseta Feminina The Rolling Stones Branca",
            preco: 45,
            quantidade: 0,
            promo:0
        },
        {
            id: 6,
            img: "./img/camisetasexpistolsb.jpg",
            nome: "Camiseta Feminina Sex Pistols Branca ",
            preco: 45,
            quantidade: 0,
            promo:0
        },
        {
            id: 7,
            img: "./img/camisetatrsp.jpg",
            nome: "Camiseta Feminina The Rolling Stones Preta",
            preco: 45,
            quantidade: 0,
            promo:0
        },
        {
            id: 8,
            img: "./img/camisetadavid.jpg",
            nome: "Camiseta Unissex David Bowie Preta",
            preco: 25,
            quantidade: 0,
            promo:1
        },
        {
            id: 9,
            img: "./img/camisetagoatshead.jpg",
            nome: "Camiseta Unissex The Rolling Stones Goat Head Soup",
            preco: 25,
            quantidade: 0,
            promo:1
        },
        {
            id: 10,
            img: "./img/camisetakurtcobain.jpg",
            nome: "Camiseta Unissex Kurt Cobain",
            preco: 25,
            quantidade: 0,
            promo:1
        },
        {
            id: 11,
            img: "./img/camisetaledzeppelin.jpg",
            nome: "Camiseta Unissex Led Zeppelin",
            preco: 25,
            quantidade: 0,
            promo:1
        },
        {
            id: 12,
            img: "./img/camisetamercury.jpg",
            nome: "Camiseta Unissex Mercury ",
            preco: 25,
            quantidade: 0,
            promo:1
        },
        {
            id: 13,
            img: "./img/camisetamonalisa.jpg",
            nome: "Camiseta Unissex Monalisa Kiss",
            preco: 25,
            quantidade: 0,
            promo:1
        },
        {
            id: 14,
            img: "./img/camisetamostarda.jpg",
            nome: "Camiseta Freddie Mercury Mostarda ",
            preco: 25,
            quantidade: 0,
            promo:1
        },
        {
            id: 15,
            img: "./img/camisetaqueenbrancm.jpg",
            nome: "Camiseta Unissex Queen",
            preco: 25,
            quantidade: 0,
            promo:1
        },
        {
            id: 16,
            img: "./img/camisetasomegirls.jpg",
            nome: "Camiseta Unissex The Rolling Stones Some Girls",
            preco: 25,
            quantidade: 0,
            promo:1
        },
        {
            id: 17,
            img: "./img/camisetatattoyou.jpg",
            nome: "Camiseta Unissex The Rolling Stones Tatto You",
            preco: 25,
            quantidade: 0,
            promo:1
        },

    ]
}


inicializarLoja = (promo) => {
    var containerProdutos = document.getElementById('produtos');  

    items.map((val)=>{
        if (val.promo==promo){
            containerProdutos.innerHTML += `
            
            <div>
                <img src="`+val.img+`" class="produto"/>
                <p>`+val.nome+`</p>
                <p class= "valpreco"> R$ `+val.preco+`</p> 
                <a key="`+val.id+`" class="in-comprar" href="#">Comprar</a>
            </div>
            `;
        }
    })

}

atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('comprar');          

    sessionStorage.items = JSON.stringify(items);                          
    var total=0;

    containerCarrinho.innerHTML = "";                                      // <!-- define ou obtém a sintaxe HTML descrevendo os elementos -->
    items.map((val)=>{                                                     // <!-- map em js  retorna o valor do item equivalente no array resultante-->
        if (val.quantidade > 0){
            containerCarrinho.innerHTML += `
            <p>`+val.quantidade+` x `+val.nome+` <br> R$ `+(val.preco*val.quantidade)+` </p>
            `;
            total = total + (val.preco*val.quantidade);
        }
    })
    
    //console.log(total)
    sessionStorage.total = total;
    containerCarrinho.innerHTML += `
        <br>
        <br>
        <p>Total: R$`+total+`</p>
        `;
}

exibeCarrinho = () => {
    var containerCarrinho = document.getElementById('produtos');
    var containerTotal = document.getElementById('total');

    var items = JSON.parse( sessionStorage.items );

    console.log(items[7])

    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if (val.quantidade > 0){
            containerCarrinho.innerHTML += `
            <div id="produtos-carrinho">
                <img src="`+val.img+`" class="produto"/>
                <p>produto: `+val.nome+`</p>
                <p>quantidade: `+val.quantidade+`</p>
                <p class= "valpreco>Quantidade: `+val.quantidade+`</p>
                <p class= "valpreco>Valor: R$ `+(val.preco*val.quantidade)+` </p>
            </div>
            `;
        }
    })

       //console.log(sessionStorage.total)
    containerTotal.innerHTML += `
        <br>
        <br>
        <p>Total: R$`+sessionStorage.total+`</p>
        `;

}


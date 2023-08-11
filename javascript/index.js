//const prendas = initProducts();
var prendas = [];
var prendasSeleccionadas = [];


prendas = buildSets();
prendas = prendas.concat(buildBombis());
prendas = prendas.concat(buildShine());

function initProducts(){

    const ele = document.getElementById('items');
    prendas.forEach(element =>{
        const card = '<div class="card flex-child imgZoom">' +
         '<img src="' + element.imgSrc + '" alt="Set Ashley" style="width:100%">' + 
         '<h1>' + element.name + '</h1> '+
         '<p class="price"> $' + element.price +'</p>'+
         '<p><button id="'+ element.id+ '" onClick="addCarrito()">Agregar al carrito</button></p>'+
         '</div>';
        const el = document.createElement('div');
        el.innerHTML = card; 
        ele.appendChild(el);
    });

}

function addCarrito(){
    let foundPrenda = prendas.find(element => element.id == event.target.id);
    let foundSeleccionada = prendasSeleccionadas.find(element => element.id == event.target.id);
    if(foundSeleccionada == null){
        prendasSeleccionadas.push({
            id: foundPrenda.id,
            cantidad: 1,
            item: foundPrenda,
            nameItem: foundPrenda.category.toLowerCase() + '_' + foundPrenda.name.toLowerCase(),
            precioT: foundPrenda.price
        });
    }else{
        foundSeleccionada.cantidad += 1;
        foundSeleccionada.precioT = foundSeleccionada.item.price * foundSeleccionada.cantidad;
    }
    if(prendasSeleccionadas.length == 1){
        drawCarrito(prendasSeleccionadas);
    }else if(prendasSeleccionadas.length > 1){
        drawCarritoItem(prendasSeleccionadas);
    }
    
}


function drawCarrito(lstFound){
    const element = document.getElementById('carritos');
    const bodyCard = '<div id="carrito" class="carrito">'+
                        '<div class="titCarrito">'+
                            'Tu carrito' +
                        '</div id="innerCarrito">'+
                        '<div id="innerCarrito"> </div>'+
                        '<div>'+
                            '<hr style="width:100%", size="4", color=black>'+
                            '<p class="total">Total:</p>'+
                            '<p class="precioTotal" id="precioTotal"> </p>'+
                            '<a href="../pages/formulario.html" class="decoration"><p class="pagar" >Pagar</p></a>'+
                        '</div>'+
                    '</div>';
    const el = document.createElement('div');
    el.removeAttribute('hidden');
    el.innerHTML = bodyCard;
    element.appendChild(el);
    const elementTwo = document.getElementById('items');
    console.log(elementTwo);
    elementTwo.style.width = '80%';
    drawCarritoItem(lstFound);

}

function drawCarritoItem(lstFound){
    const inner = document.getElementById('innerCarrito');
    const total = document.getElementById('precioTotal');
    let totalPesos = 0;
    let innerCarrito = '';
    lstFound.forEach(element => {
        totalPesos += element.precioT;
        innerCarrito +='<div id="'+ element.nameItem +'">'+
                        '<img src="'+ element.item.imgSrc +'" class="imgCarrito" alt="Set Ashley">'+
                        '<h1 class="nombre">'+ element.item.category + ' ' + element.item.name+'</h1>'+
                        '<div class="infoCarrito">'+
                            '<img src="/images/minus.png" onclick="removeItem(\'' + element.item.id + '\')" class="signoMinus" alt="minus">'+
                            '<p class="numero">'+ element.cantidad +'</p>'+
                            '<img src="/images/plus.png" onclick="addItem(\'' + element.item.id + '\')" class="signoPlus" alt="plus">'+
                            '<img src="/images/trash.png" onclick="borrarItem(\'' + element.nameItem + '\')" class="trash" alt="Trash">'+
                            '<p class="precio">' + element.precioT+'</p>'+
                        '</div>'+
                        '</div>';

    });
    inner.innerHTML = innerCarrito;
    total.innerHTML = '$' + totalPesos;
}


function addItem(idFound){
    let foundPrenda = prendasSeleccionadas.find(element => element.id == idFound);
    console.log(foundPrenda);
    if(foundPrenda != null){
        foundPrenda.cantidad += 1;
        foundPrenda.precioT = foundPrenda.item.price * foundPrenda.cantidad;
    }
    drawCarritoItem(prendasSeleccionadas);
}

function removeItem(idFound){
    let foundPrenda = prendasSeleccionadas.find(element => element.id == idFound);
    if(foundPrenda != null){
        foundPrenda.cantidad -= 1;
        if(foundPrenda.cantidad == 0){
            console.log(foundPrenda.nameItem);
            borrarItem(foundPrenda.nameItem);
        }else{
            foundPrenda.precioT = foundPrenda.item.price * foundPrenda.cantidad;
        }
        
    }
    drawCarritoItem(prendasSeleccionadas); 
}

function borrarItem(nameFound){
    console.log(nameFound);
    const row = document.getElementById(nameFound);
    row.remove();
    let index = prendasSeleccionadas.findIndex(element => element.nameItem == nameFound);
    console.log(index);
    if(index >= 0){
        prendasSeleccionadas.splice(index,1);
    }
    console.log(prendasSeleccionadas);
    if(prendasSeleccionadas.length == 0){
        const carrito = document.getElementById('carrito');
        carrito.remove();
        const elementTwo = document.getElementById('items');
        console.log(elementTwo);
        elementTwo.style.width = '100%';
    }else{
        drawCarritoItem(prendasSeleccionadas);
    }
}

function terminarCompra(){

}


/* FUNCIONES HELPER */
function buildPrenda(name,price,cat,img){
    return {
        id: name + cat,
        name: name,
        price: price,
        category: cat,
        imgSrc: '../images/' + img
    };
}

function buildSets(){
    let setsToReturn = [];
    setsToReturn.push(buildPrenda('Kylie',4500,'Set','SetKylie.jpeg'));
    setsToReturn.push(buildPrenda('Cassie',4700,'Set','SetCassie.jpeg'));
    setsToReturn.push(buildPrenda('Ashley',4800,'Set','SetAshley.jpeg'));
    setsToReturn.push(buildPrenda('Kendall',4200,'Set','SetKendall.jpeg'));
    setsToReturn.push(buildPrenda('Ginebra',4500,'Set','SetGinebra.jpeg'));
    setsToReturn.push(buildPrenda('Venus',4700,'Set','SetVenus.jpeg'));
    setsToReturn.push(buildPrenda('Monaco',4800,'Set','SetMónaco.jpeg'));
    setsToReturn.push(buildPrenda('Cali',4900,'Set','SetCali.jpeg'));

    return setsToReturn;
}

function buildBombis(){
    let bombisToReturn = [];
    bombisToReturn.push(buildPrenda('Lisas',500,'Bombis','BombisLisas.png'));
    bombisToReturn.push(buildPrenda('Rayadas',850,'Bombis','BombisRayadas.jpg'));

    return bombisToReturn;
}

function buildShine(){
    let shineToReturn = [];
    shineToReturn.push(buildPrenda('Vestido',6500,'Shine','ShineVestido.png'));
    shineToReturn.push(buildPrenda('Body',6000,'Shine','ShineBody.jpg'));
    shineToReturn.push(buildPrenda('Conjunto',5800,'Shine','ShineConjunto.png'));
    
    return shineToReturn;
}


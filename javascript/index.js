//const prendas = initProducts();
var prendas = [];
var prendasSeleccionadas = [];

function initProducts(){

    const ele = document.getElementById('items');

    prendas = buildSets();
    prendas = prendas.concat(buildBombis());
    prendas = prendas.concat(buildShine());

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

    const element = document.getElementById('carritos');
    let found = prendas.find(element => element.id == event.target.id);
 
    prendasSeleccionadas.push(found);
    console.log(prendasSeleccionadas);
    let ocurrencias = prendasSeleccionadas.reduce((count,value)=>
        (value.id == event.target.id ? count + 1 : count),0 
    );
    let totalCarrito = prendasSeleccionadas.reduce((count,value)=>
        (count + value.price),0
    );
    let idDiv = 'delete'+found.id;
    let idOcu = 'ocurrencias'+found.id;
    let idPre = 'precio'+found.id;
    
    const innerCarrito ='<div id="'+ idDiv +'">'+
                        '<img src="'+ found.imgSrc +'" class="imgCarrito" alt="Set Ashley">'+
                        '<h1 class="nombre">'+ found.category + ' ' + found.name+'</h1>'+
                        '<div class="infoCarrito">'+
                            '<img src="/images/minus.png" onclick="removeItem(\'' + found.id + '\')" class="signoMinus" alt="minus">'+
                            '<p class="numero" id="'+ idOcu +'">'+ 1 +'</p>'+
                            '<img src="/images/plus.png" onclick="addItem(\'' + found.id + '\')" class="signoPlus" alt="plus">'+
                            '<img src="/images/trash.png" onclick="borrarItem(\'' + found.id + '\')" class="trash hover" alt="Trash">'+
                            '<p class="precio" id="'+idPre+'">$' + found.price+'</p>'+
                        '</div>'+
                        '</div>';

    const bodyCard = '<div id="carrito" class="carrito fixed">'+
                        '<div class="titCarrito">'+
                            'Tu carrito' +
                        '</div>'+
                        '<div id="innerCarrito" class="overflow-scroll">' + innerCarrito + '</div>'+
                        '<div>'+
                            '<hr style="width:100%", size="4", color=black>'+
                            '<p class="total">Total:</p>'+
                            '<p class="precioTotal">$'+totalCarrito+'</p>'+
                            '<p class="pagar">Pagar</p>'+
                        '</div>'+
                    '</div>';   
   
    if(prendasSeleccionadas.length == 1){
        const el = document.createElement('div');
        el.removeAttribute('hidden');
        el.innerHTML = bodyCard;
        element.appendChild(el);
    }else{
        var foundInner = document.getElementById(idDiv);
        if(foundInner != null){
            var vecesRepetido = document.getElementById(idOcu);
            var precio = document.getElementById(idPre);
            precio.innerHTML = ocurrencias * found.price;
            vecesRepetido.innerHTML = ocurrencias;
        }else{
            const inner = document.getElementById('innerCarrito');
            inner.innerHTML += innerCarrito;
        }
    }

    const elementTwo = document.getElementById('items');
    console.log(elementTwo);
    elementTwo.style.width = '80%';

}

function addItem(idFound){
    let idOcu = 'ocurrencias'+idFound;
    let idPre = 'precio'+idFound;
    let vecesRepetido = document.getElementById(idOcu);
    let precio = document.getElementById(idPre);

    let ocurrenciasActuales = Number(vecesRepetido.innerHTML) + 1;
    let found = prendasSeleccionadas.find(element => element.id == idFound);
    vecesRepetido.innerHTML = ocurrenciasActuales;
    precio.innerHTML = found.price * ocurrenciasActuales;

}

function removeItem(idFound){
    let idOcu = 'ocurrencias'+idFound;
    let idPre = 'precio'+idFound;
    let vecesRepetido = document.getElementById(idOcu);
    let precio = document.getElementById(idPre);

    let ocurrenciasActuales = Number(vecesRepetido.innerHTML) - 1;
    if(ocurrenciasActuales == 0){
        borrarItem(idFound);
    }else{
        let found = prendasSeleccionadas.find(element => element.id == idFound);
        vecesRepetido.innerHTML = ocurrenciasActuales;
        precio.innerHTML = found.price * ocurrenciasActuales;
    }

}

function borrarItem(found){

    prendasSeleccionadas = prendasSeleccionadas.filter(element => element.id != found);

    const row = document.getElementById('delete'+found);
    row.remove();
    if(prendasSeleccionadas.length == 0){
        const carrito = document.getElementById('carrito');
        carrito.remove();
        const elementTwo = document.getElementById('items');
        console.log(elementTwo);
        elementTwo.style.width = '100%';
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


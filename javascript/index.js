alert("Hola! Bienvenidx a Munna");

let bienvenida = prompt ("Ingresa tu Nombre");
console.log (bienvenida)

var opcionMenu = '1';
var opcionCategorias = '1';
var subtotal;
var cantidad;
var error = 'La opcion es incorrecta';
var zipCode;
var envio;

while(opcionCategorias != '0'){
    opcionMenu = prompt("Hola " + bienvenida + " ¿Qué estás buscando? \n 1 - Sets \n 2 - Bombis \n 3 - Línea Shine \n 0 - Salir");
    if(opcionMenu == '0'){
        break;
    }else if(opcionMenu == '1' || opcionMenu == '2' || opcionMenu == '3'){
        do{
            switch(opcionMenu){
                case '1':
                    opcionCategorias = prompt(" Elegí tu set favorito: \n 1 - Set Kylie ($4.500) \n 2 - Set Cassie ($4.700) \n 3 - Set Ashley ($4.800) \n 4 - Set Kendall ($4.200) \n 5 - Set Ginebra ($4.500)\n 6 - Set Venus ($4.700)\n 7 - Set Mónaco ($4.800) \n 8 - Set Cali ($4.900) \n 9 - Volver al menu anterior \n 0 - Salir");
                    switch(opcionCategorias){
                        case '1':
                        case '5':
                            subtotal = 4500;
                        break;
                        case '2':
                        case '6':    
                            subtotal = 4700;
                        break;
                        case '3':
                        case '7':
                            subtotal = 4800;
                        break;
                        case '4':
                            subtotal = 4200;
                        break;
                        case '8':
                            subtotal = 4900;
                        break;
                    }
                break;
                case '2':
                    opcionCategorias = prompt('Estos son las bobis disponibles: \n 1 - Lisas ($500) \n 2 - Rayadas ($850) \n 9 - Volver al menu anterior \n 0 - Salir');
                    switch(opcionCategorias){
                        case '1':
                            subtotal = 500;
                            break;
                        case '2':
                            subtotal = 580;
                            break;
                    }
                break;
                case '3':
                    opcionCategorias = prompt('Estos son los bodies disponibles: \n 1 - Shine vestido ($6.500) \n 2 - Shine Body ($6.000) \n 3 - Shine conjunto ($5.800) \n 9 - Volver al menu anterior \n 0 - Salir');
                    switch(opcionCategorias){
                        case '1':
                            subtotal = 6500;
                            break;
                        case '2':
                            subtotal = 6000;
                            break;
                        case '3':
                            subtotal = 5800;
                            break;
                    }
                break;   
            }
            if(opcionCategorias == '0' || opcionCategorias == '9'){
                break;
            }
            cantidad = Number(prompt('Cuantas unidades desea comprar: '));
            zipCode = Number(prompt('Ingrese su codigo postal:'));
            if(zipCode >= 0 && zipCode <= 1000){
                envio = 500;
            }else if(zipCode > 1000 && zipCode <= 1500){
                envio = 750;
            }else if(zipCode > 1500 && zipCode <= 2000){
                envio = 1000;
            }else if(zipCode > 2000){
                envio = 1500;
            }
            alert('El total del pedido es: ' + (cantidad * subtotal + envio));
            alert('Gracias por tu compra!');
            break;
        }while(opcionCategorias != '9' && opcionCategorias != '0');
    }else{
        alert(error);
    }
}


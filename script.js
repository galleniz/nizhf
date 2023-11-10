let balance = 0.0;

let COUST = 5.0; // 1
var buyed = false
const NIZ_USD_COIN_DATA = 19471846;
const max_decimals = 12;
setTimeout(() => {
if (buyed == true)
return;
  document.getElementById('money').innerText =  'Conectado con paypal (5 USD)';
},3000);

function buy() {
buyed = true;
if (COUST  <= 0)
	{
document.getElementById('money').innerText = '0 USD';
		console.log("No more plata");
mostrarMensaje("Tus fondos son insuficientes para comprar esta criptomoneda; si no tienes dinero no compres maldito pobre.")
		return;

		
	}
balance += 0.05;
COUST  -= 1;
document.getElementById('money').innerText =  COUST  +' USD';

minar()
}
var mes = false
// Modificamos la función para mostrar mensajes sin usar alert()
function mostrarMensaje(mensaje) {


if (mes == true)
return;
alert(mensaje)
mes = true;
console.log("hoal")
    const mensajeError = document.getElementById('mensajeError');
    mensajeError.innerText = mensaje;
    mensajeError.style.display = 'block';

    // Ocultamos el mensaje después de 3 segundos
    setTimeout(() => {
mes = false;
        mensajeError.style.display = 'none';
    }, 3000);
}

function minar() {
    balance+= .0001;
    actualizarSaldo();
}

function actualizarSaldo() {
    document.getElementById('balance').innerText = `${balance} Nisincoin`;
    document.getElementById('costoDolares').innerText = `${Number(balance / 19471846).toFixed(max_decimals)}$ USD`;
}


alert("Abra la consola y presione 'Aceptar' para poner en marcha el algoritmo.")

console.log("Buenos Días. Bienvenido a la calculadora de préstamos oficial del Banco Danés.")
let prestamoPregunta
let tienePrestamo

while (prestamoPregunta != "Si" && prestamoPregunta != "No"){

    prestamoPregunta = prompt("Tiene usted un préstamo pendiente con nosotros? (Responda Si/No)")

    switch(prestamoPregunta){
        case "Si":
            tienePrestamo = true
            break

        case "No":
            tienePrestamo = false
            break

        default:
            console.warn("Responda Si/No")
    }
} 

function calcularPrestamo(prestamoInicial, cuotasPagas){

    let cantidadCuotas
    let cuota
    let seguirCalculando = true

    while(seguirCalculando == true){
        prestamoInicial = parseInt(prompt("A cuánto equivalía su préstamo Inicial? (en dólares)"))

        if (prestamoInicial > 0 && prestamoInicial < 100){
            console.log("Préstamos menores a 100$ son pagados en una sola cuota, de " + prestamoInicial * 1.055 + "$ en su caso.")
            console.log("Tenga un buen día")
            break

        } else if (prestamoInicial >= 100){
            for(cantidadCuotas = 1; cantidadCuotas * 100 < prestamoInicial; cantidadCuotas++){
            }

            cuota = (prestamoInicial / cantidadCuotas) * 1.055

            console.log("Sería un total de  " + cantidadCuotas + " cuotas de " + cuota + "$ cada una. Siendo el monto total, que habrá pagado al cancelar el préstamo, de " + cantidadCuotas * cuota + "$.")

                while(true){
                    cuotasPagas = parseInt(prompt("Cuantas cuotas ha pagado?"))
                    if (cuotasPagas == 0){

                        console.log("Le falta por pagar la totalidad del préstamo.")
                        console.log("Tenga un buen día")
                        seguirCalculando = false
                        break

                    } else if (cuotasPagas > 0 && cuotasPagas < cantidadCuotas){
                        console.log("Le faltan por pagar " + (cantidadCuotas - cuotasPagas) + " de " + cuota + "$ cada una. La totalidad de lo que debe equivale a " + (cantidadCuotas - cuotasPagas) * cuota + "$.")
                        console.log("Tenga un buen día")
                        seguirCalculando = false
                        break

                    } else if (cuotasPagas == cantidadCuotas){
                        console.log("Usted ya ha pagado la totalidad del préstamo, por lo tanto no estaba pendiente.")
                        console.log("Tenga un buen día")
                        seguirCalculando = false
                        break
                        
                    } else {
                        console.log("Ingrese una cantidad válida")
                    }
                }
        } else {
            console.log("Ingrese una cantidad válida")
        }
    }
}

if (tienePrestamo){
    console.log("Nuestros préstamos se deben de pagar con un 5.5% de interés con respecto al préstamo inicial.")
    calcularPrestamo()
} else {
    console.log("Tenga un buen día")
}

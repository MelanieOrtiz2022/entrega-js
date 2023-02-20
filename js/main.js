let totalCalorias = 0;

function ingresarCalorias() {
    let calorias = parseInt(prompt("Ingrese el número de calorías consumidas: "));
    return calorias;
}

let continuar = true;
while (continuar) {
    let calorias = ingresarCalorias();
    if (calorias > 0) {
        totalCalorias += calorias;
    } else {
        console.log("La cantidad de calorías debe ser mayor que cero.");
    }
    continuar = confirm("¿Desea ingresar más calorías?");
}

alert("El total de calorías consumidas es: " + totalCalorias);
console.log(totalCalorias)


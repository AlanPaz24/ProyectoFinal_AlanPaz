
document.addEventListener("DOMContentLoaded", function () {
    const montoInput = document.getElementById('monto');
    const plazoInput = document.getElementById('plazo');
    const calcularButton = document.getElementById('calcular');
    const resultadoDiv = document.getElementById('resultado');

    calcularButton.addEventListener('click', () => {
        const monto = parseFloat(montoInput.value);
        const plazo = parseInt(plazoInput.value);
        const tasaInteresAnual = 0.8; // 80% de interés anual

        if (!isNaN(monto) && !isNaN(plazo) && plazo > 0) {
            const tasaInteresMensual = tasaInteresAnual / 12;
            const cuotaMensual = (monto * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazo));
            resultadoDiv.textContent = `Cuota mensual con intereses: ${cuotaMensual.toFixed(2)}`;

            // Guardar los datos del préstamo en el almacenamiento local
            const datosPrestamo = {
                monto: monto,
                plazo: plazo,
                cuota: cuotaMensual.toFixed(2)
            };

            localStorage.setItem('datosPrestamo', JSON.stringify(datosPrestamo));
        } else {
            resultadoDiv.textContent = 'Por favor, ingrese datos válidos.';
        }
    });

    // Comprobar si hay datos de préstamo guardados en el almacenamiento local y mostrarlos
    const datosPrestamoGuardados = localStorage.getItem('datosPrestamo');
    if (datosPrestamoGuardados) {
        const datosPrestamo = JSON.parse(datosPrestamoGuardados);
        montoInput.value = datosPrestamo.monto;
        plazoInput.value = datosPrestamo.plazo;
        resultadoDiv.textContent = `Cuota mensual con intereses: ${datosPrestamo.cuota}`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const montoInput = document.getElementById('monto');
    const plazoInput = document.getElementById('plazo');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const calcularButton = document.getElementById('calcular');
    const resultadoDiv = document.getElementById('resultado');

    calcularButton.addEventListener('click', () => {
        const monto = parseFloat(montoInput.value);
        const plazo = parseInt(plazoInput.value);
        const nombre = nombreInput.value;
        const apellido = apellidoInput.value;
        const tasaInteresAnual = 0.8; // 80% de interés anual

        if (!isNaN(monto) && !isNaN(plazo) && plazo > 0 && nombre && apellido) {
            const tasaInteresMensual = tasaInteresAnual / 12;
            const cuotaMensual = (monto * tasaInteresMensual) / (1 - Math.pow(1 + tasaInteresMensual, -plazo));
            resultadoDiv.innerHTML = `
                <p>Nombre: ${nombre} ${apellido}</p>
                <p>Monto del préstamo: $${monto.toFixed(2)}</p>
                <p>Plazo en meses: ${plazo}</p>
                <p>Cuota mensual con intereses: $${cuotaMensual.toFixed(2)}</p>
            `;

            // Guardar los datos del préstamo en el almacenamiento local
            const datosPrestamo = {
                nombre: nombre,
                apellido: apellido,
                monto: monto,
                plazo: plazo,
                cuota: cuotaMensual.toFixed(2)
            };

            localStorage.setItem('datosPrestamo', JSON.stringify(datosPrestamo));
        } else {
            resultadoDiv.textContent = 'Por favor, complete todos los campos y asegúrese de ingresar datos válidos.';
        }
    });

    // Comprobar si hay datos de préstamo guardados en el almacenamiento local y mostrarlos
    const datosPrestamoGuardados = localStorage.getItem('datosPrestamo');
    if (datosPrestamoGuardados) {
        const datosPrestamo = JSON.parse(datosPrestamoGuardados);
        nombreInput.value = datosPrestamo.nombre;
        apellidoInput.value = datosPrestamo.apellido;
        montoInput.value = datosPrestamo.monto;
        plazoInput.value = datosPrestamo.plazo;
        resultadoDiv.innerHTML = `
            <p>Nombre: ${datosPrestamo.nombre} ${datosPrestamo.apellido}</p>
            <p>Monto del préstamo: $${datosPrestamo.monto.toFixed(2)}</p>
            <p>Plazo en meses: ${datosPrestamo.plazo}</p>
            <p>Cuota mensual con intereses: $${datosPrestamo.cuota}</p>
        `;
    }
});

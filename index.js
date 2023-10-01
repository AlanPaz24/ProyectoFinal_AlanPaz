document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loan-form");
    const totalElement = document.getElementById("total");
    const cuotaElement = document.getElementById("cuota");
    const paisSelect = document.getElementById("pais");

    // Cargar datos de países desde el archivo JSON
    fetch("paises.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((pais) => {
                const option = document.createElement("option");
                option.value = pais.nombre;
                option.textContent = pais.nombre;
                paisSelect.appendChild(option);
            });
        });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const edad = document.getElementById("edad").value;
        const monto = parseFloat(document.getElementById("monto").value);
        const cuotas = parseInt(document.getElementById("cuotas").value);

        // Calcular el total a pagar con un 80% de interés anual
        const tasaInteresAnual = 0.8;
        const tasaInteresMensual = tasaInteresAnual / 12;
        const totalAPagar = monto * (1 + tasaInteresMensual) ** cuotas;

        // Calcular el valor de la cuota mensual
        const valorCuota = totalAPagar / cuotas;

        totalElement.textContent = `$${totalAPagar.toFixed(2)}`;
        cuotaElement.textContent = `$${valorCuota.toFixed(2)}`;

        document.getElementById("resultado").style.display = "block";
    });
});

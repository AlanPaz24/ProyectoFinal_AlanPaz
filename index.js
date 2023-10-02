$(document).ready(function () {
    const form = $("#loan-form");
    const totalElement = $("#total");
    const cuotaElement = $("#cuota");
    const paisSelect = $("#pais");

    // Cargar datos de países desde el archivo JSON
    $.getJSON("paises.json", function (data) {
        $.each(data, function (key, pais) {
            paisSelect.append($("<option>", {
                value: pais.nombre,
                text: pais.nombre
            }));
        });
    });

    form.submit(function (e) {
        e.preventDefault();

        const nombre = $("#nombre").val();
        const apellido = $("#apellido").val();
        const edad = $("#edad").val();
        const monto = parseFloat($("#monto").val());
        const cuotas = parseInt($("#cuotas").val());

        // Calcular el total a pagar con un 80% de interés anual
        const tasaInteresAnual = 0.8;
        const tasaInteresMensual = tasaInteresAnual / 12;
        const totalAPagar = monto * Math.pow(1 + tasaInteresMensual, cuotas);

        // Calcular el valor de la cuota mensual
        const valorCuota = totalAPagar / cuotas;

        totalElement.text(`$${totalAPagar.toFixed(2)}`);
        cuotaElement.text(`$${valorCuota.toFixed(2)}`);

        $("#resultado").show();
    });
});

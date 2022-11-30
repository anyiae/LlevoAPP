$(document).ready(function() {
    $('#fecha').change(function() {
        var tipo_indicador = $('#indicador').val();
        var fecha_ingresada = $('#fecha').val();
        var year = fecha_ingresada.substring(0,4);
        var month = fecha_ingresada.substring(5,7);
        var day = fecha_ingresada.substring(8,fecha_ingresada.length);
        var fecha = `${day}-${month}-${year}`;
        obtenerIndicador(tipo_indicador, fecha);
    });

    function obtenerIndicador(tipo_indicador, fecha) {
        var url = `https://mindicador.cl/api/${tipo_indicador}/${fecha}`;

        $.get(url, function(data){
            var valor_formateado = new Intl.NumberFormat('es-Cl',{style:'currency', currency:'CLP',maximumFractionDigits:2}).format(data.serie[0].valor);
            var texto = `Valor actual ${data.nombre}: ${valor_formateado}`;
            $('#valor_indicador').text(texto);
        },"json");
    }


});
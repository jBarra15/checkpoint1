function calcularTempo() {
    var horaInicio = document.getElementById("start-time").value;
    var horaFim = document.getElementById("end-time").value;

    if (horaInicio === "" || horaFim === "") {
        alert("Preencha os dois horários.");
        return;
    }

    var inicioMinutos = converterParaMinutos(horaInicio);
    var fimMinutos = converterParaMinutos(horaFim);

    var diferencaMinutos = fimMinutos - inicioMinutos;

    if (diferencaMinutos < 0) {
        diferencaMinutos += 24 * 60;
    }

    var horas = Math.floor(diferencaMinutos / 60);
    var minutos = diferencaMinutos % 60;

    document.getElementById("resultado").innerText = 
        "Duração da reunião: " + horas + " horas e " + minutos + " minutos.";
}

function converterParaMinutos(hora) {
    var partes = hora.split(":");
    var horas = parseInt(partes[0]);
    var minutos = parseInt(partes[1]);
    return horas * 60 + minutos;
}

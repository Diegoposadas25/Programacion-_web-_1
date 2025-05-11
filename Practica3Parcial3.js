let chartsCargados = false;
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(() => {
  chartsCargados = true;
});

let correctas = 0;
let incorrectas = 0;

function respuesta() {
  correctas = 0;
  incorrectas = 0;

  // Lista de todos los names usados (uno por opción en cada pregunta)
  const grupos = [
    ['opcion1a', 'opcion1b', 'opcion1c'],
    ['opcion2a', 'opcion2b', 'opcion2c'],
    ['opcion3a', 'opcion3b', 'opcion3c'],
    ['opcion4a', 'opcion4b', 'opcion4c'],
    ['opcion5a', 'opcion5b', 'opcion5c']
  ];

  grupos.forEach(grupo => {
    grupo.forEach(name => {
      const input = document.querySelector(`input[name="${name}"]:checked`);
      if (input) {
        if (input.value === "correcta") {
          correctas++;
        } else if (input.value === "incorrecta") {
          incorrectas++;
        }
      }
    });
  });

  // Mostrar resultados
  document.getElementById("resultado").innerHTML = `
    <p> Respuestas correctas: <strong>${correctas}</strong></p>
    <p> Respuestas incorrectas: <strong>${incorrectas}</strong></p>
  `;

  // Mostrar gráfico si está cargado
  if (chartsCargados) {
    dibujarGrafico(correctas, incorrectas);
  }
}

function dibujarGrafico(correctas, incorrectas) {
  const data = google.visualization.arrayToDataTable([
    ['Tipo', 'Cantidad'],
    ['Correctas', correctas],
    ['Incorrectas', incorrectas]
  ]);

  const options = {
    title: 'Resultados del cuestionario',
    pieHole: 0.4,
    colors: ['#4CAF50', '#F44336']
  };

  const chart = new google.visualization.PieChart(document.getElementById('grafico'));
  chart.draw(data, options);
}

function generarPDF() {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Resultados del cuestionario", 20, 30);
  doc.text("Respuestas correctas: " + correctas, 20, 50);
  doc.text("Respuestas incorrectas: " + incorrectas, 20, 60);

  // MOSTRAR EN IFRAME
  const pdfURI = doc.output("datauristring");
  const iframe = document.getElementById("visorPDF");
  if (iframe) {
    iframe.src = pdfURI;
  } else {
    console.warn("No se encontró el iframe con id='visorPDF'");
  }

  // OPCIONAL: también descargar automáticamente
  // doc.save("resultado.pdf");
}

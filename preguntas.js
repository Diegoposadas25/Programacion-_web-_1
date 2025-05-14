function comentar() {
  const comentario = document.getElementById('comentarios').value.trim();
  const contenedor = document.getElementById('lista-preguntas');

  if (comentario === '') {
    alert('Por favor, escribe una pregunta antes de publicarla.');
    return;
  }

  const preguntaDiv = document.createElement('div');
  preguntaDiv.className = 'pregunta';

  const texto = document.createElement('p');
  texto.textContent = comentario;

  const btnResponder = document.createElement('button');
  btnResponder.textContent = 'Responder';
  btnResponder.className = 'responder-btn';

  const respuestasDiv = document.createElement('div');
  respuestasDiv.className = 'respuestas';

  btnResponder.onclick = () => {
    if (preguntaDiv.querySelector('.respuesta-form')) return;

    const form = document.createElement('div');
    form.className = 'respuesta-form';

    const textarea = document.createElement('textarea');
    textarea.className = 'respuesta-input';
    textarea.placeholder = 'Escribe tu respuesta...';

    const btnEnviar = document.createElement('button');
    btnEnviar.textContent = 'Enviar';
    btnEnviar.className = 'enviar-btn';

    btnEnviar.onclick = (event) => {
      event.preventDefault();
      const respuestaTexto = textarea.value.trim();
      if (respuestaTexto !== '') {
        const respuesta = document.createElement('div'); 
        respuesta.className = 'respuesta';
        respuesta.textContent = respuestaTexto;
        respuestasDiv.appendChild(respuesta);
        form.remove(); // solo se cierra si hay texto
      } else {
        alert('Por favor, escribe una respuesta antes de enviar.');
      }
    };

    form.appendChild(textarea);
    form.appendChild(btnEnviar);
    preguntaDiv.insertBefore(form, respuestasDiv);
  };

  preguntaDiv.appendChild(texto);
  preguntaDiv.appendChild(btnResponder);
  preguntaDiv.appendChild(respuestasDiv);
  contenedor.appendChild(preguntaDiv);

  document.getElementById('comentarios').value = '';
}

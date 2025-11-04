
var formularioValido = true;


function marcar(id) {
  const atual = document.querySelector(".menu-selecionado");
  if (atual) atual.classList.remove("menu-selecionado");
  const el = document.getElementById(id);
  if (el) el.classList.add("menu-selecionado");
}


var fields = document.getElementsByClassName('field-required');
for (var i = 0; i < fields.length; i++) {
  fields[i].addEventListener('focus', function() {
    this.classList.add('selecionado');
  });
}


function enviar() {
  clearErrors();
  validarCamposPreenchidos();
}


function clearErrors() {
  var fields = document.getElementsByClassName('field-required');
  for (var i = 0; i < fields.length; i++) {
    fields[i].classList.remove('error');
  }
}


function validarCamposPreenchidos() {
  formularioValido = true;
  var fields = document.getElementsByClassName('field-required');
  for (var i = 0; i < fields.length; i++) {
 
    if (fields[i].value.trim() == "") {
      fields[i].classList.add('error');
      formularioValido = false;
    }
  }

  if (!formularioValido) {
    alert("Preencha os campos do formulário corretamente!");
  } else {
    alert("Dados enviados com sucesso!");
   
  }
}

const inputBusca = document.getElementById('busca');
if (inputBusca) {
  inputBusca.addEventListener('input', () => {
    const termo = inputBusca.value.toLowerCase();
    document.querySelectorAll('.card').forEach(card => {
      const titulo = card.querySelector('h3').textContent.toLowerCase();
      card.style.display = titulo.includes(termo) ? 'block' : 'none';
    });
  });
}


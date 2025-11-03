// Controle de estado do formulário
var formularioValido = true;

// Função para marcar item do menu (adiciona/remover classe "menu-selecionado")
function marcar(id) {
  const atual = document.querySelector(".menu-selecionado");
  if (atual) atual.classList.remove("menu-selecionado");
  const el = document.getElementById(id);
  if (el) el.classList.add("menu-selecionado");
}

// Ao focar nos campos obrigatórios, adiciona classe 'selecionado' (opcional, para estilo)
var fields = document.getElementsByClassName('field-required');
for (var i = 0; i < fields.length; i++) {
  fields[i].addEventListener('focus', function() {
    this.classList.add('selecionado');
  });
}

// Função chamada ao clicar em Enviar
function enviar() {
  clearErrors();
  validarCamposPreenchidos();
}

// Remove possíveis classes de erro antes de validar
function clearErrors() {
  var fields = document.getElementsByClassName('field-required');
  for (var i = 0; i < fields.length; i++) {
    fields[i].classList.remove('error');
  }
}

// Valida se todos os campos com class 'field-required' estão preenchidos
function validarCamposPreenchidos() {
  formularioValido = true;
  var fields = document.getElementsByClassName('field-required');
  for (var i = 0; i < fields.length; i++) {
    // Trim para evitar espaços como "preenchimento"
    if (fields[i].value.trim() == "") {
      fields[i].classList.add('error');
      formularioValido = false;
    }
  }

  if (!formularioValido) {
    alert("Preencha os campos do formulário corretamente!");
  } else {
    alert("Dados enviados com sucesso!");
    // Aqui você poderia enviar via AJAX ou limpar o formulário, se necessário
  }
}
// Busca de filmes (filtra dinamicamente pelo título)
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

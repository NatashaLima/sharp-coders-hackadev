// Seleciona o formulário
const form = document.querySelector('#form-container');

// Adiciona um listener para o evento submit
form.addEventListener('submit', function(event) {
  // Previne o envio do formulário caso haja erros de validação
  event.preventDefault();

  // Seleciona os campos do formulário
  const cep = document.querySelector('#cep');
  const uf = document.querySelector('#uf');
  const endereco = document.querySelector('#endereco');
  const numero = document.querySelector('#numero');
  const bairro = document.querySelector('#bairro');
  const cidade = document.querySelector('#cidade');

  // Verifica se os campos estão preenchidos corretamente
  if (!cep.value) {
    alert('Por favor, preencha o campo CEP.');
    cep.focus();
    return false;
  }

  if (!uf.value) {
    alert('Por favor, preencha o campo UF.');
    uf.focus();
    return false;
  }

  if (!endereco.value) {
    alert('Por favor, preencha o campo Endereço.');
    endereco.focus();
    return false;
  }

  if (!numero.value) {
    alert('Por favor, preencha o campo Nº.');
    numero.focus();
    return false;
  }

  if (!bairro.value) {
    alert('Por favor, preencha o campo Bairro.');
    bairro.focus();
    return false;
  }

  if (!cidade.value) {
    alert('Por favor, preencha o campo Cidade.');
    cidade.focus();
    return false;
  }

  // Se todos os campos estiverem preenchidos corretamente, envia o formulário
  alert('Formulário enviado com sucesso!');
  form.submit();
});

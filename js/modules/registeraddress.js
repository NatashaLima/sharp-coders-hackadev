function validateCep() {
  const cepInput = document.getElementById('cep');
  const cepValue = cepInput.value.trim();
  const cepErrorMessage = document.getElementById('cep-error-message');
  const cepRegex = /^\d{5}-?\d{3}$/;

  if (!cepRegex.test(cepValue)) {
    console.log('CEP inválido');
    cepInput.classList.add('error');
    setError(cepInput, 'CEP inválido', cepErrorMessage);
    return false;
  } else {    
    clearError(cepInput, cepErrorMessage);
    return true;
  }
}

function validateUf() {
  const ufInput = document.getElementById('uf');
  const ufValue = ufInput.value.trim();
  const ufErrorMessage = document.getElementById('uf-error-message');
  const ufRegex = /^[A-Za-z]{2}$/;

  if (!ufRegex.test(ufValue)) {
    console.log('UF inválido');
    ufInput.classList.add('error');
    setError(ufInput, 'UF inválido', ufErrorMessage);
    return false;
  } else {
    ufInput.classList.remove('error');
    clearError(ufInput, ufErrorMessage);
    return true;
  }
}

function validateEndereco() {
  const enderecoInput = document.getElementById('endereco');
  const enderecoValue = enderecoInput.value.trim();
  const enderecoErrorMessage = document.getElementById('endereco-error-message');

  if (enderecoValue === '') {
    console.log('Endereço é obrigatório');
    enderecoInput.classList.add('error');
    setError(enderecoInput, 'Endereço é obrigatório', enderecoErrorMessage);
    return false;
  } else {
    enderecoInput.classList.remove('error');
    clearError(enderecoInput, enderecoErrorMessage);
    return true;
  }
}

function validateNumero() {
  const numeroInput = document.getElementById('numero');
  const numeroValue = numeroInput.value.trim();
  const numeroErrorMessage = document.getElementById('numero-error-message');

  if (numeroValue === '') {
    console.log('Número é obrigatório');
    numeroInput.classList.add('error');
    setError(numeroInput, 'Número é obrigatório', numeroErrorMessage);
    return false;
  } else {
    numeroInput.classList.remove('error');
    clearError(numeroInput, numeroErrorMessage);
    return true;
  }
}

function validateComplemento() {
  const complementoInput = document.getElementById('complemento');
  const complementoValue = complementoInput.value.trim();
  const complementoErrorMessage = document.getElementById('complemento-error-message');

  if (complementoValue === '') {
    console.log('O Complemento é obrigatório');
    complementoInput.classList.add('error');
    setError(complementoInput, 'O Complemento é obrigatório', complementoErrorMessage);
    return false;
  } else {
    complementoInput.classList.remove('error');
    clearError(complementoInput, complementoErrorMessage);
    return true;
  }
}

function validateBairro() {
  const bairroInput = document.getElementById('bairro');
  const bairroValue = bairroInput.value.trim();
  const bairroErrorMessage = document.getElementById('bairro-error-message');

  if (bairroValue === '') {
    console.log('Bairro é obrigatório');
    bairroInput.classList.add('error');
    setError(bairroInput, 'Bairro é obrigatório', bairroErrorMessage);
    return false;
  } else {
    bairroInput.classList.remove('error');
    clearError(bairroInput, bairroErrorMessage);
    return true;
  }
}

function validateCidade() {
  const cidadeInput = document.getElementById('cidade');
  const cidadeValue = cidadeInput.value.trim();
  const cidadeErrorMessage = document.getElementById('cidade-error-message');

  if (cidadeValue === '') {
    console.log('Cidade é obrigatória');
    cidadeInput.classList.add('error');
    setError(cidadeInput, 'Cidade é obrigatória', cidadeErrorMessage);
    return false;
  } else {
    cidadeInput.classList.remove('error');
    clearError(cidadeInput, cidadeErrorMessage);
    return true;
  }
}

function validateForm() {
  const cepValid = validateCep();
  const ufValid = validateUf();
  const enderecoValid = validateEndereco();
  const numeroValid = validateNumero();
  const bairroValid = validateBairro();
  const cidadeValid = validateCidade();

  return cepValid && ufValid && enderecoValid && numeroValid && bairroValid && cidadeValid;
}

const form = document.getElementById('form-container');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (validateForm()) {
    alert('Formulário enviado!');
  } else {
    console.log('Existem erros no formulário');
  }
});

function setError(element, message, errorMessageElement) {
  element.classList.add('error');
  const errorMessage = element.parentElement.querySelector('.error-message');
  errorMessageElement.innerText = message;
  errorMessageElement.style.display = 'block';
}

function clearError(element, errorMessageElement) {
  element.classList.remove('error');
  const errorMessage = element.parentElement.querySelector('.error-message');
  errorMessageElement.style.display = 'none';
}
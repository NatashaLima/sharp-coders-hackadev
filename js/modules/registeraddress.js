const cepInput = document.getElementById('cep');

function validateCep() {
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

const ufInput = document.getElementById('uf');

function validateUf() {
  const ufValue = ufInput.value.trim();
  const ufErrorMessage = document.getElementById('uf-error-message');
  const ufRegex = /^[A-Za-z]{2}$/;

  if (!ufRegex.test(ufValue)) {
    console.log('*Obrigatório*');
    ufInput.classList.add('error');
    setError(ufInput, '*Obrigatório*', ufErrorMessage);
    return false;
  } else {
    ufInput.classList.remove('error');
    clearError(ufInput, ufErrorMessage);
    return true;
  }
}

const logradouroInput = document.getElementById('endereco');

function validateEndereco() {
  const logradouroValue = logradouroInput.value.trim();
  const logradouroErrorMessage = document.getElementById('endereco-error-message');

  if (logradouroValue === '') {
    console.log('*Obrigatório*');
    logradouroInput.classList.add('error');
    setError(logradouroInput, '*Obrigatório*', logradouroErrorMessage);
    return false;
  } else {
    logradouroInput.classList.remove('error');
    clearError(logradouroInput, logradouroErrorMessage);
    return true;
  }
}

const numeroInput = document.getElementById('numero');

function validateNumero() {
  const numeroValue = numeroInput.value.trim();
  const numeroErrorMessage = document.getElementById('numero-error-message');
  const numeroRegex = /^[0-9]+$/

  if (!numeroRegex.test(numeroValue)) {
    console.log('*Obrigatório*');
    numeroInput.classList.add('error');
    setError(numeroInput, '*Obrigatório*', numeroErrorMessage);
    return false;
  } else {
    numeroInput.classList.remove('error');
    clearError(numeroInput, numeroErrorMessage);
    return true;
  }
}

const complementoInput = document.getElementById('complemento');

function validateComplemento() {
  const complementoValue = complementoInput.value.trim();
  const complementoErrorMessage = document.getElementById('complemento-error-message');

  if (complementoValue === '') {
    console.log('*Obrigatório*');
    complementoInput.classList.add('error');
    setError(complementoInput, '*Obrigatório*', complementoErrorMessage);
    return false;
  } else {
    complementoInput.classList.remove('error');
    clearError(complementoInput, complementoErrorMessage);
    return true;
  }
}

const bairroInput = document.getElementById('bairro');

function validateBairro() {
  const bairroValue = bairroInput.value.trim();
  const bairroErrorMessage = document.getElementById('bairro-error-message');

  if (bairroValue === '') {
    console.log('*Obrigatório*');
    bairroInput.classList.add('error');
    setError(bairroInput, '*Obrigatório*', bairroErrorMessage);
    return false;
  } else {
    bairroInput.classList.remove('error');
    clearError(bairroInput, bairroErrorMessage);
    return true;
  }
}

const cidadeInput = document.getElementById('cidade');

function validateCidade() {
  const cidadeValue = cidadeInput.value.trim();
  const cidadeErrorMessage = document.getElementById('cidade-error-message');

  if (cidadeValue === '') {
    console.log('*Obrigatório*');
    cidadeInput.classList.add('error');
    setError(cidadeInput, '*Obrigatório*', cidadeErrorMessage);
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

// Obtenha a string JSON armazenada na local storage
const formDataJson = localStorage.getItem('formData');

//Deseralize o json formDataJson
const formDataObject = JSON.parse(formDataJson);

function saveFormDataAddress() {
  //Adiciona o objeto ao final do json
  formDataObject["endereco"] = {
    "cep": cepInput.value.trim(),
    "uf": ufInput.value.trim(),
    "logradouro": logradouroInput.value.trim(),
    "numero": numeroInput.value.trim(),
    "complemento": complementoInput.value.trim(),
    "bairro": bairroInput.value.trim(),
    "cidade": cidadeInput.value.trim()
  };

  // Converte objeto json para um amontoado de string json válido
  const formDataJson = JSON.stringify(formDataObject);

  // Armazene a string JSON na local storage
  localStorage.setItem('formData', formDataJson);
}

const botaoRegistrar = document.getElementById('botao-registrar');

botaoRegistrar.addEventListener('click', (event) => {
  event.preventDefault();
  saveFormDataAddress();
  alert("Cadastro realizado com sucesso, aguarde 5 dias úteis para receber seu SharkCard");
  window.open('login.html');
});
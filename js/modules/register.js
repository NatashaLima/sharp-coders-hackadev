// Seleciona os campos do formulário
const cpfInput = document.getElementById('cpf');
const usernameInput = document.getElementById('username');
const phonenumberInput = document.getElementById('phonenumber');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmpassword');
const termCheckbox = document.getElementById('termCheckbox');


function setError(element, message, errorMessageElement){
    element.classList.add('error');
    const errorMessage = element.parentElement.querySelector('.error-message');
    errorMessageElement.innerText = message;
    errorMessageElement.style.display = 'block';
}

function clearError(element, errorMessageElement){
    element.classList.remove('error');
    const errorMessage = element.parentElement.querySelector('.error-message');
    errorMessageElement.style.display = 'none';    
}

  // Função para validar o CPF
function validateCPF() {
    const cpf = cpfInput.value.trim();
    const cpfErrorMessage = document.getElementById('cpf-error-message');
    if (cpf.length !== 11 || isNaN(cpf)) {
      console.log('CPF inválido');
      setError(cpfInput, 'CPF inválido', cpfErrorMessage);
      return false;
    }
    clearError(cpfInput, cpfErrorMessage);
    return true;
  }

// Função para validar o nome
function validateName() {
    const name = usernameInput.value.trim();
    const errorMessageElement = document.getElementById('name-error-message');
    if (name.length < 3) {
      setError(usernameInput, 'O nome deve ter no mínimo 3 caracteres', errorMessageElement);
      return false;
    }
    clearError(usernameInput, errorMessageElement);
    return true;
  }

// Função para validar o número de celular
function validatePhoneNumber() {
    const phoneNumber = phonenumberInput.value.trim();
    const errorMessageElement = document.getElementById('phonenumber-error-message');
    if (phoneNumber.length !== 11 || isNaN(phoneNumber)) {
      setError(phonenumberInput, 'Número de celular inválido', errorMessageElement);
      return false;
    }
    clearError(phonenumberInput, errorMessageElement);
    return true;
  }

// Função para validar o email
function validateEmail() {
    const email = emailInput.value.trim();
    const errorMessageElement = document.getElementById('email-error-message');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(emailInput, 'Email inválido', errorMessageElement);
      return false;
    }
    clearError(emailInput, errorMessageElement);
    return true;
  }

// Função para validar a senha
function validatePassword() {
    const password = passwordInput.value.trim();
    const errorMessageElement = document.getElementById('password-error-message');
    if (password.length < 8) {
      setError(passwordInput, 'A senha deve ter no mínimo 8 caracteres', errorMessageElement);
      return false;
    }
    clearError(passwordInput, errorMessageElement);
    return true;
  }

// Função para validar a confirmação da senha
function validateConfirmPassword() {
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    const errorMessageElement = document.getElementById('confirmpassword-error-message');
    if (password !== confirmPassword) {
      setError(confirmPasswordInput, 'As senhas não coincidem', errorMessageElement);
      return false;
    }
    clearError(confirmPasswordInput, errorMessageElement);
    return true;
  }

  

// Função para validar o formulário como um todo
function validateForm() {
  const isCPFValid = validateCPF();
  const isNameValid = validateName();
  const isPhoneNumberValid = validatePhoneNumber();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (isCPFValid && isNameValid && isPhoneNumberValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
    console.log('Formulário válido');
    return true;
  }
  console.log('Formulário inválido');
  return false;
}

// Adiciona um listener para o botão de envio do formulário
const submitButton = document.querySelector('button[type="button"]');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  validateForm();
});

//Validar os termos e condições do formulário
function validateForm() {
  
    const termCheckbox = document.getElementById("termCheckbox");
    if (!termCheckbox.checked) {
      alert("Você precisa aceitar os termos para continuar.");
      return false;
    }  
  }

 
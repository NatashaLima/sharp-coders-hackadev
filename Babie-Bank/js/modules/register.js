// Seleciona os campos do formulário
const cpfInput = document.getElementById('cpf');
const usernameInput = document.getElementById('username');
const phonenumberInput = document.getElementById('phonenumber');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmpassword');
const newsletterCheckbox = document.getElementById('newsletter');

// Função para validar o CPF
function validateCPF() {
  const cpf = cpfInput.value.trim();
  if (cpf.length !== 11 || isNaN(cpf)) {
    console.log('CPF inválido');
    return false;
  }
  console.log('CPF válido');
  return true;
}

// Função para validar o nome
function validateName() {
  const name = usernameInput.value.trim();
  if (name.length < 3) {
    console.log('O nome deve ter no mínimo 3 caracteres');
    return false;
  }
  console.log('Nome válido');
  return true;
}

// Função para validar o número de celular
function validatePhoneNumber() {
  const phoneNumber = phonenumberInput.value.trim();
  if (phoneNumber.length !== 11 || isNaN(phoneNumber)) {
    console.log('Número de celular inválido');
    return false;
  }
  console.log('Número de celular válido');
  return true;
}

// Função para validar o email
function validateEmail() {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.log('Email inválido');
    return false;
  }
  console.log('Email válido');
  return true;
}

// Função para validar a senha
function validatePassword() {
  const password = passwordInput.value.trim();
  if (password.length < 8) {
    console.log('A senha deve ter no mínimo 8 caracteres');
    return false;
  }
  console.log('Senha válida');
  return true;
}

// Função para validar a confirmação da senha
function validateConfirmPassword() {
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  if (password !== confirmPassword) {
    console.log('As senhas não coincidem');
    return false;
  }
  console.log('Confirmação de senha válida');
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
  
    const termCheckbox = document.getElementById("term");
    if (!termCheckbox.checked) {
      alert("Você precisa aceitar os termos para continuar.");
      return false;
    }  
  }
  

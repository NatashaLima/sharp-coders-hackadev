// deu trabalho, mas consegui. Preciso que vc faça uma alteração em registro.
// Quando vcs registram algo, o registro está sobreescrevendo o outro
// armazena esses registros em um uma lista de usuarios tipo 
// listaUsarios [] depois passa os dados com listaUsarios.push()
// assim teremos uma estrutura com varias outras estruturas dentro. 
// fica mapeado e mais facil de trabalhar

const cpf = document.getElementById("cpf-login");
const password = document.getElementById("password-login");
const formDataJson = JSON.parse(localStorage.getItem("formData"));

const botaoLogin = document.getElementById("botao-login");
botaoLogin.addEventListener('click', entrar);

function entrar() {
    if (!(formDataJson.cpf == cpf.value && formDataJson.password == password.value) || (cpf.value =="" || password.value =="")) {
        alert('CPF ou Senha incorretos, tente novamente');
    } else {
        window.location.href = "https://github.com/LKSFerreira/sharp-coders-hackadev";
    }
}
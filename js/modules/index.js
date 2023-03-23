const botaoAcessar = document.getElementById("botao-acessar");
const botaoCadastrar = document.getElementById("botao-cadastrar");

localStorage.removeItem("formData");

botaoAcessar.addEventListener('click', function() {
   window.location.href = ("view/login.html");
});

botaoCadastrar.addEventListener('click', function(){
    window.location.href = ("view/register.html");
});
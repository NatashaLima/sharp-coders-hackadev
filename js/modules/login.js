    // deu trabalho, mas consegui. Preciso que vc faça uma alteração em registro.
    // Quando vcs registram algo, o registro está sobreescrevendo o outro
    // armazena esses registros em um uma lista de usuarios tipo 
    // listaUsarios [] depois passa os dados com listaUsarios.push()
    // assim teremos uma estrutura com varias outras estruturas dentro. 
    // fica mapeado e mais facil de trabalhar



function entrar() {
    const cpf = document.getElementById("cpf-login").value;
    const senha = document.getElementById("password-login").value;

    formDataJson = JSON.parse(localStorage.getItem("formData"));
    alert("passa 1");

    const formDataArray = [];

    for (const key in formDataJson) {
        if (formDataJson.hasOwnProperty(key)) {
            formDataArray.push(formDataJson[key]);
        }
    }


    alert("passa 2");
    formDataArray.forEach((item) => {
        if(cpf.value == item.cpf && senha.value == item.password){
           
          userValid = {
             cpf: item.cpf,
             password: item.senhaCad
           }
          
        }
      })
       
    alert("passa 3");
    if (cpf.value == userValid.cpf && senha.value == userValid.cpf) {
        window.location.href = "https://github.com/LKSFerreira/sharp-coders-hackadev";
    } else {
      
      alert("CPF ou senha inválidos");
    }
}
 

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("botao-login").addEventListener("click", entrar);
});


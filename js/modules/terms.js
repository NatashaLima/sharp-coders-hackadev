const inputTermos = document.getElementById('inputAceiteTermos');


function saveFormData() {
  let formDataJson = localStorage.getItem('formData');
  let formDataObject = JSON.parse(formDataJson);

  formDataObject.termos = inputTermos.checked;

  formDataJson = JSON.stringify(formDataObject);
  localStorage.setItem('formData', formDataJson);

  voltarPaginaAnterior();
}

function voltarPaginaAnterior() {
  window.open('./register.html', '_self')
}

inputTermos.addEventListener('change', function () {
  setTimeout(() => {
    saveFormData();
  }, 1500);
},);

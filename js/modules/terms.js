const inputTermo = document.querySelector('#inputAceiteTermo')

load()

function load() {
  termCheckbox = JSON.parse(localStorage.getItem('dbTermo')) || []
}

function save() {
  localStorage.setItem('dbTermo', JSON.stringify('ok'))
  voltarPaginaAnterior()
  console.log('salvou')
}

function voltarPaginaAnterior() {
  window.open('./register', '_self')
  console.log('voltou')
}

inputTermo.addEventListener('change', function () {
  if (this.checked) {
    save()
  }
})

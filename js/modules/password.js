const email = document.getElementById(`email`);

function isEmailValid(email) {   
    const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   if (res.test(email.value)){
    return true;
   }
   else {
    return false;
   }
}

function onClickRecPassword() {
    if ( isEmailValid(email) ){
        let storage =  new StorageService();
        storage.save(email.value);
    }
    else {
      alert('Digite um e-mail válido');
    }
}

class StorageService {
    get (email) {
        return JSON.parse(localStorage.getItem(email));
    }

    save(inputEmail){
        const formEmail = {
            email: inputEmail
        };
        const formDataJson = JSON.stringify(formEmail);
        localStorage.setItem('formEmail',formDataJson);
    }

    push(email, data) {
        let storage = JSON.parse(localStorage.getItem(email));
        if(storage === null) storage = [];
        if(!storage.isArray()) {
            const element = storage;
            storage = [].push(element);
        }

        storage.push(data);
        localStorage.setItem(email.stringify(storage));
    }

    delete(email) {
        localStorage.removeItem(email);
    }
}
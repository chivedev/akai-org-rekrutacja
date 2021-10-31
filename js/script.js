const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regTestName = /^[a-zA-Z ]+$/;

function validate(e) {


    e.preventDefault();

    let name = document.getElementById("name").value;
    let lastname = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    if (name === '' || !regTestName.test(name)) {
        alert("wprowadź imię ");
        return false;
    }

    if (lastname === '' || !regTestName.test(lastname)) {
        alert("wprowadź nazwisko");
        return false;
    }

    if (email === '' || !regEmail.test(email)) {
        alert('wprowadź adres mail');
        return false;
    }

    if (checkboxes.length == 0) {
    	alert('wybierz jedną z sekcji');
     	return false;
     }

    console.log("dane wprowadzone");

}
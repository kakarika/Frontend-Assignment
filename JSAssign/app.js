let fields = document.querySelectorAll('input[data-require]');
let password = document.querySelector('[name="password"]');
let confirmPassword = document.querySelector('[name="confirm-password"]')
// let error = document.querySelectorAll('.error');

let obj = {
    "first-name": "First Name",
    "last-name": "Last Name",
    "id": 'ID',
    "email": "Email",
    "password": "Password",
    "confirm-password": "Confirm Password", 
}

let form = document.querySelector('form');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    fields.forEach((key, i) => {
        let error = key.parentNode.querySelector('.error');
        if (key.value === '') {
            error.innerText = obj[key.getAttribute('name')] + ' is required';
            error.style.display = 'block';
        } else {
            error.style.display = "none";
            if (password.value !== confirmPassword.value){
                let err = confirmPassword.parentNode.querySelector('.error');
                console.log(err)
                err.innerText = 'Password does not match';
                err.style.display = "block";
            }
        }
    })

    // for (let i = 0; i < error.length; i++){
    //     if (fields[i].value === "") {
    //         error[i].style.display = 'block';
    //         error[i].innerText = `${fields[i].name} is required.`;

    //     }
    // }
})
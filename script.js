const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("confirm-password");

function showError(input, message) {
    const container = input.parentElement;
    container.className = 'form-item-container error';
    const small = container.querySelector("small");
    small.innerText = message;
}

function showSuccess(input) {
    const container = input.parentElement;
    container.className = 'form-item-container success';
    const small = container.querySelector('small');
    small.innerText = "success"
}

function checkEmpty(inputs) {
    let empty = false
    inputs.forEach(function(input) {
        if (input.value == '') {
            showError(input, `${input.id} is required`)
            empty = true
        }
    })
    return empty

}


function checkEmail(input) {
    const user = /@/
    if (user.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, `unvalid email address`)
    }
}

function checkUsername(input, min) {
    if (input.value.length >= min) {
        showSuccess(input)
    } else {
        showError(input, `must be at least ${min} ltters`)
    }
}

function checkPassword(input, min) {
    if (input.value.length < min) {
        showError(input, `must be at least ${min} ltters`)
        return false
    } else {
        return true
    }
}

function checkConfirmPW(input1, input2) {
    if (input1.value == input2.value) {
        showSuccess(input1)
        showSuccess(input2)
    } else {
        showSuccess(input1)
        showError(input2, `passwoed do not match`)
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (!checkEmpty([username, email, password, password2])) {
        checkEmail(email)
        checkUsername(username, 5)
        pw1 = checkPassword(password, 6)
        pw2 = checkPassword(password2, 6)
        if (pw1 && pw2) {
            checkConfirmPW(password, password2)
        }
    }

})
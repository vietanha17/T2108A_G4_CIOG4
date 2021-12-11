var xhr = new XMLHttpRequest();
xhr.open("POST", register_API, true);
if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
}

function validate() {
    var firstName = document.reg_form.firstName;
    var lastName = document.reg_form.lastName;
    var email = document.reg_form.email;
    var phone = document.reg_form.phone;
    var gender = document.reg_form.gender;
    var you = document.reg_form.you;

    if (firstName.value.length <= 0) {
        alert("FirstName is required");
        firstName.focus();
        return false;
    }


    if (you.value.length <= 0) {
        alert("Yourself is required");
        you.focus();
        return false;
    }

    if (lastName.value.length <= 0) {
        alert("Last Name is required");
        lastName.focus();
        return false;
    }

    if (gender.value.length <= 0) {
        alert("Gender is required");
        gender.focus();
        return false;
    }
    if (email.value.length <= 0) {
        alert("Email Id is required");
        email.focus();
        return false;
    }

    if (phone.value.length <= 0) {
        alert("Phone is required");
        phone.focus();
        return false;
    }
    return false;
}




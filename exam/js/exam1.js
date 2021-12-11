var xhr = new XMLHttpRequest();
xhr.open("POST", register_API, true);
if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
}

function validate() {
    var hovaten = document.reg_form.hovaten;
    var gioitinh = document.reg_form.gioitinh;
    var email = document.reg_form.email;
    var ngaysinh = document.reg_form.ngaysinh;
    var gioithieu = document.reg_form.gioithieu;

    if (firstName.value.length <= 0) {
        alert("Họ và tên is required");
        hovaten.focus();
        return false;
    }


    if (gioitinh.value.length <= 0) {
        alert("Giới tính is required");
        you.focus();
        return false;
    }

    if (ngaysinh.value.length <= 0) {
        alert("Ngày sinh is required");
        ngaysinh.focus();
        return false;
    }

    if (gioithieu.value.length <= 0) {
        alert("Giới thiệu is required");
        gioithieu.focus();
        return false;
    }
    if (email.value.length <= 0) {
        alert("Email is required");
        email.focus();
        return false;
    }

    return false;
}




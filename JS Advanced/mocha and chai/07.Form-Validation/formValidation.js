function validate() {
    document.getElementById("company").addEventListener('change', () => {
        let companyInfo = document.getElementById("companyInfo");
        if (document.getElementById("company").checked == false) {
            companyInfo.style.display = 'none';
        } else {
            companyInfo.style.display = 'block';
        }
    });

    document.getElementById('submit').addEventListener('click', checkFields);

    function checkFields(e) {
        e.preventDefault();
        invalidFields = [];
        let checkBox = document.querySelector("#company");
        let username = document.getElementById('username');
        let usernamePattern = /^[A-Za-z0-9]{3,20}$/;
        if (!usernamePattern.test(username.value)) {
            invalidFields.push(username);
        }
        let email = document.getElementById('email');
        let emailPattern = /^[^@.]+@[^@]*\.[^@]*$/;
        if (!emailPattern.test(email.value)) {
            invalidFields.push(email);
        }
        let password = document.getElementById('password');
        let confirmPass = document.getElementById('confirm-password');
        let passPattern = /^[\w]{5,15}$/;
        if (!passPattern.test(password.value) || confirmPass.value !== password.value) {
            invalidFields.push(password);
            invalidFields.push(confirmPass);
        }
        if (checkBox.checked) {
            let companyId = document.getElementById('companyNumber');
            let companyPattern = /^[0-9]{4}$/;
            if (!companyPattern.test(companyId.value)) {
                invalidFields.push(companyId);
            }
        }

        invalidFields.forEach((field) => field.style.borderColor = 'red');

        !invalidFields.length ? document.querySelector("#valid").style.display = "block" : document.querySelector("#valid").style.display = "none";
    }
}
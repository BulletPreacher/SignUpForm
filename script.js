const form = document.getElementById("myForm");
const btn= document.getElementById("btnSubmit")

function verifyPass() {
    var pass1 = document.getElementById("user_password1").value;
    var pass2 = document.getElementById("user_password2").value;
    if (pass1 !== pass2) {
        console.log("wrong")
        document.getElementById("user_password2").setCustomValidity("Passwords do not match");
        document.getElementById("user_password2").reportValidity();
        return false;
    }
    return true;
}

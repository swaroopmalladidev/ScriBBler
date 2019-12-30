// function to trigger signInModal
function signInModal() {
    modal('signIn-Modal');
}

// function to trigger signUp from signIn modal
function signUpInSignInRedirectModal() {
    signInModal();
    signUpModal();
}

// function to trigger signUpModal
function signUpModal() {
    modal('signUp-Modal');
}

// Generic function to show or hide a modal pop up
function modal(modalID) {
    var modal = document.getElementById(modalID);
    if (modal.style.display == '') {
        modal.style.display = 'block';
    } else {
        modal.style.display = '';
    }
}
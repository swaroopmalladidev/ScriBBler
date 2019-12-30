//Declare 'Delete Modal'
var deleteModal = document.getElementById('deletePostModal');

//Declare 'card' global variable
var cardPos;

// Function to delete card
function deleteCard(cardNumb) {
    cardPos = document.getElementById(cardNumb);
    deleteModal.style.display = 'flex';
}

// Function to confirm the modal when clisked on 'Yes'
function confirmModal() {
    deleteModal.style.display = 'none';
    cardPos.style.display = 'none';
}

// Function to close the modal when clicked on 'No'
function closeModal() {
    deleteModal.style.display = 'none';
}

// Function to redirect user to post.html page when clicked on ellipsis icon
function postPageRedirect() {
    window.location.href = '../html/post.html';
}
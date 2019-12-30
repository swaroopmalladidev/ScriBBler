// redirect 'All Posts' button to Postslist page
function allPostsRedirect() {
    window.location.href = './html/postslist.html';
}

// function to trigger createPostModal
function createPostModal() {
    modal('createPostModal');
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
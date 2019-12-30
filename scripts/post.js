// Initialize the counter
var likesCounter = 0;

// Function to increment counter
// For the first like, display the text as '1 person likes this!'
// For the subsequent likes, display the text as 'x people like this!'
function likePostCounter() {
    likesCounter++;

    document.getElementById('likePostBttn').innerHTML = '<i class="fa fa-thumbs-up"  aria-hidden="true"></i> Liked!';

    if (likesCounter == 1) {
        document.getElementById('likeCount-Text').innerHTML = likesCounter + ' ' + 'person likes this!';
    } else {
        document.getElementById('likeCount-Text').innerHTML = likesCounter + ' ' + 'people like this!';
    }
}
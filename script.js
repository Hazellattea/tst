// JavaScript for Modal functionality
function showModal(artId) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');

    // Set the source of the modal image based on the artwork clicked
    if (artId === 'art1') {
        modalImage.src = 'path-to-your-art-image1.jpg';
    } else if (artId === 'art2') {
        modalImage.src = 'path-to-your-art-image2.jpg';
    }

    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Close the modal if clicked outside of the modal content
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

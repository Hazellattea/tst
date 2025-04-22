// JavaScript for Modal functionality
function showModal(artId) {
    var modal = document.getElementById('modal');
    var modalImage = document.getElementById('modal-image');

    // Set the source of the modal image based on the artwork clicked
    if (artId === 'art1') {
        modalImage.src = 'ai hoshino.jpg';
    } else if (artId === 'art2') {
        modalImage.src = 'tomasalpaedisong.jpg';
    } else if (artId === 'art3') {
        modalImage.src = 'harassment is not a compliment.jpg';
    }
    // Tambahkan artwork lain kalau ada

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

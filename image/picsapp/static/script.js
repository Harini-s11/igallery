const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');

const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg'
];

function openModal(index) {
    modal.style.display = 'flex';
    modalImage.src = images[index];
}

function closeModal() {
    modal.style.display = 'none';
}

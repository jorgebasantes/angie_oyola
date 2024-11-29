
function handleLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if entered username and password match any pair in the validUsers array
    const userValid = validUsers.some(user => user.username === username && user.password === password);

    if (userValid) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        loadGallery(); // Load images
        loadVideoGallery(); // Load videos
        loadPDFGallery(); // Load PDFs
    } else {
        document.getElementById('login-error').style.display = 'block';
    }
}

// Function to show the selected content section
function showSection(section) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(sec => sec.style.display = 'none'); // Hide all sections
    document.getElementById(`${section}-section`).style.display = 'block'; // Show selected section
}

// Sample array for images (replace with actual image URLs as needed)
const imageUrls = Array.from({ length: 50 }, (_, i) => `images/image-${i + 1}.jpg`); // example images

// Load image gallery dynamically
function loadGallery() {
    const gridContainer = document.querySelector('.grid-container');
    imageUrls.forEach((url) => {
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Gallery Image';
        img.loading = 'lazy';
        img.onclick = () => openModal(url);
        gridContainer.appendChild(img);
    });
}

// Modal functions for viewing images (optional)
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');

function openModal(url) {
    modal.style.display = 'block';
    modalImage.src = url;
}

function closeModal() {
    modal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
};
// Array of valid username and password pairs
const validUsers = [
    { username: "jorge", password: "jay" },
    { username: "angie", password: "angie4505" },
    { username: "user3", password: "password3" }
    // Add more users as needed
];
// Array of video URLs
const videoUrls = [
    "videos/video-1.mp4",
    "videos/video-2.mp4",
    "videos/video-3.mp4",
    "videos/video-4.mp4",
    "videos/video-5.mp4",
    "videos/video-6.mp4",
    "videos/video-7.mp4",
    // Add more video URLs as needed
];

// Function to load video gallery
function loadVideoGallery() {
    const videoContainer = document.querySelector('.video-container');
    videoUrls.forEach(url => {
        const video = document.createElement('video');
        video.src = url;
        video.controls = true;
        video.width = 320;
        video.height = 240;
        videoContainer.appendChild(video);
    });
}

// Array of PDF URLs
const pdfUrls = [
    "pdfs/baby's first puzzle book.pdf",
    "pdfs/Basantes Order of Removal 031318.pdf",
    "pdfs/RCR169930185385183j.pdf",
    "pdfs/sopa de letras cover-j.pdf",
    "pdfs/time waits for none.pdf",
    "pdfs/Save these backup codes _ Login.gov.pdf"
    // Add more PDF URLs as needed
];

// Function to load the PDF links dynamically
function loadPDFGallery() {
    const pdfContainer = document.querySelector('.pdf-container');
    pdfUrls.forEach(url => {
        const button = document.createElement('button');
        button.textContent = url.split('/').pop(); // Display filename
        button.onclick = () => openPDF(url);
        pdfContainer.appendChild(button);
    });
}

// Function to open the selected PDF in an iframe
function openPDF(url) {
    // Remove any existing iframe
    const existingIframe = document.querySelector('.pdf-container iframe');
    if (existingIframe) {
        existingIframe.remove();
    }

    // Create a new iframe for the selected PDF
    const iframe = document.createElement('iframe');
    iframe.src = url;
    iframe.width = "100%";
    iframe.style.height = "80vh"; // Adjust height based on viewport
    iframe.style.border = "1px solid #ddd";
    iframe.style.borderRadius = "5px";
    document.querySelector('.pdf-container').appendChild(iframe);
}

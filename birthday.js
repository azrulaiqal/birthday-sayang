function playSoundAndNavigate() {
    // Play MP3 sound
    const audio = new Audio(""); // Replace 'sound.mp3' with the actual path to your MP3 file
    audio.play();

    // Navigate to the new website after a slight delay
    setTimeout(() => {
        window.location.href = 'https://azrulaiqal.github.io/flowers/'; // Replace with your desired link
    }, 3000); // Adjust delay time (in milliseconds) if needed
}

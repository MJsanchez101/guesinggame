// script.js

document.getElementById('submitBtn').addEventListener('click', function() {
    const userNumber = document.getElementById('userNumber').value;
    const resultDiv = document.getElementById('result');

    // Check if the input is empty
    if (userNumber === '') {
        resultDiv.textContent = 'Please enter a number.';
        return;
    }

    // Messages to display
    const messages = [
        'Reading your mind...',
        "It's hard to guess, give me a sec...",
        `You were thinking of the number ${userNumber}, weren't you?`
    ];

    // Function to simulate typing effect
    function typeMessage(message, callback) {
        let i = 0;
        resultDiv.textContent = '';
        const typingInterval = setInterval(() => {
            resultDiv.textContent += message.charAt(i);
            i++;
            if (i > message.length) {
                clearInterval(typingInterval);
                setTimeout(callback, 1000); // Wait 1 second before next message
            }
        }, 50); // Adjust typing speed here (milliseconds per character)
    }

    // Function to display messages sequentially
    function displayMessages(index) {
        if (index < messages.length) {
            typeMessage(messages[index], () => displayMessages(index + 1));
        }
    }

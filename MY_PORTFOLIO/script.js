// // JavaScript for Typing Effect
// const words = ["Programmer", "Developer", "Creator"]; // The words to type
// let currentWordIndex = 0; // Current word index
// let currentLetterIndex = 0; // Current letter index for each word
// let typingInterval;
// let deletingInterval;

// function type() {
//     if (currentLetterIndex < words[currentWordIndex].length) {
//         document.getElementById("typing-effect").textContent += words[currentWordIndex][currentLetterIndex];
//         currentLetterIndex++;
//     } else {
//         clearInterval(typingInterval);
//         setTimeout(deleteText, 1000); // Wait for 1 second before starting to delete
//     }
// }

// function deleteText() {
//     if (currentLetterIndex > 0) {
//         document.getElementById("typing-effect").textContent = document.getElementById("typing-effect").textContent.slice(0, -1);
//         currentLetterIndex--;
//     } else {
//         currentWordIndex = (currentWordIndex + 1) % words.length; // Cycle through words
//         typingInterval = setInterval(type, 200); // Start typing the next word
//     }
// }

// typingInterval = setInterval(type, 200); // Start typing the first word
// JavaScript for Typing Effect
// JavaScript for Typing Effect
const words = ["Programmer", "Developer", "Creator"]; // Words to be typed
let currentWordIndex = 0; // Index for current word
let currentLetterIndex = 0; // Index for current letter of the word
let isDeleting = false; // Flag to check if the word is being deleted
let typingSpeed = 150; // Speed of typing
let deletingSpeed = 100; // Speed of deleting
let pauseBetweenWords = 1000; // Pause time after word is fully typed

// Function to start the typing effect
function typeEffect() {
    const target = document.getElementById("typing-effect");
    const currentWord = words[currentWordIndex];

    if (!isDeleting) {
        // Typing the word
        if (currentLetterIndex < currentWord.length) {
            target.textContent += currentWord.charAt(currentLetterIndex);
            currentLetterIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            // Word is fully typed, wait before starting to delete
            isDeleting = true;
            setTimeout(typeEffect, pauseBetweenWords);
        }
    } else {
        // Deleting the word
        if (currentLetterIndex > 0) {
            target.textContent = currentWord.substring(0, currentLetterIndex - 1);
            currentLetterIndex--;
            setTimeout(typeEffect, deletingSpeed);
        } else {
            // Word is fully deleted, move to next word
            isDeleting = false;
            currentWordIndex = (currentWordIndex + 1) % words.length; // Cycle through the words
            setTimeout(typeEffect, typingSpeed);
        }
    }
}

// Initialize typing effect
typeEffect();

/* ===== INTERACTIVE COSMIC CURSOR ===== */

const hero = document.querySelector("header");

if (hero) {
    hero.addEventListener("mousemove", (event) => {
        const rect = hero.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        hero.style.setProperty("--mouse-x", `${x}px`);
        hero.style.setProperty("--mouse-y", `${y}px`);

        hero.classList.add("cursor-active");
    });

    hero.addEventListener("mouseleave", () => {
        hero.classList.remove("cursor-active");
    });
}

// Load sounds
let addSound = new Audio("add.mp3");
let doneSound = new Audio("done.mp3");

// Function to add item
function add_item() {
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");

    if (item.value.trim() !== "") {
        let make_li = document.createElement("li");

        // Add item text with check button
        make_li.innerHTML = `
            ${item.value}
            <button class="check-btn" onclick="remove_item(this)">✔</button>
        `;

        list_item.appendChild(make_li);
        item.value = "";

        // Play add sound 🎶
        addSound.play();

        // Add cute animation
        make_li.style.animation = "pop 0.5s ease-in-out";
    } else {
        alert("💖 Please enter a task! 💖");
    }
}

// Function to remove item
function remove_item(element) {
    // Play done sound 🎵
    doneSound.play();

    // Animation before removing
    element.parentElement.style.animation = "fadeOut 0.3s ease-out";
    setTimeout(() => {
        element.parentElement.remove();
    }, 300);
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Save dark mode preference in local storage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

// Load dark mode preference on page load
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
}

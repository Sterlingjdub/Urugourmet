// Function to fetch and inject the header partial
function fetchHeader() {
    fetch("partials/header.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("headerContainer").innerHTML = html;
            applyHamburgerMenuListener();
        })
        .catch(error => console.error("Error fetching header:", error));
}

// Function to apply the event listener for the hamburger menu
function applyHamburgerMenuListener() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
}

// Function to fetch and inject the footer partial
function fetchFooter() {
    fetch("partials/footer.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("footerContainer").innerHTML = html;
        })
        .catch(error => console.error("Error fetching footer:", error));
}

// Call the fetchHeader and fetchFooter functions when the page loads
window.onload = function () {
    fetchHeader();
    fetchFooter();
};


function openModal(imagePath) {
    let modal = document.getElementById("myModal");
    let modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imagePath;
}

function closeModal() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
});


//Contact Us Page
function validateForm() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let partySize = document.getElementById("party-size").value;
    let message = document.getElementById("message").value;
    let error = "";

    if (fname == "") {
        error += "First Name is required.<br>";
        document.getElementById("fname-error").innerText = "First Name is required.";
    } else {
        document.getElementById("fname-error").innerText = "";
    }
    if (lname == "") {
        error += "Last Name is required.<br>";
        document.getElementById("lname-error").innerText = "Last Name is required.";
    } else {
        document.getElementById("lname-error").innerText = "";
    }
    if (email == "") {
        error += "Email is required.<br>";
        document.getElementById("email-error").innerText = "Email is required.";
    } else {
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            error += "Invalid email format.<br>";
            document.getElementById("email-error").innerText = "Invalid email format.";
        } else {
            document.getElementById("email-error").innerText = "";
        }
    }
    if (partySize == "" || isNaN(partySize) || partySize < 20 || partySize > 80) {
        error += "Party Size must be a number between 20 and 80.<br>";
        document.getElementById("party-size-error").innerText = "Party Size must be a number between 20 and 80.";
    } else {
        document.getElementById("party-size-error").innerText = "";
    }
    if (message == "") {
        error += "Message is required.<br>";
        document.getElementById("message-error").innerText = "Message is required.";
    } else {
        document.getElementById("message-error").innerText = "";
    }

    if (error !== "") {
        return false;
    }

    return true;
}
// Function to fetch and inject the header partial
function fetchHeader() {
    fetch("partials/header.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("headerContainer").innerHTML = html;
            // Apply the event listener for the hamburger menu
            applyHamburgerMenuListener();
        })
        .catch(error => console.error("Error fetching header:", error));
}

// Function to apply the event listener for the hamburger menu
function applyHamburgerMenuListener() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (hamburger && nav) {
        // Toggle the "active" class on click
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
window.onload = function() {
    fetchHeader();
    fetchFooter();
};

    //document.getElementById('currentYear').textContent = new Date().getFullYear();


  
    function openModal(imagePath) {
        var modal = document.getElementById("myModal");
        var modalImg = document.getElementById("modalImg");
        modal.style.display = "block";
        modalImg.src = imagePath;
    }

    function closeModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    }
  
    document.addEventListener('DOMContentLoaded', function () {
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('nav');
    
        if (hamburger && nav) {
            // Toggle the "active" class on click
            hamburger.addEventListener('click', function () {
                hamburger.classList.toggle('active');
                nav.classList.toggle('active');
            });
        }
    });
    
    
    

    // function generateMenuHTML(menuItems) {
    //     var menuHTML = '';
    //     menuItems.forEach(function(item) {
    //         menuHTML += '<div class="menu-item">';
    //         menuHTML += '<h2>' + item.name + '</h2>';
    //         menuHTML += '<p><strong>Price:</strong> $' + item.price.toFixed(2) + '</p>';
    //         menuHTML += '<p><strong>Description:</strong> ' + item.description + '</p>';
    //         menuHTML += '</div>';
    //     });
    //     return menuHTML;
    // }

    // // Display the menu on the page
    // var menuContainer = document.getElementById('menu');
    // if (menuContainer) {
    //     menuContainer.innerHTML = generateMenuHTML(menuItems);
    // }
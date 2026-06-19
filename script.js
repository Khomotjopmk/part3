// ==============================
// KHOMOTJO FOOD SHOP SCRIPT
// ==============================

// Display current year in footer
document.addEventListener("DOMContentLoaded", () => {

    const yearElements = document.querySelectorAll(".current-year");

    yearElements.forEach(element => {
        element.textContent = new Date().getFullYear();
    });

});

// ==============================
// LIVE DATE & TIME (Hours Page)
// ==============================

function updateDateTime() {

    const dateTimeElement = document.getElementById("datetime");

    if (dateTimeElement) {

        const now = new Date();

        dateTimeElement.textContent =
            now.toLocaleDateString() + " | " +
            now.toLocaleTimeString();
    }
}

setInterval(updateDateTime, 1000);
updateDateTime();


// ==============================
// OPEN / CLOSED STATUS
// ==============================

function checkShopStatus() {

    const statusElement = document.getElementById("status");

    if (!statusElement) return;

    const hour = new Date().getHours();

    if (hour >= 8 && hour < 20) {

        statusElement.textContent =
            "🟢 We are currently OPEN";

        statusElement.style.color = "green";

    } else {

        statusElement.textContent =
            "🔴 We are currently CLOSED";

        statusElement.style.color = "red";
    }
}

checkShopStatus();


// ==============================
// CONTACT FORM VALIDATION
// ==============================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please complete all fields.");

            event.preventDefault();

            return;
        }

        if (!email.includes("@")) {

            alert("Please enter a valid email address.");

            event.preventDefault();

            return;
        }

        alert("Form submitted successfully!");
    });
}


// ==============================
// MENU SEARCH (Index Page)
// ==============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const filter =
            searchInput.value.toLowerCase();

        const menuItems =
            document.querySelectorAll(".menu-item");

        menuItems.forEach(item => {

            const text =
                item.textContent.toLowerCase();

            if (text.includes(filter)) {

                item.style.display = "block";

            } else {

                item.style.display = "none";
            }
        });
    });
}


// ==============================
// WELCOME MESSAGE
// ==============================

window.addEventListener("load", () => {

    console.log(
        "Welcome to Khomotjo Food Shop!"
    );

});
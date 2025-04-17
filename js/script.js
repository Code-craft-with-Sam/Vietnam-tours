// Dark Mode Toggle
document.getElementById("dark-mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Filter Tours
// Removed duplicate definition of filterTours

// Form Validation
// Removed duplicate form submission event listener

function filterTours() {
    const filter = document.getElementById("filter").value;
    const tours = document.querySelectorAll(".tour");
    tours.forEach((tour) => {
      if (filter === "all" || tour.dataset.category === filter) {
        tour.style.display = "block";
      } else {
        tour.style.display = "none";
      }
    });
  }
  
  const toggle = document.getElementById("dark-mode-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
  
  document.getElementById("language-switcher").addEventListener("change", (e) => {
    const lang = e.target.value;
    alert(`Language switched to: ${lang}`);
    // Implement language switching logic here
  });
  // Removed duplicate dark-mode-toggle event listener
  if (!name || !email) {
    e.preventDefault();
    alert("Please fill out all required fields.");
  }

// Handle Booking Form Submission
document.getElementById("booking-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    tour: document.getElementById("tour").value,
  };

  try {
    // Send data to your server
    const serverResponse = await fetch("http://localhost:5000/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const serverResult = await serverResponse.json();
    console.log("Server Response:", serverResult);

    // Show success message and redirect
    alert("Booking submitted successfully!");
    window.location.href = "thankyou.html"; // Redirect to Thank You page
  } catch (error) {
    console.error("Error submitting booking:", error);
    alert("Failed to submit booking. Please try again.");
  }
});

console.log("Sending booking request...");
fetch("http://localhost:5000/api/bookings", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "John Doe",
    email: "john.doe@example.com",
    tour: "Hanoi City Tour",
    date: "2025-04-20",
  }),
})
  .then((response) => {
    console.log("Response status:", response.status);
    return response.json();
  })
  .then((data) => console.log("Server Response:", data))
  .catch((error) => console.error("Error:", error));
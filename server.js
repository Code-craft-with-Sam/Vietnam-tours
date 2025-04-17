const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

const bookings = []; // Temporary in-memory storage

// Serve static files from the "Frontend" folder
app.use(express.static(path.join(__dirname, "Frontend")));

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the Vietnam Tour Booking API!");
});

// POST route for bookings
app.post("/api/bookings", (req, res) => {
  const booking = req.body;
  bookings.push(booking); // Save booking to in-memory array
  console.log("New Booking:", booking); // Log the new booking
  res.status(200).send({ message: "Booking received!", booking });
});

// GET route for bookings
app.get("/api/bookings", (req, res) => {
  res.status(200).send(bookings); // Return all bookings
});

// Fallback route to serve "index.html" for unknown routes
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "Frontend/index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

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
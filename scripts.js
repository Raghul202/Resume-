// Function to show selected section
function showSection(sectionId) {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.style.display = "none"; // Hide all sections
  });
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block"; // Show selected section
  }
}

// Event listeners for navigation links
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      const sectionId = link.getAttribute("href").slice(1); // Extract section id from href
      showSection(sectionId); // Show selected section
    });
  });
});

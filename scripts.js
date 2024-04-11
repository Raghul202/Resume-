// Function to hide all sections
function hideAllSections() {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.style.display = "none"; // Hide all sections
  });
}

// Function to show selected section
function showSection(sectionId) {
  hideAllSections(); // Hide all sections first
  const selectedSection = document.getElementById(sectionId);
  if (selectedSection) {
    selectedSection.style.display = "block"; // Show selected section
  }
}

// Event listeners for navigation links
document.addEventListener("DOMContentLoaded", function() {
  hideAllSections(); // Hide all sections initially

  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      const sectionId = link.getAttribute("href").slice(1); // Extract section id from href
      showSection(sectionId); // Show selected section
    });
  });

  // Additional event listener for the "Projects" link
  const projectsLink = document.querySelector("nav ul li a[href='#projects']");
  if (projectsLink) {
    projectsLink.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      showSection("projects"); // Show the projects section
    });
  }
});

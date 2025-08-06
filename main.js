function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'block';
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}




// Get all book elements
const books = document.querySelectorAll('.book');

// Add an event listener to each book element
books.forEach(book => {
  book.addEventListener('mouseover', () => {
    // Increase the size of the book
    book.style.transform = 'scale(1.5)';
    book.style.background = '#ccc';
  });

  book.addEventListener('mouseout', () => {
    // Reset the size of the book
    book.style.transform = 'scale(1)';
    book.style.background = '#f7f7f7';
  });
});




// Get the profile container element
const profileContainer = document.querySelector('.profile-section');

// Get the book container element
const bookContainer = document.querySelector('.contain');

// Get the rest of the page containers
const newsContainer = document.querySelector('.news-page');
const mediaContainer = document.querySelector('.media-page');
const readOnlineContainer = document.querySelector('.read-online-page');
const contactContainer = document.querySelector('.contact-page');
const blogContainer = document.querySelector('.blog-page');

// Function to animate the profile section
function animateProfileSlideIn() {
  // Set the initial position of the profile container to be off-screen
  profileContainer.style.transform = 'translateX(-100%)';

  // Set a timeout to delay the animation
  setTimeout(() => {
    // Animate the profile container to slide in from the left
    profileContainer.style.transform = 'translateX(0)';
    profileContainer.style.transition = 'transform 0.5s ease-in-out';
  }, 200); // Delay the animation by 200ms
}

// Function to animate the book section
function animateBookSlideUp() {
  // Set the initial position of the book container to be off-screen
  bookContainer.style.transform = 'translateY(100%)';

  // Set a timeout to delay the animation
  setTimeout(() => {
    // Animate the book container to slide up from the bottom
    bookContainer.style.transform = 'translateY(0)';
    bookContainer.style.transition = 'transform 0.5s ease-in-out';
  }, 700); // Delay the animation by 700ms
}






var icon = document.getElementById("icon");

icon.onclick = function(){
  console.log("Onclick function triggered");
  document.body.classList.toggle("light-mode");
  if(document.body.classList.contains("light-mode")){
    console.log("Light mode enabled");
    icon.src ="sun.png"
  }else{
    console.log("Light mode disabled");
    icon.src = "moon.png"
  };
};



// Get the current theme color from local storage
var themeColor = localStorage.getItem("themeColor");

// If theme color is not set, default to dark mode
if (themeColor === null) {
  themeColor = "dark";
}

// Apply the theme color to the body element
document.body.classList.toggle("light-mode", themeColor === "light");

// Update the icon image based on the theme color
var icon = document.getElementById("icon");
if (themeColor === "light") {
  icon.src = "sun.png";
} else {
  icon.src = "moon.png";
}

// Add an event listener to the icon to toggle the theme color
icon.onclick = function() {
  // Toggle the theme color
  if (themeColor === "dark") {
    themeColor = "light";
  } else {
    themeColor = "dark";
  }

  // Store the new theme color in local storage
  localStorage.setItem("themeColor", themeColor);

  // Apply the new theme color to the body element
  document.body.classList.toggle("light-mode", themeColor === "light");

  // Update the icon image based on the new theme color
  if (themeColor === "light") {
    icon.src = "sun.png";
  } else {
    icon.src = "moon.png";
  }
};




// Make header slightly smaller on scroll for better mobile experience
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-container');
    if (window.scrollY > 50) {
        header.style.height = '60vh';
    } else {
        header.style.height = '70vh';
    }
});

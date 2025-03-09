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

// Function to animate the rest of the pages
function animateRestOfPages() {
  // Set the initial position of the rest of the page containers to be off-screen
  newsContainer.style.transform = 'translateX(-100%)';
  mediaContainer.style.transform = 'translateX(-100%)';
  readOnlineContainer.style.transform = 'translateX(-100%)';
  contactContainer.style.transform = 'translateX(-100%)';
  aboutContainer.style.transform = 'translateX(-100%)';
  blogContainer.style.transform = 'translateX(-100%)';

  // Set a timeout to delay the animation
  setTimeout(() => {
    // Animate the rest of the page containers to slide in from the left
    newsContainer.style.transform = 'translateX(0)';
    newsContainer.style.transition = 'transform 0.5s ease-in-out';
    mediaContainer.style.transform = 'translateX(0)';
    mediaContainer.style.transition = 'transform 0.5s ease-in-out';
    readOnlineContainer.style.transform = 'translateX(0)';
    readOnlineContainer.style.transition = 'transform 0.5s ease-in-out';
    contactContainer.style.transform = 'translateX(0)';
    contactContainer.style.transition = 'transform 0.5s ease-in-out';
    aboutContainer.style.transform = 'translateX(0)';
    aboutContainer.style.transition = 'transform 0.5s ease-in-out';
    blogContainer.style.transform = 'translateX(0)';
    blogContainer.style.transition = 'transform 0.5s ease-in-out';
  }, 1000); // Delay the animation by 1000ms
}

// Call the functions to animate the profile, book, and rest of the pages
animateProfileSlideIn();
animateBookSlideUp();
animateRestOfPages();



// Get the about container element
const aboutContainer = document.querySelector('.about-page');

// Function to animate the about section
function animateAboutSlideIn() {
  // Set the initial position of the about container to be off-screen
  aboutContainer.style.transform = 'translateX(-100%)';

  // Set a timeout to delay the animation
  setTimeout(() => {
    // Animate the about container to slide in from the left
    aboutContainer.style.transform = 'translateX(0)';
    aboutContainer.style.transition = 'transform 0.5s ease-in-out';
  }, 1000); // Delay the animation by 1000ms
}

// Call the function to animate the about section
animateAboutSlideIn();
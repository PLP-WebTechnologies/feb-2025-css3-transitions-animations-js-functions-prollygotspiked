// JavaScript to store user preference in localStorage
function storeUserPreference(theme) {
    localStorage.setItem('theme', theme);
  }
  
  // Retrieve the theme from localStorage and apply it
  function applyUserPreference() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme); // Apply the saved theme
    }
  }
  
  // Example to toggle between light and dark themes
  function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.classList.remove(currentTheme);
    document.body.classList.add(newTheme);
    storeUserPreference(newTheme);
  }
  
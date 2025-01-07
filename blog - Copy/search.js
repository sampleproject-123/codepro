// Dummy articles data
const articles = [
    { title: "Understanding JavaScript Closures", url: "/articles/js-closures" },
    { title: "A Guide to Responsive Web Design", url: "/articles/responsive-design" },
    { title: "The Basics of Machine Learning", url: "/articles/machine-learning" },
    { title: "Introduction to React Hooks", url: "/articles/react-hooks" },
    { title: "Getting Started With Python", url: "file:///E:/blog/featuredarticles/python/python1.html" },
  ];
  
  // DOM Elements
  const searchContainer = document.querySelector('.search-container');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const suggestions = document.getElementById('suggestions');
  
  // Hide suggestions on page load
  window.addEventListener('load', () => {
    suggestions.style.display = 'none';
  });
  
  // Display suggestions based on input
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    const matches = articles.filter(article => 
      article.title.toLowerCase().includes(query)
    );
  
    suggestions.innerHTML = matches.map(
      match => `<li data-url="${match.url}">${match.title}</li>`
    ).join('');
    
    suggestions.style.display = matches.length > 0 ? 'block' : 'none';
  });
  
  // Handle suggestion click
  suggestions.addEventListener('click', (e) => {
    const target = e.target;
    if (target.tagName === 'LI') {
      navigateToArticle(target.getAttribute('data-url'));
    }
  });
  
  // Handle search button click or "Enter" key press
  searchBtn.addEventListener('click', () => {
    redirectToArticle();
  });
  
  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      redirectToArticle();
    }
  });
  
  // Navigate to article and hide search elements
  function navigateToArticle(url) {
    // Hide all search elements
    searchContainer.style.display = 'none';
    suggestions.style.display = 'none';
    
    // Redirect to the article
    window.location.href = url;
  }
  
  // Redirect to the first matching article
  function redirectToArticle() {
    const query = searchInput.value.toLowerCase();
    const match = articles.find(article =>
      article.title.toLowerCase().includes(query)
    );
  
    if (match) {
      navigateToArticle(match.url);
    } else {
      alert('No articles found!');
    }
  }
  
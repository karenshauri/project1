// DOM Elements
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const regionFilter = document.getElementById('region-filter');
const countriesContainer = document.getElementById('countries-container');
const loadingSpinner = document.getElementById('loading-spinner');
const themeToggle = document.createElement('button');

// State
let allCountries = [];
let filteredCountries = [];

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  // Add theme toggle button
  themeToggle.className = 'theme-toggle';
  themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  document.body.appendChild(themeToggle);
  
  // Load theme preference
  loadThemePreference();
  
  // Fetch countries
  await fetchCountries();
  
  // Event listeners
  searchBtn.addEventListener('click', handleSearch);
  searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') handleSearch();
  });
  regionFilter.addEventListener('change', filterCountries);
  themeToggle.addEventListener('click', toggleTheme);
});

// Theme functionality
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  if (currentTheme === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'dark');
  }
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// Fetch countries from API
async function fetchCountries() {
  try {
    showLoading();
    const response = await fetch('countries.json');
    if (!response.ok) throw new Error('Failed to fetch countries');
    allCountries = await response.json();
    displayCountries(allCountries);
  } catch (error) {
    console.error('Error:', error);
    countriesContainer.innerHTML = `
      <div class="error-message">
        <i class="fas fa-exclamation-triangle"></i>
        <p>Failed to load countries. Please try again later.</p>
      </div>
    `;
  } finally {
    hideLoading();
  }
}

// Display countries
function displayCountries(countries) {
  filteredCountries = countries;
  countriesContainer.innerHTML = countries
    .map(country => `
      <div class="country-card" data-country="${country.name.common}">
        <img src="${country.flags.png}" alt="${country.name.common} flag">
        <div class="country-info">
          <h2>${country.name.common}</h2>
          <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> ${country.region}</p>
          <p><strong>Capital:</strong> ${country.capital?.[0] || 'N/A'}</p>
        </div>
      </div>
    `)
    .join('');
}

// Search functionality
function handleSearch() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  if (!searchTerm) {
    displayCountries(allCountries);
    return;
  }
  
  const searchedCountries = allCountries.filter(country => 
    country.name.common.toLowerCase().includes(searchTerm)
  );
  displayCountries(searchedCountries);
}

// Filter by region
function filterCountries() {
  const region = regionFilter.value;
  if (!region) {
    displayCountries(allCountries);
    return;
  }
  
  const filtered = allCountries.filter(country => 
    country.region.toLowerCase() === region
  );
  displayCountries(filtered);
}

// Loading state
function showLoading() {
  loadingSpinner.classList.remove('hidden');
  countriesContainer.classList.add('hidden');
}

function hideLoading() {
  loadingSpinner.classList.add('hidden');
  countriesContainer.classList.remove('hidden');
}
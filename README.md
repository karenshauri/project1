# 🌍 Country Explorer

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://yourusername.github.io/country-explorer)

A responsive web app that fetches and displays country data from the REST Countries API. Search, filter, and explore details like population, capital, and region—all in a clean, dark-mode-friendly interface.

![Screenshot](https://i.imgur.com/placeholder.png)  
*(Replace with actual screenshot link)*

## ✨ Features

- **Instant Search**: Find countries by name in real-time
- **Region Filtering**: Filter by continent (Africa, Americas, Asia, Europe, Oceania)
- **Dark/Light Mode**: Toggle with persistent user preference
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Loading States**: Smooth UX during API fetches
- **Clean UI**: Card-based layout with hover animations

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+)
- **API**: [REST Countries](https://restcountries.com/) (free, no auth)
- **Icons**: [Font Awesome](https://fontawesome.com/)
- **Hosting**: GitHub Pages

## 🚀 Quick Start

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/country-explorer.git

2. **Open in browser**

bash
cd country-explorer && open index.html
🔧 How It Works
Fetches data asynchronously from REST Countries API

Dynamically renders country cards with:

Flags

Population (formatted with commas)

Region and capital

User interactions:

Search by country name

Filter by region dropdown

Toggle dark/light mode

📂 Project Structure
text
country-explorer/
├── index.html          # Single-page app structure
├── style.css           # Responsive styles with CSS variables
├── script.js           # API fetching and DOM manipulation
└── README.md           # You're here!
🌟 Why This Project?
Demonstrates core skills: Async/await, DOM manipulation, API integration

Portfolio-ready: Clean UI with real-world functionality

Scalable: Easy to add features like:

Country details modal

LocalStorage favorites

Map integration (Leaflet.js)

📜 License
MIT © Karen Shauri
Data provided by REST Countries API

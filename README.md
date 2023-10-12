# IMOVIEZ

This is a React-based movie streaming application that allows users to browse and see movies deatils and ratings various genres. The app is designed to provide a user-friendly interface for discovering and enjoying a wide range of movies.

## Full screen
![App Screenshot](/public/fullscreen.png)

## Mobile screens
![mobile](/public/mobile.png)


## Demo

You can try out the app by visiting the following link:

[Live Demo](https://imoviez.vercel.app/)

The demo version of the app allows you to explore its features and functionality.

**Note:** The demo may not always reflect the latest changes from the repository, as it is a static snapshot of the app at a specific point in time.

## Features

- Browse from different genres.
- Detailed movie information, including title, description, and release date.
- Responsive design for various screen sizes.
- Integration with external APIs to fetch movie data.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your computer.
- An internet connection to fetch movie data from external APIs.

### Installation

1. Clone the repository to your local machine:

   git clone https://github.com/OK-Ro/imoviez

## Backend

2. Clone the repository to your local machine:

   git clone https://github.com/OK-Ro/movie-backend

### Code structure


public
└── index.html
src
└── Categories
| └── ActionMovies.js
| └── AdventureMovies.js
| └── AnimationMovies.js
| └── CrimeMovies.css
|  
 └── components
| └── Action.jsx
| └── Adventure.jsx
| └── Animation.jsx
| └── Category.jsx
| └── Comedy.jsx
| └── Drama.jsx  
 | └── Horror.jsx
| └── Latest.jsx
| └── nav.jsx
| └── Popular.jsx
| └── Romance.jsx
| └── SerchBar.jsx
| └── SearchedResults.jsx
| └── SiFi.jsx
| └── Sports.jsx
| └── Trending.jsx
| └── Video.jsx
└── context
| └── movieContext.jsx
└──Hooks
└── CircularLoader.jsx
└── Details.jsx
└── useMovies.jsx
└──Pages
└──Home.jsx
└──PagesRoutes.jsx
└──Watchlist.js
└── App.css
└── App.js
└── index.js


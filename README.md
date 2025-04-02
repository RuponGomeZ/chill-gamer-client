# Chill Gamer

Welcome to Chill Gamer, a platform where users can explore, review, and share their favorite games. This website allows users to filter and sort game reviews, add their own reviews, and maintain a personalized watchlist.

## Live Site Links

- Client Site: [Chill Gamer](https://chill-gamer-c45cc.web.app/)
- Server Site: [Game Review Server](http://localhost:5000/)

## Features

- **Game Reviews by Users:**
  - Users can browse reviews submitted by other gamers.
  - Reviews include game titles, genres, ratings, publishing years, and user comments.
- **Filter and Sort Options:**
  - Filter reviews by genre (e.g., Action, RPG, Adventure, Shooter, Strategy).
  - Sort reviews by rating or publishing year for better navigation.
- **Add Your Own Reviews:**
  - Logged-in users can submit their own game reviews, including images, descriptions, and ratings.
- **Personalized Watchlist:**
  - Users can add games to their watchlist for quick access to their favorite reviews.
- **Responsive Design:**
  - The website is fully responsive, ensuring a seamless experience across all devices.

## Technologies Used

- **Client-Side:**
  - React.js: For building the user interface.
  - React Router: For navigation and routing.
  - Tailwind CSS: For styling the application.
  - React Simple Typewriter: For dynamic text animations.
- **Server-Side:**
  - Node.js: For building the backend server.
  - Express.js: For handling API requests.
  - MongoDB: For storing game reviews and user data.
  - Vercel: For hosting the server.

## GitHub Repositories

- Client Site Repository: [Chill Gamer Client](https://github.com/RuponGomeZ/chill-gamer-client.git)
- Server Site Repository: [Game Review Server](https://github.com/RuponGomeZ/game-review-server-site.git)

## How to Run Locally

### Prerequisites:

- Node.js installed on your machine.
- MongoDB database connection string.

### Steps:

1.  **Clone the repositories:**
    ```bash
    git clone https://github.com/RuponGomeZ/chill-gamer-client.git
    git clone https://github.com/RuponGomeZ/game-review-server-site.git
    ```
2.  **Navigate to the client and server directories and install dependencies:**
    ```bash
    cd chill-gamer-client
    npm install
    cd ../game-review-server-site
    npm install
    ```
3.  **Set up environment variables:**

    - For the client, create a `.env` file in the `chill-gamer-client` directory and add:
      ```
      REACT_APP_API_URL=http://localhost:5000/
      ```
    - For the server, create a `.env` file in the `game-review-server-site` directory and add your MongoDB connection string:
      ```
      MONGODB_URI=your_mongodb_connection_string
      ```

4.  **Start the development servers:**

    - Client:
      ```bash
      cd chill-gamer-client
      npm start
      ```
    - Server:
      ```bash
      cd game-review-server-site
      npm start
      ```

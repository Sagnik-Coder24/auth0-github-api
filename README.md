# GitHub Searcher

A simple web application built with React and Vite that allows users to search for GitHub profiles by username or name. The app uses GitHub API for fetching profile data and Auth0 for authentication. Bootstrap is used for styling the interface.

## Features

- Search GitHub profiles by username or name
- View profile details including repositories, followers, and following
- Secure authentication with Auth0
- Responsive design with Bootstrap

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sagnik-Coder24/auth0-github-api.git
   cd auth0-github-api
   ```

2. Install dependencies:

   ```bash
   yarn install
   # or
   npm install
   ```

### Configuration

1. Set up your Auth0 credentials:

   - Create a `.env` file in the root directory and add the following environment variables:

   ```env
   VITE_AUTH0_DOMAIN=dev-your_auth0_domain
   VITE_AUTH0_CLIENT_ID=your_auth0_client_id
   ```

### Running the App

1. Start the development server:

   ```bash
   yarn dev
   # or
   npm run dev
   ```

2. Open your browser and go to `http://localhost:5173` to see the app in action.

### Deployment

1. Build the app for production:

   ```bash
   yarn build
   # or
   npm run build
   ```

2. Serve the production build:

   ```bash
   yarn serve
   # or
   npm run serve
   ```

## Usage

1. Sign in using your Auth0 account.
2. Enter a GitHub username or name in the search bar.
3. View the profile details, including repositories, followers, and following.

## Contributions

We welcome contributions from the community! Feel free to open issues and pull requests to suggest improvements, add new features, or fix bugs. Here’s how you can contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

### Suggestions & Feedback

If you have suggestions or feedback on how to improve this project, feel free to post them on our [GitHub Issues](https://github.com/Sagnik-Coder24/auth0-github-api/issues) page. We love hearing your ideas and collaborating with the community!

## Built With

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Auth0](https://auth0.com/)
- [GitHub API](https://developer.github.com/v3/)
- [Bootstrap](https://getbootstrap.com/)

## License

This project does not have any license.

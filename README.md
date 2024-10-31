# Fullstack Assignment

This is a fullstack application using Express.js for the backend, and React with Vite for the frontend. It uses TypeScript, Tailwind CSS, tRPC for API calls, and shadcn/ui for components.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- Yarn package manager

## Getting Started

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:

   ```
   yarn install
   ```

3. Start the development servers:

   ```
   yarn dev
   ```

   This will start both the backend server (default: http://localhost:3000) and the frontend development server (default: http://localhost:5173).

4. Open your browser and navigate to `http://localhost:5173` to see the application running.

## Project Structure

- `/backend`: Contains the Express.js server and tRPC API
- `/frontend`: Contains the React application built with Vite

## Available Scripts

In the project directory, you can run:

- `yarn dev`: Runs both the backend and frontend in development mode
- `yarn build`: Builds both the backend and frontend for production
- `yarn start`: Starts the production server (run `yarn build` first)

## Technologies Used

- Backend:

  - Express.js
  - TypeScript
  - tRPC

- Frontend:
  - React
  - Vite
  - TypeScript
  - Tailwind CSS
  - shadcn/ui

## Assignment Requirements

This assignment involves creating a full-stack application that showcases ad templates. The project combines a backend built with Express.js and tRPC, and a frontend developed using React, Vite, and shadcn/ui components.
The main goal is to replicate a provided Figma design, implementing key features such as displaying ad templates in a grid layout, category filtering, and a responsive sidebar.

Key objectives include:

- Developing a tRPC API to serve ad template and category data
- Building a React frontend that closely matches the Figma design
- Integrating backend data with the frontend UI
- Utilizing shadcn/ui components and Tailwind CSS for styling

This task will test your ability to work with modern web technologies, implement design specifications, and create a seamless full-stack application.

1. Backend (Express.js with tRPC):

   - Create a tRPC API with the following endpoints:
     - Get all ad templates
     - Get ad template categories
   - The data structure should match the UI requirements (templates, categories, etc.)

2. Frontend (React with shadcn/ui):

   - Reproduce the UI shown in the [provided Figma design](https://www.figma.com/design/zCEA5wYd8L4hf4VWG5jlKb/Case-Study?node-id=0-1&node-type=canvas&t=AadCWZfYYMdtglpN-0)
   - Use shadcn/ui components to build the interface
   - Implement the following features:
     - Display ad templates in a grid layout
     - Show categories as tabs at the top of the page
     - Create a fixed sidebar with navigation items

3. Data Integration:

   - Fetch ad templates and categories from your tRPC API
   - Display the fetched data in the UI

4. Styling:
   - Use Tailwind CSS for custom styling where needed
   - Ensure the design closely matches the provided Figma mockup

## UI Components to Implement

- Header with user profile and navigation tabs
- Sidebar with navigation items
- Main content area with:
  - Category tabs
  - Ad template grid
- Individual ad template cards

## Evaluation Criteria

- Accuracy of UI implementation compared to the Figma design
- Proper use of shadcn/ui components
- Correct implementation of tRPC API and data fetching
- Code quality and organization
- Responsive design (if time allows)

## Submission

- Push your code to a private GitHub repository and share it with daniele@creativeos.com
- Provide clear instructions in the README on how to run your application, if any additional steps are required
- Include any notes or assumptions you made during development

## Time Limit

You have 48 hours to complete this assignment. Quality is preferred over quantity, so focus on implementing the core features well rather than trying to complete everything if time is short.

## Questions

If you have any questions or need clarifications, please contact Daniele at daniele@creativeos.com.

Good luck!

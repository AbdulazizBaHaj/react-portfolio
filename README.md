# Interactive Resume Portfolio

A dynamic and visually appealing interactive resume and portfolio for a front-end developer, built with React, TypeScript, and Tailwind CSS. It features a dark/light mode toggle and an animated, dithered background effect for a unique aesthetic.

<!-- Add a screenshot or GIF here -->
<!-- ![Demo GIF](link-to-your-demo.gif) -->

---

## ✨ Features

- **Responsive Design**: Looks great on desktops, tablets, and mobile devices.
- **Dark/Light Mode**: Easily switch between a sleek dark theme and a clean light theme.
- **Interactive UI**: Collapsible sections for a clean and focused view of work experience.
- **Animated Background**: A captivating dithering animation powered by `@paper-design/shaders-react`.
- **Modern Tech Stack**: Built with React 18, TypeScript for type safety, and styled with Tailwind CSS for rapid UI development.
- **Component-Based**: Clean, reusable components for easy maintenance and scalability.
- **Easy to Customize**: Resume data is centralized in a single file, making it simple to update with your own information.

---

## 🛠️ Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **@paper-design/shaders-react**: A library for creating shader-based visual effects in React.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/en/) and a package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/AbdulazizBaHaj/react-portfolio.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd interactive-resume
    ```
3.  **Install the dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

To start the development server and view the application in your browser, run:

```bash
npm run start
# or
yarn start
```

The application will be available at `http://localhost:3000` (or another port if 3000 is in use).

---

## 🔧 How to Customize

Personalizing this resume with your own details is straightforward.

1.  **Update Resume Data**:
    Open the `constants.ts` file. You will find a `resumeData` object. Modify the values for `name`, `title`, `contact`, `summary`, `experience`, `education`, `skills`, and `awards` with your own information.

2.  **Change Profile Picture**:
    In the `App.tsx` file, locate the `<img>` tag inside the `<header>` section and replace the `src` attribute with a URL to your own profile picture.

    ```jsx
    <img
      src="https://your-image-url.com/profile.jpg" // <-- Change this URL
      alt="Your Name"
      className="w-full h-full object-cover"
    />
    ```

---

## 📁 Project Structure

The project is organized into several key directories and files:

```
/
├── public/
│   └── ...
├── src/
│   ├── components/
│   │   └── IconComponents.tsx   # All SVG icons as React components
│   ├── App.tsx                  # Main application component and layout
│   ├── constants.ts             # Centralized resume data
│   ├── index.html               # Main HTML file for the app
│   ├── index.tsx                # React entry point
│   └── types.ts                 # TypeScript type definitions
├── package.json
└── README.md
```

- `src/components`: Contains reusable UI components, such as the icons.
- `src/App.tsx`: The main component that assembles the resume layout.
- `src/constants.ts`: The single source of truth for all the text and data displayed on the resume.
- `src/types.ts`: Defines the TypeScript interfaces for the data structures used in the application.
- `src/index.tsx`: The entry point where the React application is mounted to the DOM.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/AbdulazizBaHaj/react-portfolio/issues).

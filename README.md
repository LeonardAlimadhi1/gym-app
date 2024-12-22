# GYM APP

This project contains the source code for gym-app. The purpose of this project is to create a gym page that provides a vital online presence, providing key information on memberships, facilities, and classes. It serves as a powerful marketing tool, enhancing brand visibility, engaging current members, and attracting new ones. With convenient access to details and updates, it fosters customer loyalty and drives business growth in the competitive fitness industry.

## Overview

This project is built in ReactJS and uses Tailwind, ESLint, Prettier and TypeScript configuration. In the local dev environment,
it is served through Vite , which provides a minimal setup to get React working.


Key Features:

Utilizes the React library for building efficient and reusable user interfaces.

Integrated Tailwind CSS for rapid UI development, enabling the creation of sleek, responsive designs.

Designs compatible for both desktop and mobile.

Implemented TypeScript for enhanced code quality, type safety, and improved developer productivity.

Utilizes Git for version control, allowing for efficient collaboration, code management, and tracking of project changes.


## Getting Started

Clone the repository to your local machine.

Navigate to the project directory.

Install dependencies: "npm install".

Start the development server: "npm run dev".

Open your browser and navigate to [http://localhost:5173] to view the application.

You can find a live preview of the webpage online here :
[https://gym-app-lalimadhi.netlify.app/].


## Project Structure


main.tsx: This file serves as the entry point for the application's main logic. It contains initialization code, configuration settings, or other logic needed to start the application.

src: This directory contains the source code of the React application. It includes mostly “tsx” files which stands for jsx and typescript syntax, along with any other assets such as images.

assets: This directory contains static assets such as images, fonts, icons, or other resources used in the application.

shared: This directory contains shared components, utilities, or other code that is used across multiple parts of the application.

index.css: Provides the global styles for the project. Currently, it only contains the Tailwind CSS styles, but it can be used to add any other global styles that may be needed.

scenes: This directory contains multiple components that are used throughout the page. Each component has a folder that contains an index.tsx file that is exported to be used in the App.tsx file.

App.tsx: This file represents the root component of the React application. It contains the main structure of the application.

hooks: This directory contains a custom React hook “useMediaQuerry”. This custom hook checks if a certain media query condition is met. Currently used to see if the screen is wider than a certain width.

public: This directory contains static assets such as images. For the moment it doesn’t have a real use in the project.

The index.html file in this directory is the entry point for the React application and contains a root element where the React components are mounted.

tsconfig.node.json: This is a TypeScript configuration file specifically for Node.js environments. It defines compiler options and settings for TypeScript when compiling code for Node.js.

dist: This directory is commonly used to store the output of the build process. It typically contains the bundled and optimized JavaScript files, along with any other assets needed for deployment.

package.json: This file is the heart of a Node.js project and contains metadata about the project, including its dependencies, scripts for running tasks, and other project-specific configuration.


vite.config.ts: This file contains the configuration for Vite, the build tool used for the project. It specifies settings such as entry points, output paths, and other build-related configurations.

postcss.config.js: This is a configuration file for PostCSS, a tool used for transforming CSS with JavaScript plugins.In this case it is used to define tailwindcss as a plugin.

tailwind.config.js: This file contains the configuration for Tailwind CSS. Many color, images and themes have been defined here and used throughout the project.

node_modules: This directory contains all the dependencies installed for the project using npm. 

prettier.config.cjs: This file contains configuration options for Prettier, a code formatter used to enforce consistent code style across the project.

tsconfig.json: This is the main TypeScript configuration file for the project. It defines compiler options, paths, and other settings used when compiling TypeScript code.

vite-env.d.ts: This TypeScript declaration file is used to declare global variables or types for the Vite build tool. It allows for type checking and IntelliSense support within Vite configuration files or other parts of the project.

  



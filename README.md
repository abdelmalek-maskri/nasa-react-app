# NASA APOD React App

## Overview

The NASA APOD (Astronomy Picture of the Day) React App is a web application that displays the Astronomy Picture of the Day from NASA's API. It utilizes React for the frontend and provides a sidebar for additional information and a footer with navigation options.

## Live Demo

You can view the live application here: [my-nasa-apod.netlify.app](https://my-nasa-apod.netlify.app)

## Features

- **Fetch Data from NASA API**: Retrieves the Astronomy Picture of the Day using NASA's API.
- **Cache Data**: Stores data in local storage to avoid redundant API calls.
- **Responsive Layout**: Includes a sidebar and footer for a better user experience.
- **Modal Toggle**: Allows users to toggle a modal for additional details.

Set Up Environment Variables

Create a .env file in the root of your project and add your NASA API key:

  VITE_NASA_API_KEY=your_nasa_api_key_here

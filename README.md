# Weather App 🌤️

A clean, responsive weather app that shows current conditions, hourly temperatures and a 5-day forecast for any city in the world. Built with React, Vite and TypeScript.

<!-- Add a screenshot: save it in the repo (e.g. /public/screenshot.png) and uncomment the line below -->
<!-- ![Weather App screenshot](/public/screenshot.png) -->

## Features

- 📍 Weather for your current location
- 🔎 City search with live suggestions
- 🕘 Recent search history
- ⭐ Favorite cities for quick access
- 🌡️ Current temperature, feels-like, min/max, humidity and wind speed
- 📈 Hourly temperature chart
- 📅 5-day forecast
- 🌅 Sunrise, sunset, wind direction and pressure
- 🌗 Light and dark mode
- 📱 Fully responsive layout

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [TanStack Query](https://tanstack.com/query) for data fetching and caching
- [React Router](https://reactrouter.com/) for routing
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) for styling and components
- [Recharts](https://recharts.org/) for charts
- [date-fns](https://date-fns.org/) for date formatting
- [Sonner](https://sonner.emilkowal.ski/) for toast notifications
- [OpenWeatherMap API](https://openweathermap.org/api) for weather data

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/godslovealex/Weather-App-Tanstack-Query.git
cd Weather-App-Tanstack-Query
```

### 2. Install dependencies

```bash
npm install
```

### 3. Add your API key

Create a `.env` file in the project root and add your OpenWeatherMap API key:

```
VITE_OPENWEATHER_API_KEY=your_api_key_here
```

You can get a free key by signing up at [openweathermap.org](https://openweathermap.org/api).

### 4. Run the app

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Author

**Godslove Alex-Musa**

- GitHub: [github.com/godslovealex](https://github.com/godslovealex)
- LinkedIn: [linkedin.com/in/godslovealexmusa](https://linkedin.com/in/godslovealexmusa)

© 2026 Godslove Alex. All rights reserved.

# Customer Support Analytics Dashboard

A responsive support-ticket analytics dashboard built with React and Tailwind CSS. Tracks ticket volume, status breakdown, and response-time trends through live charts, search, and filtering.

**Live demo:** [PASTE YOUR VERCEL URL HERE]

## Features

- Real-time ticket list with search (by customer or subject) and status filtering
- Ticket detail panel with full conversation thread and key timestamps
- Summary metrics: total tickets, open tickets, average response time, resolved today
- Three data visualizations: status breakdown (donut), ticket volume over time (bar), average response time trend (line)
- Fully responsive: collapsible sidebar drawer on mobile, condensed table on small screens
- Loading skeleton and error state with retry, so failures are handled gracefully rather than showing a blank screen

## Tech Stack

- **React** (Vite)
- **Tailwind CSS v4** for styling, with a custom design token system (color palette, Space Grotesk + JetBrains Mono typography)
- **Recharts** for data visualization
- **lucide-react** for icons
- Static JSON data source, structured to mirror a real REST API response shape

## Screenshots

*(added Day 17)*

## Getting Started Locally

Clone the repo and install dependencies:

```bash
git clone https://github.com/Marvelo1g/support-analytics-dashboard.git
cd support-analytics-dashboard
npm install
npm run dev
```

The app will be available at **Live demo:** [support-analytics-dashboard.vercel.app](https://support-analytics-dashboard.vercel.app/)

## Project Structure


## Author

**Daji Owolabi Marvelous**
Portfolio: twitchkodhub001.vercel.app
GitHub: [github.com/Marvelo1g](https://github.com/Marvelo1g)
LinkedIn: [linkedin.com/in/daji-marvelous-a970a3239](https://linkedin.com/in/daji-marvelous-a970a3239)
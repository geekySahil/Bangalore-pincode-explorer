# Bangalore Pincode Explorer

A beginner-friendly full-stack prototype for searching Bangalore areas and pincodes. The backend reads from a local JSON file, and the frontend provides a clean React search interface with autocomplete suggestions.

## Tech Stack

- React
- Vite
- Tailwind CSS
- Axios
- Node.js
- Express.js
- JSON file storage

## Project Structure

```txt
bangalore-pincode-explorer/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── server/
│   ├── data/
│   │   └── pincodes.json
│   ├── routes/
│   │   └── pincodeRoutes.js
│   ├── controllers/
│   │   └── pincodeController.js
│   ├── server.js
│   └── package.json
└── README.md
```

## Setup

Install backend dependencies:

```bash
cd server
npm install
```

Install frontend dependencies:

```bash
cd ../client
npm install
```

## Run The App

Start the backend:

```bash
cd server
npm run dev
```

Start the frontend in a second terminal:

```bash
cd client
npm run dev
```

Open the frontend at:

```txt
http://localhost:5173
```

The API runs at:

```txt
http://localhost:5000
```

## API Endpoints

### Search by pincode

```txt
GET /api/pincode/:code
```

Example:

```txt
http://localhost:5000/api/pincode/560001
```

### Search by area

```txt
GET /api/area/:name
```

Example:

```txt
http://localhost:5000/api/area/indiranagar
```

### Suggestions

```txt
GET /api/suggest?q=indi
```

Example:

```txt
http://localhost:5000/api/suggest?q=indi
```

## Notes

- The prototype uses `server/data/pincodes.json` as its database.
- Area search is case-insensitive and returns all partial matches.
- Suggestions are unique, case-insensitive, and limited to 5 results.
- Numeric input is treated as a pincode search.

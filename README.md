# Full Stack Gallery

A full-stack image gallery application built with React, Vite, Express, MongoDB, and Mongoose. Users can browse images, filter them by genre, upload new images, and open a single image detail page for downloading.

## Features

- Browse all uploaded images on the home page
- Filter images by genre
- View a single image with its genre and download option
- Upload new images to the gallery
- Backend storage with MongoDB and static file serving for uploaded images

## Tech Stack

### Frontend

- React
- Vite
- React Router DOM

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- Multer
- CORS
- dotenv

## Project Structure

```text
full-stack-gallery/
├── client/              # React frontend
│   ├── src/             # Application pages and components
│   └── package.json     # Frontend scripts and dependencies
├── server/              # Express backend
│   ├── controllers/     # Route handlers
│   ├── middlewares/     # Upload middleware
│   ├── model/           # Mongoose models
│   ├── public/          # Uploaded image assets
│   └── index.js         # Server entry point
└── README.md            # Project documentation
```

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- npm installed
- MongoDB running locally or a MongoDB connection string available

## Environment Variables

Create a `.env` file inside the `server` folder with the following variables:

```env
PORT=server_port
MONGO_URI=your_mongodb_connection_string
IMG_DEST=server+image_folder_name
```

### Notes

- `PORT` is the Express server port.
- `MONGO_URI` is your MongoDB connection string.
- `IMG_DEST` is the public URL prefix used to expose uploaded image files.

## Installation

1. Clone the repository.
2. Install frontend dependencies:

```bash
cd client
npm install
```

3. Install backend dependencies:

```bash
cd ../server
npm install
```

## Running the Application

### Start the backend

```bash
cd server
npm run dev
```

### Start the frontend

```bash
cd client
npm run dev
```

## API Endpoints

### Images

- `GET /display_images` — fetch all images
- `GET /display_images/:id` — fetch a single image by ID
- `GET /display_images/filter` — filter images by genre query parameter

### Upload

- `POST /upload_image` — upload an image and store it in MongoDB

## Example Usage

### Filter by genre

```bash
GET /display_images/filter?genre=landscape
```

### Upload an image

Use a form-data request with:

- `genre` as the image category
- `file` as the image file

## Development Notes

- The client expects the backend URL through the `VITE_URL` environment variable in the frontend.
- The upload flow currently uses a `FormData` request to send image files and genre metadata.
- The backend serves uploaded images from the `server/public` directory.

## License

This project is provided for educational/demo purposes.

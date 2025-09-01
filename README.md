# web-component-micro-frontend

## Description

This is a helloworld web component nodejs/vite/express web app. When run, serves as a micro frontend that cab be embedded in an external [main app](https://github.com/mapteb/main-app-with-micro-frontend?tab=readme-ov-file).

## Usage

When built and deployed, this app listens for a custom event 'my-custom-event' and echoes the event.detail.message when it receives the event. 

When built, the dist folder will have the js that an external [main app](https://github.com/mapteb/main-app-with-micro-frontend?tab=readme-ov-file) can include as a micro frontend.

## Build and Run

npm install

npm run build  << the dist folder should have a new exported my-widget.iife.js file >>

npm run dev << accessing http://localhost:8081 should display: "my-widget micro-frontend waiting for my-custom-event: " >>





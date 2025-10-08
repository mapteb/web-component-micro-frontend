# web-component-micro-frontend

## Description

This is a helloworld style nodejs/vite web component app. When built and run, serves a micro frontend as a static resource that cab be embedded in an external web app like [main app](https://github.com/mapteb/main-app-with-micro-frontend). A demo of an external main app embedding this web component can be viewed [here](https://mapteb.github.io/main-app-with-micro-frontend/).

## Usage

When built and deployed, this app listens for a custom event 'my-custom-event' and echoes the event.detail.message when it receives the event. 

When built, the dist folder will have the js that an external [main app](https://github.com/mapteb/main-app-with-micro-frontend?tab=readme-ov-file) can include as a micro frontend.

## Build and Run

npm install

npm run build  << the dist folder should have a new exported my-widget.iife.js file >>

npm run dev << accessing http://localhost:8081 should display: "my-widget micro-frontend waiting for my-custom-event: " >>





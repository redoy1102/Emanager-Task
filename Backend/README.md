# Express Mongoose Server

This project is an Express server application that uses Mongoose to interact with a MongoDB database. It is designed to handle orders and customer information.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Models](#models)
- [Error Handling](#error-handling)
- [Environment Variables](#environment-variables)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd express-mongoose-server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file based on the `.env.example` template and configure your environment variables.

## Usage

To start the server, run the following command:
```
npm start
```
The server will listen on the specified port (default is 3000).

## API Endpoints

- **POST /orders**: Create a new order.
- **GET /orders**: Retrieve all orders.

## Models

### Order
The Order model includes the following fields:
- `productId`: ID of the product.
- `customerId`: ID of the customer.
- `quantity`: Quantity of the product ordered.
- `totalPrice`: Total price of the order.

### Customer
The Customer model includes the following fields:
- `name`: Name of the customer.
- `whatsapp`: WhatsApp number of the customer.
- `email`: Email address of the customer.

## Error Handling

The application includes middleware for handling errors. Any errors that occur during request processing will be captured and an appropriate response will be sent to the client.

## Environment Variables

The project uses environment variables for configuration. Make sure to set the following variables in your `.env` file:
- `MONGODB_URI`: The connection string for your MongoDB database.
- `PORT`: The port on which the server will run (optional, defaults to 3000).
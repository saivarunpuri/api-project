
# API Documentation for User Management API

## 1. Overview

This API is designed for user management functionalities, including user signup, login, user retrieval, updating user details, and deleting users. The API also includes authentication using JWT (JSON Web Tokens) for secure access to protected routes.

## 2. Base URL

All endpoints in this API are prefixed with `/api`. The base URL for the API is:

```
https://your-api-domain.com/api
```

## 3. Authentication

- **JWT Authentication** is used to secure sensitive routes.
- Users must include a **Bearer token** in the `Authorization` header to access protected endpoints.
- Example header for authentication:
  ```
  Authorization: Bearer <your-jwt-token>
  ```

## 4. Endpoints

### 4.1. POST /api/users (Sign Up)

**Description**: Registers a new user.

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "strongpassword123",
  "phone": "1234567890"
}
```

**Response**:
- **201 Created**: On successful user creation
  ```json
  {
    "message": "User created successfully",
    "user": {
      "name": "John Doe",
      "email": "johndoe@example.com",
      "phone": "1234567890"
    },
    "token": "<JWT_TOKEN>"
  }
  ```
- **400 Bad Request**: If required fields are missing or invalid.
  ```json
  {
    "error": "All fields are required"
  }
  ```
- **400 Bad Request**: If the user already exists.
  ```json
  {
    "error": "User already exists"
  }
  ```

### 4.2. POST /api/login (Login)

**Description**: Logs in a user and generates a JWT token.

**Request Body**:
```json
{
  "email": "johndoe@example.com",
  "password": "strongpassword123"
}
```

**Response**:
- **200 OK**: On successful login
  ```json
  {
    "message": "Login Successful",
    "token": "<JWT_TOKEN>"
  }
  ```
- **401 Unauthorized**: If credentials are incorrect.
  ```json
  {
    "error": "Invalid Credentials"
  }
  ```

### 4.3. GET /api/users (Get All Users)

**Description**: Retrieves all users (protected route, requires authentication).

**Response**:
- **200 OK**: On successful retrieval
  ```json
  [
    {
      "_id": "user_id_1",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "phone": "1234567890"
    },
    {
      "_id": "user_id_2",
      "name": "Jane Doe",
      "email": "janedoe@example.com",
      "phone": "0987654321"
    }
  ]
  ```
- **401 Unauthorized**: If the user is not authenticated.
  ```json
  {
    "error": "Access denied. No token provided."
  }
  ```

### 4.4. GET /api/users/:id (Get User by ID)

**Description**: Retrieves a single user by ID (protected route, requires authentication).

**Response**:
- **200 OK**: On successful retrieval
  ```json
  {
    "_id": "user_id",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "1234567890"
  }
  ```
- **404 Not Found**: If the user does not exist.
  ```json
  {
    "error": "User not found"
  }
  ```
- **401 Unauthorized**: If the user is not authenticated.
  ```json
  {
    "error": "Access denied. No token provided."
  }
  ```

### 4.5. PUT /api/users/:id (Update User)

**Description**: Updates a user's information (protected route, requires authentication).

**Request Body**:
```json
{
  "name": "John Doe Updated",
  "phone": "9876543210"
}
```

**Response**:
- **200 OK**: On successful update
  ```json
  {
    "_id": "user_id",
    "name": "John Doe Updated",
    "email": "johndoe@example.com",
    "phone": "9876543210"
  }
  ```
- **404 Not Found**: If the user does not exist.
  ```json
  {
    "error": "User not found"
  }
  ```
- **401 Unauthorized**: If the user is not authenticated.
  ```json
  {
    "error": "Access denied. No token provided."
  }
  ```

### 4.6. DELETE /api/users/:id (Delete User)

**Description**: Deletes a user (protected route, requires authentication).

**Response**:
- **200 OK**: On successful deletion
  ```json
  {
    "message": "User deleted successfully"
  }
  ```
- **404 Not Found**: If the user does not exist.
  ```json
  {
    "error": "User not found"
  }
  ```
- **401 Unauthorized**: If the user is not authenticated.
  ```json
  {
    "error": "Access denied. No token provided."
  }
  ```

## 5. Security Audit

- **SQL Injection**: No SQL injection vulnerabilities have been identified. All database queries are parameterized using Mongoose.
- **Cross-site Scripting (XSS)**: User inputs are not reflected in the response without proper sanitization. No XSS vulnerabilities have been identified.
- **Insecure Authentication Mechanisms**: The API uses JWTs for authentication, which is a secure method as long as the tokens are signed and not exposed to unauthorized users. Token expiration and secret management should be handled securely.
- **HTTPS**: The API should be deployed over HTTPS to ensure secure communication.
- **Secure Headers**: Ensure the server includes appropriate security headers such as `X-Content-Type-Options`, `Strict-Transport-Security`, `Content-Security-Policy`, etc.

## 6. Conclusion

This API is designed with security and efficiency in mind. It supports user management operations with proper authentication and validation. A basic security audit has been performed, and no critical vulnerabilities have been found.

For any queries or issues, please refer to the README file or contact the repository owner.

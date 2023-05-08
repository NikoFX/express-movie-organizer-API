Overview
This API application provides two endpoints for creating and retrieving movie collections. One of the endpoint allows users to create new collections, while the other endpoint allows users to retrieve a specific collection by the ID that received with POST


Usage
POST "/collection"
This endpoint allows users to create new collections. To create a new collection, send a POST request to "/collection" with a JSON body containing the collection data. The collection data should include a title and an array of movie imdbIDs.

Example request body:

{
 "title": "My collection",
 "movies": [
 "t3248924",
 "t4450678",
 "t7709609"
 ]
}

GET "/collection/:id"
This endpoint allows users to retrieve a specific collection by received ID. To retrieve a collection, send a GET request to "collection/:id", where :id is the ID of the collection you want to retrieve.

Example response:

{
    "id": 51,
    "title": "My collection",
    "movie": [
        "tt0068646",
        "tt0098019"
    ]
}


Getting Started
To use this API application, you will need to have Node.js and npm installed on your machine. Once you have those installed, you can run the following commands to get started:

The server will be running on http://localhost:3000.

Authentication
This API application does not require authentication.

Error Handling
If there is an error with a request, the API will return an error response with an appropriate status code and error message. For example, if you send an invalid JSON body with a POST request, you will receive a 400 Bad Request response with an error message.

Support
If you have any questions or issues with this API application, please contact [insert contact information here].

Contributing
If you would like to contribute to the development of this API application, please follow these guidelines:

[insert contribution guidelines here]

License
This API application is licensed under the [insert license here].

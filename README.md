# Overview
This API application provides two endpoints for creating and retrieving movie collections. One of the endpoint allows users to create new collections, while the other endpoint allows users to retrieve a specific collection by the ID that received with POST


## Usage
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


## Getting Started
To use this API application, you will need to have Node.js and npm installed on your machine. Once you have those installed, you can run the following commands to get started:

express
mysql
cors
dotenv
body-parser

## Authentication
This API application does not require authentication.

### License
This API application is licensed under the [insert license here].

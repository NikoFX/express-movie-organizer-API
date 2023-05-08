# Overview
This API application provides two endpoints for creating and retrieving movie collections. One of the endpoint allows users to create new collections, while the other endpoint allows users to retrieve a specific collection by the ID that received with POST

## Tools
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)




## Development setup
To use this API application, you will need to have Node.js and npm installed on your machine. Once you have those installed, you can run the following commands to get started:

```
npm install nodemon express mysql cors dotenv body-parser
```

POST "/collection"
This endpoint allows users to create new collections. To create a new collection, send a POST request to "/collection" with a JSON body containing the collection data. The collection data should include a title and an array of movie imdbIDs.

Example request body:

```
{
 "title": "My collection",
 "movies": [
 "t3248924",
 "t4450678",
 "t7709609"
 ]
}
```

GET "/collection/:id"
This endpoint allows users to retrieve a specific collection by received ID. To retrieve a collection, send a GET request to "collection/:id", where :id is the ID of the collection you want to retrieve.

Example response:

```
{
    "id": 51,
    "title": "My collection",
    "movie": [
        "tt0068646",
        "tt0098019"
    ]
}
```

## Meta

 Nijat Gurbanov

- Github: [github.com/NikoFX](https://github.com/NikoFX)
- Twitter: [Nijat Gurbanov](https://twitter.com/)
- Linkedin: [linkedin.com/in/nijat-gurbanov-dev](https://www.linkedin.com/in/nijat-gurbanov-dev/)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

app.use(bodyParser.json())

var pool = mysql.createPool({
    connectionLimit: 100,
    waitForConnections: true,
    queueLimit: 0,
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    debug: true,
    wait_timeout: 28800,
    connect_timeout: 10
});

pool.getConnection(function (err, connection) {
    if (err) throw err;


    app.post('/collection', (req, res) => {
        const b = JSON.stringify(req.body.movies)
        connection.query(`INSERT INTO collection (title,movie) VALUES ('${req.body.title}', '${b}')`, (err, rows) => {
            if (err) throw res.status(404).send(err)
            connection.query(`SELECT * FROM collection ORDER BY id DESC LIMIT 1`, (err, rows) => {
                const movieList = JSON.parse(rows[0].movie)
                res.json({
                    title: rows[0].title,
                    movie: movieList
                })
            })
            connection.release()
        })
    })

    app.get('/collection/:id', cors(), (req, res) => {
        const id = Number(req.params.id)
        connection.query(`SELECT * from collection where id=${id}`, (err, rows) => {
            if (err) throw res.status(404).send(err);
            if (rows.length) {
                const movieList = JSON.parse(rows[0].movie)
                res.json({
                    title: rows[0].title,
                    movie: movieList
                })
            } else {
                res.status(404).send("id not found")
            }
            connection.release()
        })
    })
})

app.listen(8080, () => {
    console.log('server is running');
})

const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

app.use(bodyParser.json())
const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))

const connection = mysql.createConnection({
    host: process.env.HOST,
    port: process.env.PORT,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
});

connection.connect(err => {
    if (err) {
        return err
    }
})


app.post('/collection', (req, res) => {
    const b = JSON.stringify(req.body.movies)
    connection.query(`INSERT INTO collection (title,movie) VALUES ('${req.body.title}', '${b}')`, (err, rows) => {
        if (err) throw res.status(404).send(err)
        connection.query(`SELECT * FROM collection ORDER BY id DESC LIMIT 1`, (err, lrows) => {
            const movieList = JSON.parse(lrows[0].movie)
            res.json({
                id: lrows[0].id,
                title: lrows[0].title,
                movie: movieList
            })
        })
    })
})

app.get('/collection/:id', (req, res) => {
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
    })
})

app.listen(8080, () => {
    console.log('server is running');
})

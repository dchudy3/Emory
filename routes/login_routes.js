/**
 * Created by Albert on 11/10/17.
 */

const express = require('express')
const bodyParser = require('body-parser')
const store = require('../store')
const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())

app.post('/createUser', (req, res) => {
    store.createUser({ // add other user from registration info needed - refer to mysql schema
        username: req.body.username,
        password: req.body.password,
        emailAddress: req.body.emailAddress
    })
    .then(() => res.sendStatus(200))
})

app.post('/login', (req, res) => {
    store.authenticate({
        username: req.body.username,
        password: req.body.password
    })
    .then(({ success }) => {
        if (success) res.sendStatus(200)
        else res.sendStatus(401)
    })
})

app.listen(7555, () => {
    console.log('Server running on http://localhost:7555')
})
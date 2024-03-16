let express = require("express")
let app = express()
let users = require('./model/dataModel')
let cors = require('cors')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
let bcrypt = require('bcrypt')
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// });



app.post('/signup', async (req, res) => {
    let user = req.body
    let email = await users.findOne({ email: user.email })
    if (email) {
        res.send({error: "user jinda hai"})
    }
    else {
        user.password = await bcrypt.hash(user.password, 10)
        let newUser = new users({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            password: user.password
        })
        await newUser.save()
        res.send({com:'user created'})

    }
})


app.listen(4000, () => {
    console.log('helo')
})

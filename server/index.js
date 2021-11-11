const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const path = require('path')
const exphbs = require('express-handlebars')
const todoRoutes = require('./routes/todos')
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('./config/dgmme.key'),
    cert: fs.readFileSync('./config/dgmme.crt'),
    rejectUnauthorized: false,
    requestCert: true,
    agent: false
};

const PORT = process.env.PORT || 443

const app = express()
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todoRoutes)

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })

    https.createServer(options, app)
        .listen(PORT, () => {
          console.log(`Server is running on port ${PORT}    -----------------------------------------------------------   ok`)
        })
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}

start()

// import express from 'express'
// import cors from "cors"
// import cookieParser from "cookie-parser"

// const app = express()

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))

// app.use(express.json({limit: "16kb"}))
// app.use(express.urlencoded({extended: true, limit: "16kb"}))
// app.use(express.static("public"))
// app.use(cookieParser())


// import userRouter from './routes/user.routes.js'


// app.use("/api/v1/users", userRouter)

// export {app}

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('hello world')
  })

  app.get('/', (req, res) => {
    res.send('hello world')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
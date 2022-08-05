import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv/config'
const app = express()

app.listen(process.env.PORT, () =>
  console.log(`Server running on ${process.env.LOCALHOST}:${process.env.PORT}`)
)

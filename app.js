import express from 'express'
import cors from "cors"
import "dotenv/config"

const app = express()

app.use(cors())

const port = process.env.PORT || 3000;
const work = process.env.WORK || "NOT WORK"
app.get('/', (req, res) => {
    res.send('ISD WORKING V1.0.0')
})

app.get('/api', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => {
    if(work == "NOT WORK"){
        console.log("NOT WORK")
        console.log(`Server is running on port ${port}`)
    } else {
        console.log("WORKING")
        console.log(`Server is running on port ${port}`)
    }
})
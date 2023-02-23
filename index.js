const express = require("express");
const cors = require("cors")
const labelRouter = require('./roots/label.routes')
const postRouter = require('./roots/post.routes')
const PORT = process.env.PORT || 8080;
const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', labelRouter)
app.use('/api', postRouter)




app.get('/', (req,res) => {
    res.send("it's works")
    
})
app.listen(PORT, () => console.log(`server started on port ${PORT}`))
const express = require('express');
const uploadRoute = require('./routes/upload');
var cors = require('cors')

const app = express()
app.use(cors())

const port = process.env.PORT || 3000

app.use(uploadRoute);

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

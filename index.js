const express = require('express');
require('./services/passport');


const app = express();

require('./routes/authRoutes')(app);

app.get('/', (req, res) => res.send("Hello"))

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info('Server is running on port ', port);
})

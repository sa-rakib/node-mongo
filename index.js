const express = require('express')

const app = express()

// const routeCall = (req, res,) => res.send('Thank you so much!')


// function routeCall(req, res,) {
//     res.send('Thank you so much!')
// }

app.get('/',(req, res,) => res.send('I know how to open node......yuy!'))
app.listen(4000, () => console.log('listening on the port 4000'))
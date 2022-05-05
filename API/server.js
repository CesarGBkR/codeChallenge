const expres = require('express')

const app = expres()
app.use(expres.json())
const port = 3000

app.get('/v1/students', (res, req) => {

})

app.get('/v1/students/email:filtro', (res, req) => {

})

app.get('/v1/students/credits:filtrado', (res, req) => {

})
import express, { response } from 'express';

//Create web application to handle API
const app = express();

/*
    Allows GET request to /test, passes what will hapen with that request.
    Typically pass a function already defined, you don't define in the call back as shown below.
    Express functions take two parameters (request, response)
    Always send back a response. Don't just console.log an error.
*/
app.get('/test', (request, response) => {
    response.send("It's all good, man");
});

app.get('/', (request, response) => {
    response.send('Welcome to our first API.')
});

app.get('/error', (request, response) => {
    response
    .status(400)
    .send({
        message: 'Something went wrong',
        success: false
    })
})

app.listen(3030, () => console.log('Listening on port Listening on http://localhost:3030...'));
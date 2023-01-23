import http from 'node:http';


const server = http.createServer((request, response) => {
    return response.end('hello rld');   
})

server.listen(3333)